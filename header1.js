const { createAuthorizationHeader } = require("ondc-crypto-sdk-nodejs");

const body = {
  context: {
    bap_id: "mobility-staging.ondc.org",
    bap_uri: "https://2273-59-145-217-117.ngrok-free.app",
    location: { country: { code: "IND" } },
    transaction_id: "fc6029ea-7bfe-4d2f-ad5c-afeab8f08296",
    message_id: "5b7d1718-5807-4f5c-b478-54f4eff7ff41",
    timestamp: "2024-01-12T04:21:51.682Z",
    domain: "ONDC:TRV11",
    version: "2.0.0",
    ttl: "PT10M",
    action: "search",
  },
  message: {
    intent: {
      fulfillment: { vehicle: { category: "BUS" } },
      payment: {
        tags: [
          {
            descriptor: { code: "BUYER_FINDER_FEES" },
            list: [
              {
                descriptor: { code: "BUYER_FINDER_FEES_TYPE" },
                value: "percent-annualized",
              },
              {
                descriptor: { code: "BUYER_FINDER_FEES_PERCENTAGE" },
                value: "1",
              },
            ],
          },
          {
            descriptor: { code: "SETTLEMENT_TERMS" },
            list: [
              { descriptor: { code: "DELAY_INTEREST" }, value: "2.5" },
              {
                descriptor: { code: "STATIC_TERMS" },
                value:
                  "https://bap.credit.becknprotocol.io/personal-banking/loans/personal-loan",
              },
            ],
          },
        ],
      },
    },
  },
};

const selectbody = {
  context: {
    location: { country: { code: "IND" } },
    domain: "ONDC:TRV11",
    action: "select",
    version: "2.0.0",
    bap_id: "api.example-bap.com",
    bap_uri: "https://2273-59-145-217-117.ngrok-free.app",
    bpp_id: "api.example-bpp.com",
    bpp_uri: "https://api.example-bpp.com/ondc/metro",
    transaction_id: "fc6029ea-7bfe-4d2f-ad5c-afeab8f08296",
    message_id: "69411a94-7099-44dd-a977-eaaae2a17bea",
    timestamp: "2021-03-23T10:00:40.065Z",
    ttl: "PT30S",
  },
  message: {
    order: {
      items: [{ id: "I1", quantity: { selected: { count: 2 } } }],
      provider: { id: "P1" },
    },
  },
};

const createHeader = async (message) => {
  const SIGNING_PRIVATE_KEY =
    "Un205TSOdDXTq8E+N/sJOLJ8xalnzZ1EUP1Wcv23sKx70fOfFd4Q2bzfpzPQ+6XZhZv65SH7Pr6YMk8SuFHpxQ==";
  const BAP_ID = "mobility-staging.ondc.org";
  const UNIQUE_KEY_ID = "UK-MOBILITY";

  const header = await createAuthorizationHeader({
    message: message,
    privateKey: SIGNING_PRIVATE_KEY,
    bapId: BAP_ID, // Subscriber ID that you get after registering to ONDC Network
    bapUniqueKeyId: UNIQUE_KEY_ID, // Unique Key Id or uKid that you get after registering to ONDC Network
  });

  console.log("heasder", header);
  return header;
};

module.exports = {
  createHeader,
};

// createHeader();
