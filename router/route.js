process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const router = require("express").Router();
const axios = require("axios");
const mockUrl = process.env.mockUrl,
  callbackUrl = process.env.callbackUrl,
  GATEWAY_URL = process.env.GATEWAY_URL;
const {
  insertRequest,
  getCache,
  generateHeader,
  deleteCache,
  verifyHeader,
  insertSession,
  handleRequestForJsonMapper,
} = require("../utils/utils");
const { createBecknObject } = require("../utils/buildPayload");
const { extractPath } = require("../utils/buildPayload");
const { configLoader } = require("../configs/index");
const logger = require("../utils/logger");

router.post("/createHeader", async function (req, res) {
  try {
    const response = await generateHeader(req.body);
    res.setHeader("Authorization", response);
    res.setHeader("Access-Control-Expose-Headers", "*");
    return res.send(req.body);
  } catch (error) {
    logger.error("/createHeader  -  ", error);
    res.status(500).send("an error occurred");
  }
});

router.post("/:method", async (req, res) => {
  try {
    const method = req.params.method,
      body = req.body;
    if (
      !body?.context?.bap_uri ||
      !body?.context?.transaction_id ||
      (!body?.context?.bpp_uri && req.params.method !== "search")
    ) {
      return res.status(400).send({
        data: "validations failed bap_uri || transactionid || bppuri missing",
      });
    }

    body.context.bap_uri = `${callbackUrl}/ondc/`;
    let url;

    if (req.params.method == "search") {
      url = GATEWAY_URL;
    } else {
      url = body.context.bpp_uri;
    }

    if (url[url.length - 1] != "/") {
      //"add / if not exists in bap uri"
      url = url + "/";
    }

    const header = { headers: { Authorization: await generateHeader(body) } };

    insertRequest(body, req.headers);
    const response = await axios.post(`${url}${method}`, body, header);

    res.status(response.status).send(response.data);
  } catch (err) {
    logger.error(
      "/:method  -  ",
      err?.response?.data ? err?.response?.data : err.message
    );
    res
      .status(err?.response?.status || 500)
      .send(err?.response?.data ? err?.response?.data : err.message);
  }
});

router.get("/cache", async (req, res) => {
  try {
    const response = getCache(req.query.transactionid) || {
      message: "TransactionId does not have any data",
    };
    res.send(response);
  } catch (err) {
    logger.error("/cache  -  ", err);
  }
});

router.post("/ondc/:method", async (req, res) => {
  let body = req.body;

  logger.info("/ondc/:method message recieved -  ", body);

  if (process.env.ENABLE_SIGNATURE_VALIDATION === "true") {
    const isValid = await verifyHeader(req, process.env.LOOKUP_URL);
    if (isValid) {
      insertRequest(body, req.headers);
      const ack = {
        message: {
          ack: {
            status: "ACK",
          },
        },
      };
      res.status(200).json(ack);
      logger.info("/ondc/:method  -  ", req.body.context, "recieved context");
      logger.info("/ondc/:method  -  ", ack, "response");
    } else {
      const nack = {
        message: {
          ack: {
            status: "NACK",
          },
        },
      };
      res.status(400).json(nack);
    }
  } else {
    insertRequest(body, req.headers);
    handleRequestForJsonMapper(body);
    const ack = {
      message: {
        ack: {
          status: "ACK",
        },
      },
    };
    res.status(200).json(ack);
  }
});

router.delete("/cache", (req, res) => {
  try {
    const transactionId = req.query.transactionid;
    const deleted = deleteCache(transactionId);
    if (deleted) {
      res.send({
        message: "Response data for the transaction ID has been deleted",
      });
    } else {
      res.send({ message: "TransactionId not found in cache" });
    }
  } catch (err) {
    logger.error("/cache  -  ", err);
    res.status(500).send("Internal Server Error");
  }
});

// JSON mapper Api
router.post("/mapper/session", (req, res) => {
  const { country, cityCode, transaction_id, configName } = req.body;

  if (!country || !cityCode || !transaction_id || !configName) {
    return res.status(400).send({
      data: "validations failed  country || cityCode || transaction_id || configName missing",
    });
  }

  logger.info("body>>>>> /mapper/session  -  ", req.body);

  try {
    const {
      filteredCalls,
      filteredInput,
      filteredDomain,
      filteredSessiondata,
      filteredAdditionalFlows,
      filteredsummary,
    } = configLoader.getConfigBasedOnFlow(configName);

    const session = {
      ...req.body,
      bap_id: "mobility-staging.ondc.org",
      bap_uri: process.env.callbackUrl,
      ttl: "PT10M",
      domain: filteredDomain,
      summary: filteredsummary,
      ...filteredSessiondata,
      currentTransactionId: transaction_id,
      transactionIds: [transaction_id],
      input: filteredInput,
      protocolCalls: filteredCalls,
      additioalFlows: filteredAdditionalFlows,
    };

    insertSession(session);
    res.send({ sucess: true, data: session });
  } catch (e) {
    logger.error("Error while creating session  -  ", e);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/mapper/timeout", async (req, res) => {
  const { config, transactionId } = req.body;

  if (!config || !transactionId) {
    return res
      .status(400)
      .send({ data: "validations failed config || transactionid missing" });
  }

  let session = getCache("jm_" + transactionId);

  if (!session) {
    return res.status(400).send({ data: "No session found." });
  }

  session.protocolCalls[config].shouldRender = false;
  const preConfig = session.protocolCalls[config].preRequest;

  session.protocolCalls[preConfig] = {
    ...session.protocolCalls[preConfig],
    executed: false,
    shouldRender: true,
    becknPayload: null,
    businessPayload: null,
    messageId: null,
  };

  insertSession(session);
  return res.status(200).send({ session });
});

router.post("/mapper/extractPath", (req, res) => {
  const { path, obj } = req.body;

  if (!path || !obj) {
    return res.status(400).send({ data: "missing path || obj " });
  }
  try {
    const response = extractPath(path, obj);

    res.send({ response });
  } catch (e) {
    logger.info("Error while extracting path  -  ", e);
    res.status(400).send({ error: true, data: e });
  }
});

router.post("/mapper/repeat", async (req, res) => {
  const { transactionId, callType } = req.body;

  if (!transactionId || !callType) {
    return res.status(400).send({ data: "missing transactionId || callType" });
  }

  let session = getCache("jm_" + transactionId);

  if (!session) {
    return res.status(400).send({ data: "No session found." });
  }

  const newProtocolCall = {};
  let foundCall = false;

  Object.entries(session.protocolCalls).map((item) => {
    const [key, call] = item;

    if (foundCall) {
      call.becknPayload = null;
      call.businessPayload = null;
      call.messageId = null;
      call.executed = false;
      call.shouldRender = false;
    }

    if (call.type === callType) {
      call.becknPayload = null;
      call.businessPayload = null;
      call.messageId = null;
      call.executed = false;
      call.shouldRender = true;

      foundCall = true;
    }

    newProtocolCall[key] = call;
  });

  session.protocolCalls = newProtocolCall;
  insertSession(session);

  res.send({ session });
});

router.post("/mapper/addFlow", (req, res) => {
  const { configName, transactionId } = req.body;

  let session = getCache("jm_" + transactionId);

  if (!session) {
    return res.status(400).send({ data: "No session found." });
  }

  const { filteredCalls, filteredInput } =
    configLoader.getConfigBasedOnFlow(configName);

  session.protocolCalls = { ...session.protocolCalls, ...filteredCalls };
  session.input = { ...session.input, ...filteredInput };

  insertSession(session);

  res.send({ session });
});

router.get("/mapper/flows", (_req, res) => {
  const flows = configLoader.getListOfFlow();

  logger.info("Flows", flows);

  res.send({ data: flows });
});

router.post("/mapper/:config", async (req, res) => {
  const { transactionId, payload } = req.body;
  const config = req.params.config;
  let session = getCache("jm_" + transactionId);

  if (!session) {
    return res.status(400).send({ message: "No session exists" });
  }

  if (session.protocolCalls[config].type === "form") {
    session.protocolCalls[config] = {
      ...session.protocolCalls[config],
      executed: true,
      shouldRender: true,
      businessPayload: payload,
    };
    session = { ...session, ...payload };

    const nextRequest = session.protocolCalls[config].nextRequest;

    session.protocolCalls[nextRequest] = {
      ...session.protocolCalls[nextRequest],
      shouldRender: true,
    };

    insertSession(session);

    return res.status(200).send({ session });
  }

  try {
    const { payload: becknPayload, session: updatedSession } =
      createBecknObject(
        session,
        session.protocolCalls[config],
        payload,
        session.protocolCalls[config].protocol
      );

    session = updatedSession;
    insertRequest(becknPayload, null);
    session.protocolCalls[config] = {
      ...session.protocolCalls[config],
      executed: true,
      shouldRender: true,
      becknPayload: becknPayload,
      businessPayload: payload,
      messageId: becknPayload.context.message_id,
    };
    session = { ...session, ...payload };

    const type = session.protocolCalls[config].type;

    becknPayload.context.bap_uri = `${callbackUrl}/ondc`;
    let url;

    if (type == "search") {
      url = GATEWAY_URL;
    } else {
      url = becknPayload.context.bpp_uri;
    }

    if (url[url.length - 1] != "/") {
      //"add / if not exists in bap uri"
      url = url + "/";
    }

    logger.info("becknPayload /mapper/:config  -  ", becknPayload);

    const signedHeader = await generateHeader(becknPayload);
    logger.info("SignedHeader /mapper/:config  -  ", signedHeader);

    const header = { headers: { Authorization: signedHeader } };

    const response = await axios.post(`${url}${type}`, becknPayload, header);

    logger.info(
      "res>>>>>> /mapper/:config  -  ",
      JSON.stringify(response.data)
    );

    session.protocolCalls[config] = {
      ...session.protocolCalls[config],
      becknResponse: response.data,
    };

    // const response = {data: "afsa"}

    const nextRequest = session.protocolCalls[config].nextRequest;

    session.protocolCalls[nextRequest] = {
      ...session.protocolCalls[nextRequest],
      shouldRender: true,
    };

    insertSession(session);
    // // For tesitng
    // handleRequestForJsonMapper(apiResponse(config, transactionId, becknPayload.context.message_id))
    // if(config === "confirm") {
    //   handleRequestForJsonMapper(apiResponse("update", transactionId), true)
    // }
    res.status(200).send({ response: response.data, session });
  } catch (e) {
    logger.error(
      "Error while sending request  -  ",
      JSON.stringify(e?.response) || e
    );
    return res
      .status(500)
      .send({ message: "Error while sending request", data: e?.response || e });
  }
});

module.exports = router;
