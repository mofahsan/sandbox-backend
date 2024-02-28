const apiResponse = (config, transactionId, messageId) => {
    const data = {
      search: {
        context: {
            location: {
              country: {
                code: "IND"
              }
            },
            domain: "ONDC:TRV12",
            timestamp: "2023-09-03T01:55:08.143Z",
            bap_id: "example-bap.com",
            bap_uri: "https://api.example-bap.com/beckn",
            bpp_id: "api.transit-solutions.com",
            bpp_uri: "https://api.transit-solutions.com/beckn/",
            transaction_id: "6743e9e2-4fb5-487c-92b7-13ba8018f176",
            message_id: "1ba2dca2-144d-41a2-add5-2cc65014fa23",
            version: "2.0.0",
            action: "on_search",
            ttl: "PT30S"
          },
          message: {
            catalog: {
              descriptor: {
                name: "ABC Bus Services Solutions",
                images: [
                  {
                    url: "https://abc-bus.in/logos/logo.ico"
                  }
                ]
              },
              providers: [
                {
                  id: "P1",
                  descriptor: {
                    name: "ABC Operator 1 Bus Services",
                    images: [
                      {
                        url: "https://operator1.com/logos/logo.ico"
                      }
                    ]
                  },
                  fulfillments: [
                    {
                      id: "F1",
                      type: "TRIP",
                      stops: [
                        {
                          type: "START",
                          location: {
                            descriptor: {
                              name: "Bangalore",
                              code: "std:080"
                            }
                          }
                        },
                        {
                          id: "S1",
                          type: "PICKUP",
                          location: {
                            descriptor: {
                              name: "Agara",
                              code: "std:080-pincode:560034"
                            },
                            gps: "12.924479, 77.648999"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T06:30:00.000Z"
                          }
                        },
                        {
                          id: "S2",
                          type: "PICKUP",
                          location: {
                            descriptor: {
                              name: "Bellandur",
                              code: "std:080-pincode:560103"
                            },
                            gps: "12.930839, 77.677941"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T06:45:00.000Z"
                          }
                        },
                        {
                          type: "END",
                          location: {
                            descriptor: {
                              name: "Hyderabad",
                              code: "std:040"
                            }
                          }
                        },
                        {
                          id: "S3",
                          type: "DROP",
                          location: {
                            descriptor: {
                              name: "Ameerpet",
                              code: "std:040-pincode:500016"
                            },
                            gps: "17.441586, 78.441581"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T15:10:00.000Z"
                          }
                        },
                        {
                          id: "S4",
                          type: "DROP",
                          location: {
                            descriptor: {
                              name: "Central Bus Station",
                              code: "std:040-pincode:500012"
                            },
                            gps: "17.379024, 78.482443"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T15:30:00.000Z"
                          }
                        }
                      ],
                      vehicle: {
                        category: "BUS"
                      },
                      tags: [
                        {
                          descriptor: {
                            code: "VEHICLE_GRID"
                          },
                          display: false,
                          list: [
                            {
                              descriptor: {
                                code: "X_MAX"
                              },
                              value: "14"
                            },
                            {
                              descriptor: {
                                code: "Y_MAX"
                              },
                              value: "3"
                            },
                            {
                              descriptor: {
                                code: "Z_MAX"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "X_LOBBY_START"
                              },
                              value: "0"
                            },
                            {
                              descriptor: {
                                code: "X_LOBBY_SIZE"
                              },
                              value: "12"
                            },
                            {
                              descriptor: {
                                code: "Y_LOBBY_START"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "Y_LOBBY_SIZE"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "SEAT_SELECTION"
                              },
                              value: "mandatory"
                            }
                          ]
                        },
                        {
                          descriptor: {
                            code: "VEHICLE_AVAIBALITY"
                          },
                          display: false,
                          list: [
                            {
                              descriptor: {
                                code: "AVALIABLE_SEATS"
                              },
                              value: "20"
                            }
                          ]
                        },
                        {
                          descriptor: {
                            code: "VEHICLE_AMENITIES"
                          },
                          list: [
                            {
                              value: "WATER_BOTTLE"
                            },
                            {
                              value: "WIFI"
                            },
                            {
                              value: "BLANKET"
                            },
                            {
                              value: "CCTV"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: "F2",
                      type: "TRIP",
                      stops: [
                        {
                          type: "START",
                          location: {
                            descriptor: {
                              name: "Bangalore",
                              code: "std:080"
                            },
                            gps: "12.979759, 77.590427"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T20:00:00.000Z"
                          }
                        },
                        {
                          type: "PICKUP",
                          location: {
                            descriptor: {
                              name: "Agara",
                              code: "std:080-pincode:560034"
                            },
                            gps: "12.924479, 77.648999"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T20:30:00.000Z"
                          }
                        },
                        {
                          type: "PICKUP",
                          location: {
                            descriptor: {
                              name: "Bellandur",
                              code: "std:080-pincode:560103"
                            },
                            gps: "12.930839, 77.677941"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-06T20:50:00.000Z"
                          }
                        },
                        {
                          type: "END",
                          location: {
                            descriptor: {
                              name: "Hyderabad",
                              code: "std:040"
                            },
                            gps: "17.399832, 78.505532"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-07T06:00:00.000Z"
                          }
                        },
                        {
                          type: "DROP",
                          location: {
                            descriptor: {
                              name: "Ameerpet",
                              code: "std:040-pincode:500016"
                            },
                            gps: "17.441586, 78.441581"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-07T06:10:00.000Z"
                          }
                        },
                        {
                          type: "DROP",
                          location: {
                            descriptor: {
                              name: "Central Bus Station",
                              code: "std:040-pincode:500012"
                            },
                            gps: "17.379024, 78.482443"
                          },
                          time: {
                            label: "DATE_TIME",
                            timestamp: "2023-09-07T06:30:00.000Z"
                          }
                        }
                      ],
                      vehicle: {
                        category: "BUS"
                      },
                      tags: [
                        {
                          descriptor: {
                            code: "VEHICLE_GRID"
                          },
                          display: false,
                          list: [
                            {
                              descriptor: {
                                code: "X_MAX"
                              },
                              value: "14"
                            },
                            {
                              descriptor: {
                                code: "Y_MAX"
                              },
                              value: "3"
                            },
                            {
                              descriptor: {
                                code: "Z_MAX"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "X_LOBBY_START"
                              },
                              value: "0"
                            },
                            {
                              descriptor: {
                                code: "X_LOBBY_SIZE"
                              },
                              value: "12"
                            },
                            {
                              descriptor: {
                                code: "Y_LOBBY_START"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "Y_LOBBY_SIZE"
                              },
                              value: "1"
                            },
                            {
                              descriptor: {
                                code: "SEAT_SELECTION"
                              },
                              value: "mandatory"
                            }
                          ]
                        },
                        {
                          descriptor: {
                            code: "VEHICLE_AVAIBALITY"
                          },
                          display: false,
                          list: [
                            {
                              descriptor: {
                                code: "AVALIABLE_SEATS"
                              },
                              value: "22"
                            }
                          ]
                        },
                        {
                          descriptor: {
                            code: "VEHICLE_AMENITIES"
                          },
                          list: [
                            {
                              value: "WIFI"
                            },
                            {
                              value: "BLANKET"
                            },
                            {
                              value: "CCTV"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
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
  