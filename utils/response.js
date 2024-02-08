const apiResponse = (config, transactionId, messageId) => {
  const data = {
    search: {
      context: {
        action: "on_search",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-12-09T13:41:16.161Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        catalog: {
          descriptor: {
            name: "Mobility Servies BPP",
          },
          providers: [
            {
              fulfillments: [
                {
                  id: "F1",
                  stops: [
                    {
                      location: {
                        gps: "13.008935, 77.644408",
                      },
                      type: "START",
                    },
                    {
                      location: {
                        gps: "12.971186, 77.586812",
                      },
                      type: "END",
                    },
                  ],
                  type: "DELIVERY",
                  vehicle: {
                    category: "AUTO_RICKSHAW",
                  },
                },
                {
                  id: "F2",
                  stops: [
                    {
                      location: {
                        gps: "13.008935, 77.644408",
                      },
                      type: "START",
                    },
                    {
                      location: {
                        gps: "12.971186, 77.586812",
                      },
                      type: "END",
                    },
                  ],
                  type: "DELIVERY",
                  vehicle: {
                    category: "CAB",
                  },
                },
              ],
              id: "P1",
              items: [
                {
                  descriptor: {
                    code: "RIDE",
                    name: "Auto Ride",
                  },
                  fulfillment_ids: ["F1"],
                  id: "I1",
                  location_ids: ["L1", "L3"],
                  price: {
                    currency: "INR",
                    maximum_value: "176",
                    minimum_value: "136",
                    value: "146",
                  },
                },
                {
                  descriptor: {
                    code: "RIDE",
                    name: "CAB Economy Ride",
                  },
                  fulfillment_ids: ["F2"],
                  id: "I2",
                  location_ids: ["L2", "L4"],
                  price: {
                    currency: "INR",
                    maximum_value: "236",
                    minimum_value: "206",
                    value: "206",
                  },
                },
              ],
              locations: [
                {
                  gps: "12.916468,77.608998",
                  id: "L1",
                },
                {
                  gps: "12.916714,77.609298",
                  id: "L2",
                },
                {
                  gps: "12.916573,77.615216",
                  id: "L3",
                },
                {
                  gps: "12.906857,77.604456",
                  id: "L4",
                },
              ],
              payments: [
                {
                  collected_by: "BPP",
                  tags: [
                    {
                      descriptor: {
                        code: "BUYER_FINDER_FEES",
                      },
                      display: false,
                      list: [
                        {
                          descriptor: {
                            code: "BUYER_FINDER_FEES_PERCENTAGE",
                          },
                          value: "1",
                        },
                      ],
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_TERMS",
                      },
                      display: false,
                      list: [
                        {
                          descriptor: {
                            code: "SETTLEMENT_WINDOW",
                          },
                          value: "PT60M",
                        },
                        {
                          descriptor: {
                            code: "SETTLEMENT_BASIS",
                          },
                          value: "DELIVERY",
                        },
                        {
                          descriptor: {
                            code: "MANDATORY_ARBITRATION",
                          },
                          value: "true",
                        },
                        {
                          descriptor: {
                            code: "COURT_JURISDICTION",
                          },
                          value: "New Delhi",
                        },
                        {
                          descriptor: {
                            code: "STATIC_TERMS",
                          },
                          value:
                            "https://example-test-bpp.com/static-terms.txt",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    select: {
      context: {
        action: "on_select",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-12-09T13:49:26.132Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        order: {
          fulfillments: [
            {
              id: "F1",
              stops: [
                {
                  location: {
                    gps: "13.008935, 77.644408",
                  },
                  type: "START",
                },
                {
                  location: {
                    gps: "12.971186, 77.586812",
                  },
                  type: "END",
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "ROUTE_INFO",
                    name: "Route Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "ENCODED_POLYLINE",
                        name: "Path",
                      },
                      value: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                    },
                    {
                      descriptor: {
                        code: "WAYPOINTS",
                        name: "Waypoints",
                      },
                      value:
                        '[{"gps":"12.909982, 77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982, 77.611822"}]',
                    },
                  ],
                },
              ],
              type: "DELIVERY",
              vehicle: {
                category: "AUTO_RICKSHAW",
              },
            },
          ],
          items: [
            {
              descriptor: {
                code: "RIDE",
                name: "Auto Ride",
              },
              fulfillment_ids: ["F1"],
              id: "I1",
              location_ids: ["L1", "L3"],
              price: {
                currency: "INR",
                maximum_value: "176",
                minimum_value: "136",
                value: "146",
              },
              tags: [
                {
                  descriptor: {
                    code: "FARE_POLICY",
                    name: "Daytime Charges",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "MIN_FARE",
                      },
                      value: "30",
                    },
                    {
                      descriptor: {
                        code: "MIN_FARE_DISTANCE_KM",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "PER_KM_CHARGE",
                      },
                      value: "15",
                    },
                    {
                      descriptor: {
                        code: "PICKUP_CHARGE",
                      },
                      value: "10",
                    },
                    {
                      descriptor: {
                        code: "WAITING_CHARGE_PER_MIN",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_CHARGE_MULTIPLIER",
                      },
                      value: "1.5",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_START_TIME",
                      },
                      value: "22:00:00",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_END_TIME",
                      },
                      value: "05:00:00",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "INFO",
                    name: "General Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "DISTANCE_TO_NEAREST_DRIVER_METER",
                      },
                      value: "661",
                    },
                    {
                      descriptor: {
                        code: "ETA_TO_NEAREST_DRIVER_MIN",
                      },
                      value: "3",
                    },
                  ],
                },
              ],
            },
          ],
          provider: {
            id: "P1",
          },
          quote: {
            breakup: [
              {
                price: {
                  currency: "INR",
                  value: "30",
                },
                title: "BASE_FARE",
              },
              {
                price: {
                  currency: "INR",
                  value: "116",
                },
                title: "DISTANCE_FARE",
              },
            ],
            price: {
              currency: "INR",
              value: "146",
            },
            ttl: "P200s",
          },
        },
      },
    },
    init: {
      context: {
        action: "on_init",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-12-09T14:11:32.859Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        order: {
          cancellation_terms: [
            {
              cancellation_fee: {
                percentage: "0",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ASSIGNED",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "30",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ENROUTE_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "50",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ARRIVED_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                percentage: "100",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_STARTED",
                },
              },
              reason_required: true,
            },
          ],
          fulfillments: [
            {
              id: "F1",
              stops: [
                {
                  location: {
                    gps: "13.008935, 77.644408",
                  },
                  type: "START",
                },
                {
                  location: {
                    gps: "12.971186, 77.586812",
                  },
                  type: "END",
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "ROUTE_INFO",
                    name: "Route Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "ENCODED_POLYLINE",
                        name: "Path",
                      },
                      value: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                    },
                    {
                      descriptor: {
                        code: "WAYPOINTS",
                        name: "Waypoints",
                      },
                      value:
                        '[{"gps":"12.909982, 77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982, 77.611822"}]',
                    },
                  ],
                },
              ],
              type: "DELIVERY",
              vehicle: {
                category: "AUTO_RICKSHAW",
              },
            },
          ],
          items: [
            {
              descriptor: {
                code: "RIDE",
                name: "Auto Ride",
              },
              fulfillment_ids: ["F1"],
              id: "I1",
              location_ids: ["L1", "L3"],
              payment_ids: ["PA1"],
              price: {
                currency: "INR",
                maximum_value: "176",
                minimum_value: "136",
                value: "146",
              },
              tags: [
                {
                  descriptor: {
                    code: "FARE_POLICY",
                    name: "Daytime Charges",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "MIN_FARE",
                      },
                      value: "30",
                    },
                    {
                      descriptor: {
                        code: "MIN_FARE_DISTANCE_KM",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "PER_KM_CHARGE",
                      },
                      value: "15",
                    },
                    {
                      descriptor: {
                        code: "PICKUP_CHARGE",
                      },
                      value: "10",
                    },
                    {
                      descriptor: {
                        code: "WAITING_CHARGE_PER_MIN",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_CHARGE_MULTIPLIER",
                      },
                      value: "1.5",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_START_TIME",
                      },
                      value: "22:00:00",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_END_TIME",
                      },
                      value: "05:00:00",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "INFO",
                    name: "General Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "DISTANCE_TO_NEAREST_DRIVER_METER",
                      },
                      value: "661",
                    },
                    {
                      descriptor: {
                        code: "ETA_TO_NEAREST_DRIVER_MIN",
                      },
                      value: "3",
                    },
                  ],
                },
              ],
            },
          ],
          payments: [
            {
              collected_by: "BPP",
              id: "PA1",
              params: {
                bank_account_number: "xxxxxxxxxxxxxx",
                bank_code: "XXXXXXXX",
                virtual_payment_address: "9988199772@okicic",
              },
              status: "NOT-PAID",
              tags: [
                {
                  descriptor: {
                    code: "BUYER_FINDER_FEES",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "BUYER_FINDER_FEES_PERCENTAGE",
                      },
                      value: "1",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "SETTLEMENT_TERMS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "DELAY_INTEREST",
                      },
                      value: "5",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_TYPE",
                      },
                      value: "RSF",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_WINDOW",
                      },
                      value: "PT2D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "DELIVERY",
                    },
                    {
                      descriptor: {
                        code: "MANDATORY_ARBITRATION",
                      },
                      value: "true",
                    },
                    {
                      descriptor: {
                        code: "COURT_JURISDICTION",
                      },
                      value: "New Delhi",
                    },
                    {
                      descriptor: {
                        code: "STATIC_TERMS",
                      },
                      value: "https://example-test-bpp.com/static-terms.txt",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "1.46",
                    },
                  ],
                },
              ],
              type: "ON-FULFILLMENT",
            },
          ],
          provider: {
            id: "P1",
          },
          quote: {
            breakup: [
              {
                price: {
                  currency: "INR",
                  value: "30",
                },
                title: "BASE_FARE",
              },
              {
                price: {
                  currency: "INR",
                  value: "116",
                },
                title: "DISTANCE_FARE",
              },
            ],
            price: {
              currency: "INR",
              value: "146",
            },
            ttl: "PT30S",
          },
        },
      },
    },
    confirm: {
      context: {
        action: "on_confirm",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-12-10T08:03:34.294Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        order: {
          cancellation_terms: [
            {
              cancellation_fee: {
                percentage: "0",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ASSIGNED",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "30",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ENROUTE_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "50",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ARRIVED_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                percentage: "100",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_STARTED",
                },
              },
              reason_required: true,
            },
          ],
          fulfillments: [
            {
              agent: {
                contact: {
                  phone: "9856798567",
                },
                person: {
                  name: "Jason Roy",
                },
              },
              customer: {
                contact: {
                  phone: "9876556789",
                },
                person: {
                  name: "Joe Adams",
                },
              },
              id: "F1",
              state: {
                descriptor: {
                  code: "RIDE_ASSIGNED",
                },
              },
              stops: [
                {
                  authorization: {
                    token: "234234",
                    type: "OTP",
                  },
                  location: {
                    gps: "13.008935, 77.644408",
                  },
                  type: "START",
                },
                {
                  location: {
                    gps: "12.971186, 77.586812",
                  },
                  type: "END",
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "ROUTE_INFO",
                    name: "Route Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "ENCODED_POLYLINE",
                        name: "Path",
                      },
                      value: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                    },
                    {
                      descriptor: {
                        code: "WAYPOINTS",
                        name: "Waypoints",
                      },
                      value:
                        '[{"gps":"12.909982, 77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982, 77.611822"}]',
                    },
                  ],
                },
              ],
              type: "DELIVERY",
              vehicle: {
                category: "AUTO_RICKSHAW",
                make: "Bajaj",
                model: "Compact RE",
                registration: "KA-01-AD-9876",
              },
            },
          ],
          id: "O1",
          items: [
            {
              descriptor: {
                code: "RIDE",
                name: "Auto Ride",
              },
              fulfillment_ids: ["F1"],
              id: "I1",
              location_ids: ["L1", "L3"],
              payment_ids: ["PA1"],
              price: {
                currency: "INR",
                maximum_value: "176",
                minimum_value: "136",
                value: "146",
              },
              tags: [
                {
                  descriptor: {
                    code: "FARE_POLICY",
                    name: "Daytime Charges",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "MIN_FARE",
                      },
                      value: "30",
                    },
                    {
                      descriptor: {
                        code: "MIN_FARE_DISTANCE_KM",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "PER_KM_CHARGE",
                      },
                      value: "15",
                    },
                    {
                      descriptor: {
                        code: "PICKUP_CHARGE",
                      },
                      value: "10",
                    },
                    {
                      descriptor: {
                        code: "WAITING_CHARGE_PER_MIN",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_CHARGE_MULTIPLIER",
                      },
                      value: "1.5",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_START_TIME",
                      },
                      value: "22:00:00",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_END_TIME",
                      },
                      value: "05:00:00",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "INFO",
                    name: "General Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "DISTANCE_TO_NEAREST_DRIVER_METER",
                      },
                      value: "661",
                    },
                    {
                      descriptor: {
                        code: "ETA_TO_NEAREST_DRIVER_MIN",
                      },
                      value: "3",
                    },
                  ],
                },
              ],
            },
          ],
          payments: [
            {
              collected_by: "BPP",
              id: "PA1",
              params: {
                bank_account_number: "xxxxxxxxxxxxxx",
                bank_code: "XXXXXXXX",
                virtual_payment_address: "9988199772@okicic",
              },
              status: "NOT-PAID",
              tags: [
                {
                  descriptor: {
                    code: "BUYER_FINDER_FEES",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "BUYER_FINDER_FEES_PERCENTAGE",
                      },
                      value: "1",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "SETTLEMENT_TERMS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "DELAY_INTEREST",
                      },
                      value: "5",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_TYPE",
                      },
                      value: "RSF",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_WINDOW",
                      },
                      value: "PT2D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "DELIVERY",
                    },
                    {
                      descriptor: {
                        code: "MANDATORY_ARBITRATION",
                      },
                      value: "true",
                    },
                    {
                      descriptor: {
                        code: "COURT_JURISDICTION",
                      },
                      value: "New Delhi",
                    },
                    {
                      descriptor: {
                        code: "STATIC_TERMS",
                      },
                      value: "https://example-test-bpp.com/static-terms.txt",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "1.46",
                    },
                  ],
                },
              ],
              type: "ON-FULFILLMENT",
            },
          ],
          provider: {
            id: "P1",
          },
          quote: {
            breakup: [
              {
                price: {
                  currency: "INR",
                  value: "30",
                },
                title: "BASE_FARE",
              },
              {
                price: {
                  currency: "INR",
                  value: "116",
                },
                title: "DISTANCE_FARE",
              },
            ],
            price: {
              currency: "INR",
              value: "146",
            },
            ttl: "PT30S",
          },
          status: "ACTIVE",
          created_at: "2023-12-10T08:03:34.294Z",
          updated_at: "2023-12-10T08:03:34.294Z",
        },
      },
    },
    update: {
      context: {
        action: "on_update",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-12-11T03:54:28.832Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        order: {
          cancellation_terms: [
            {
              cancellation_fee: {
                percentage: "0",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ASSIGNED",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "30",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ENROUTE_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "50",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ARRIVED_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                percentage: "100",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_STARTED",
                },
              },
              reason_required: true,
            },
          ],
          fulfillments: [
            {
              agent: {
                contact: {
                  phone: "9856798567",
                },
                person: {
                  name: "Jason Roy",
                },
              },
              customer: {
                contact: {
                  phone: "9876556789",
                },
                person: {
                  name: "Joe Adams",
                },
              },
              id: "F1",
              state: {
                descriptor: {
                  code: "RIDE_ENDED",
                },
              },
              stops: [
                {
                  authorization: {
                    token: "234234",
                    type: "OTP",
                  },
                  location: {
                    gps: "13.008935, 77.644408",
                  },
                  type: "START",
                },
                {
                  location: {
                    gps: "12.971186, 77.586812",
                  },
                  type: "END",
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "ROUTE_INFO",
                    name: "Route Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "ENCODED_POLYLINE",
                        name: "Path",
                      },
                      value: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                    },
                    {
                      descriptor: {
                        code: "WAYPOINTS",
                        name: "Waypoints",
                      },
                      value:
                        '[{"gps":"12.909982, 77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982, 77.611822"}]',
                    },
                  ],
                },
              ],
              type: "DELIVERY",
              vehicle: {
                category: "AUTO_RICKSHAW",
                make: "Bajaj",
                model: "Compact RE",
                registration: "KA-01-AD-9876",
              },
            },
          ],
          id: "O1",
          items: [
            {
              descriptor: {
                code: "RIDE",
                name: "Auto Ride",
              },
              fulfillment_ids: ["F1"],
              id: "I1",
              location_ids: ["L1", "L3"],
              payment_ids: ["PA1"],
              price: {
                currency: "INR",
                maximum_value: "176",
                minimum_value: "136",
                value: "146",
              },
              tags: [
                {
                  descriptor: {
                    code: "FARE_POLICY",
                    name: "Daytime Charges",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "MIN_FARE",
                      },
                      value: "30",
                    },
                    {
                      descriptor: {
                        code: "MIN_FARE_DISTANCE_KM",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "PER_KM_CHARGE",
                      },
                      value: "15",
                    },
                    {
                      descriptor: {
                        code: "PICKUP_CHARGE",
                      },
                      value: "10",
                    },
                    {
                      descriptor: {
                        code: "WAITING_CHARGE_PER_MIN",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_CHARGE_MULTIPLIER",
                      },
                      value: "1.5",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_START_TIME",
                      },
                      value: "22:00:00",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_END_TIME",
                      },
                      value: "05:00:00",
                    },
                  ],
                },
              ],
            },
          ],
          payments: [
            {
              collected_by: "BPP",
              id: "PA1",
              params: {
                bank_account_number: "xxxxxxxxxxxxxx",
                bank_code: "XXXXXXXX",
                virtual_payment_address: "9988199772@okicic",
              },
              status: "NOT-PAID",
              tags: [
                {
                  descriptor: {
                    code: "BUYER_FINDER_FEES",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "BUYER_FINDER_FEES_PERCENTAGE",
                      },
                      value: "1",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "SETTLEMENT_TERMS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "DELAY_INTEREST",
                      },
                      value: "5",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_TYPE",
                      },
                      value: "RSF",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_WINDOW",
                      },
                      value: "PT2D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "DELIVERY",
                    },
                    {
                      descriptor: {
                        code: "MANDATORY_ARBITRATION",
                      },
                      value: "true",
                    },
                    {
                      descriptor: {
                        code: "COURT_JURISDICTION",
                      },
                      value: "New Delhi",
                    },
                    {
                      descriptor: {
                        code: "STATIC_TERMS",
                      },
                      value: "https://example-test-bpp.com/static-terms.txt",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "1.46",
                    },
                  ],
                },
              ],
              type: "ON-FULFILLMENT",
            },
          ],
          provider: {
            id: "P1",
          },
          quote: {
            breakup: [
              {
                price: {
                  currency: "INR",
                  value: "30",
                },
                title: "BASE_FARE",
              },
              {
                price: {
                  currency: "INR",
                  value: "116",
                },
                title: "DISTANCE_FARE",
              },
            ],
            price: {
              currency: "INR",
              value: "146",
            },
            ttl: "PT30S",
          },
          status: "COMPLETED",
          created_at: "2023-12-10T08:03:34.294Z",
          updated_at: "2023-12-11T03:54:28.832Z",
        },
      },
    },
    status: {
      context: {
        action: "on_status",
        bap_id: "example-bap.com",
        bap_uri: "https://example-bap.com/prod/trv10",
        bpp_id: "example-bpp.com",
        bpp_uri: "https://example-bpp.com/prod/seller",
        domain: "ONDC:TRV10",
        location: {
          city: {
            code: "std:080",
          },
          country: {
            code: "IND",
          },
        },
        message_id: messageId,
        timestamp: "2023-03-23T04:48:59Z",
        transaction_id: transactionId,
        ttl: "PT30S",
        version: "2.0.0",
      },
      message: {
        order: {
          id: "O1",
          cancellation_terms: [
            {
              cancellation_fee: {
                percentage: "0",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ASSIGNED",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "50",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ENROUTE_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                amount: {
                  currency: "INR",
                  value: "50",
                },
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_ARRIVED_PICKUP",
                },
              },
              reason_required: true,
            },
            {
              cancellation_fee: {
                percentage: "100",
              },
              fulfillment_state: {
                descriptor: {
                  code: "RIDE_STARTED",
                },
              },
              reason_required: true,
            },
          ],
          fulfillments: [
            {
              agent: {
                contact: {
                  phone: "9856798567",
                },
                person: {
                  name: "Jason Roy",
                },
              },
              customer: {
                contact: {
                  phone: "9876556789",
                },
                person: {
                  name: "Joe Adams",
                },
              },
              id: "F1",
              state: {
                descriptor: {
                  code: "RIDE_ENDED",
                  name: "Your ride has ended",
                },
              },
              stops: [
                {
                  location: {
                    gps: "13.008935, 77.644408",
                  },
                  type: "START",
                },
                {
                  location: {
                    gps: "12.971186, 77.586812",
                  },
                  type: "END",
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "ROUTE_INFO",
                    name: "Route Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "ENCODED_POLYLINE",
                        name: "Path",
                      },
                      value: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
                    },
                    {
                      descriptor: {
                        code: "WAYPOINTS",
                        name: "Waypoints",
                      },
                      value:
                        '[{"gps":"12.909982, 77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982,77.611822"},{"gps":"12.909982, 77.611822"}]',
                    },
                  ],
                },
              ],
              type: "DELIVERY",
              vehicle: {
                category: "AUTO_RICKSHAW",
                make: "Bajaj",
                model: "Compact RE",
                registration: "KA-01-AD-9876",
              },
            },
          ],
          items: [
            {
              descriptor: {
                code: "RIDE",
                name: "Auto Ride",
              },
              fulfillment_ids: ["F1"],
              id: "I1",
              location_ids: ["L1", "L3"],
              payment_ids: ["PA1"],
              price: {
                currency: "INR",
                maximum_value: "176",
                minimum_value: "156",
                value: "146",
              },
              tags: [
                {
                  descriptor: {
                    code: "FARE_POLICY",
                    name: "Daytime Charges",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "MIN_FARE",
                      },
                      value: "30",
                    },
                    {
                      descriptor: {
                        code: "MIN_FARE_DISTANCE_KM",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "PER_KM_CHARGE",
                      },
                      value: "15",
                    },
                    {
                      descriptor: {
                        code: "PICKUP_CHARGE",
                      },
                      value: "10",
                    },
                    {
                      descriptor: {
                        code: "WAITING_CHARGE_PER_MIN",
                      },
                      value: "2",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_CHARGE_MULTIPLIER",
                      },
                      value: "1.5",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_START_TIME",
                      },
                      value: "22:00:00",
                    },
                    {
                      descriptor: {
                        code: "NIGHT_SHIFT_END_TIME",
                      },
                      value: "05:00:00",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "INFO",
                    name: "General Information",
                  },
                  display: true,
                  list: [
                    {
                      descriptor: {
                        code: "DISTANCE_TO_NEAREST_DRIVER_METER",
                      },
                      value: "661",
                    },
                    {
                      descriptor: {
                        code: "ETA_TO_NEAREST_DRIVER_MIN",
                      },
                      value: "3",
                    },
                  ],
                },
              ],
            },
          ],
          payments: [
            {
              collected_by: "BPP",
              id: "PA1",
              params: {
                bank_account_number: "xxxxxxxxxxxxxx",
                bank_code: "XXXXXXXX",
                virtual_payment_address: "9988199772@okicic",
                transaction_id: "f08966dc-4c7d-4152-9a15-1046798cc39c",
                amount: "146",
              },
              status: "PAID",
              tags: [
                {
                  descriptor: {
                    code: "SETTLEMENT_DETAILS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "SETTLEMENT_TYPE",
                      },
                      value: "UPI",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "BUYER_FINDER_FEES",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "BUYER_FINDER_FEES_PERCENTAGE",
                      },
                      value: "1",
                    },
                  ],
                },
                {
                  descriptor: {
                    code: "SETTLEMENT_TERMS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "SETTLEMENT_WINDOW",
                      },
                      value: "PT60M",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "Delivery",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_TYPE",
                      },
                      value: "upi",
                    },
                    {
                      descriptor: {
                        code: "MANDATORY_ARBITRATION",
                      },
                      value: "true",
                    },
                    {
                      descriptor: {
                        code: "COURT_JURISDICTION",
                      },
                      value: "New Delhi",
                    },
                    {
                      descriptor: {
                        code: "DELAY_INTEREST",
                      },
                      value: "2.5",
                    },
                    {
                      descriptor: {
                        code: "STATIC_TERMS",
                      },
                      value: "https://example-test-bpp.com/static-terms.txt",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "174",
                    },
                  ],
                },
              ],
              type: "ON-FULFILLMENT",
            },
          ],
          provider: {
            id: "P1",
          },
          quote: {
            breakup: [
              {
                price: {
                  currency: "INR",
                  value: "30",
                },
                title: "BASE_FARE",
              },
              {
                price: {
                  currency: "INR",
                  value: "116",
                },
                title: "DISTANCE_FARE",
              },
            ],
            price: {
              currency: "INR",
              value: "146",
            },
            ttl: "P200S",
          },
        },
        status: "COMPLETED",
        created_at: "2023-12-10T08:03:34.294Z",
        updated_at: "2023-12-11T03:54:28.832Z",
      },
    },
  };

  return data[config];
};

module.exports = { apiResponse };
