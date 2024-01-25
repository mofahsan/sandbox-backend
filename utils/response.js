const apiResponse = (config, transactionId) => {
  const data = {
    search_route: {
      context: {
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_search",
        version: "2.0.0",
        bpp_id: "api.example-bpp.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bap_id: "api.example-bap.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        catalog: {
          descriptor: {
            name: "Transit Solutions",
            images: [
              {
                url: "https://transitsolutions.in/logos/logo.ico",
              },
            ],
          },
          providers: [
            {
              id: "P1",
              categories: [
                {
                  descriptor: {
                    name: "Ticket",
                    code: "TICKET",
                  },
                  id: "C1",
                },
                {
                  descriptor: {
                    name: "Pass",
                    code: "PASS",
                  },
                  id: "C2",
                },
              ],
              time: {
                range: {
                  start: "2023-09-14T05:30:00.000Z",
                  end: "2023-09-14T23:30:00.000Z",
                },
              },
              descriptor: {
                name: "Delhi Metro Rail Limited",
                images: [
                  {
                    url: "https://delhimetrorail.com/logos/logo.ico",
                  },
                ],
              },
              fulfillments: [
                {
                  id: "F1",
                  type: "ROUTE",
                  stops: [
                    {
                      type: "START",
                      instructions: {
                        name: "Stop 1",
                      },
                      location: {
                        descriptor: {
                          code: "SAMAYPUR_BADLI",
                        },
                        gps: "28.744676, 77.138332",
                      },
                      id: "1",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 2",
                      },
                      location: {
                        descriptor: {
                          code: "ROHINI_SECTOR18,19",
                        },
                        gps: "28.738416, 77.139132",
                      },
                      id: "2",
                      parent_stop_id: "1",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 3",
                      },
                      location: {
                        descriptor: {
                          code: "HAIDERPUR_BADLI_MOR",
                        },
                        gps: "28.738876, 77.119932",
                      },
                      id: "3",
                      parent_stop_id: "2",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 4",
                      },
                      location: {
                        descriptor: {
                          code: "JAHANGIRPURI",
                        },
                        gps: "28.738411, 77.131132",
                      },
                      id: "4",
                      parent_stop_id: "3",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 5",
                      },
                      location: {
                        descriptor: {
                          code: "ADARSH_NAGAR",
                        },
                        gps: "28.738176, 77.139932",
                      },
                      id: "5",
                      parent_stop_id: "4",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 6",
                        short_desc: "Change for Pink Line",
                      },
                      location: {
                        descriptor: {
                          code: "AZADPUR",
                        },
                        gps: "28.738426, 77.139932",
                      },
                      id: "6",
                      parent_stop_id: "5",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 7",
                      },
                      location: {
                        descriptor: {
                          code: "MODEL_TOWN",
                        },
                        gps: "28.718476, 77.129932",
                      },
                      id: "7",
                      parent_stop_id: "6",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 8",
                      },
                      location: {
                        descriptor: {
                          code: "GTB_NAGAR",
                        },
                        gps: "28.738576, 77.139532",
                      },
                      id: "8",
                      parent_stop_id: "7",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 9",
                      },
                      location: {
                        descriptor: {
                          code: "VISHWA_VIDYALAYA",
                        },
                        gps: "28.731406, 77.131032",
                      },
                      id: "9",
                      parent_stop_id: "8",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 10",
                      },
                      location: {
                        descriptor: {
                          code: "VIDHAN_SABHA",
                        },
                        gps: "28.718476, 77.133932",
                      },
                      id: "10",
                      parent_stop_id: "9",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 11",
                      },
                      location: {
                        descriptor: {
                          code: "CIVIL_LINES",
                        },
                        gps: "28.798416, 77.119902",
                      },
                      id: "11",
                      parent_stop_id: "10",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 12",
                        short_desc: "Change for Red and Violet Line",
                      },
                      location: {
                        descriptor: {
                          code: "KASHMERE_GATE",
                        },
                        gps: "28.738426, 77.139922",
                      },
                      id: "12",
                      parent_stop_id: "11",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 13",
                      },
                      location: {
                        descriptor: {
                          code: "CHANDNI_CHOWK",
                        },
                        gps: "28.738446, 77.139942",
                      },
                      id: "13",
                      parent_stop_id: "12",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 14",
                      },
                      location: {
                        descriptor: {
                          code: "CHAWRI_BAZAR",
                        },
                        gps: "28.738477, 77.139937",
                      },
                      id: "14",
                      parent_stop_id: "13",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 15",
                        short_desc: "Change for Airport Express",
                      },
                      location: {
                        descriptor: {
                          code: "NEW_DELHI",
                        },
                        gps: "28.738276, 77.132932",
                      },
                      id: "15",
                      parent_stop_id: "14",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 16",
                        short_desc: "Change for Blue Line",
                      },
                      location: {
                        descriptor: {
                          code: "RAJIV_CHOWK",
                        },
                        gps: "28.738436, 77.139332",
                      },
                      id: "16",
                      parent_stop_id: "15",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 17",
                      },
                      location: {
                        descriptor: {
                          code: "PATEL_CHOWK",
                        },
                        gps: "28.738126, 77.133432",
                      },
                      id: "17",
                      parent_stop_id: "16",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 18",
                        short_desc: "Change for Violet Line",
                      },
                      location: {
                        descriptor: {
                          code: "CENTRAL_SECRETARIAT",
                        },
                        gps: "28.732076, 77.1301932",
                      },
                      id: "18",
                      parent_stop_id: "17",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 19",
                      },
                      location: {
                        descriptor: {
                          code: "UDYOG_BHAWAN",
                        },
                        gps: "28.611076, 77.212232",
                      },
                      id: "19",
                      parent_stop_id: "18",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 20",
                      },
                      location: {
                        descriptor: {
                          code: "LOK_KALYAN_MARG",
                        },
                        gps: "28.738176, 77.139132",
                      },
                      id: "20",
                      parent_stop_id: "19",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 21",
                      },
                      location: {
                        descriptor: {
                          code: "JOR_BAGH",
                        },
                        gps: "28.587876, 77.215332",
                      },
                      id: "21",
                      parent_stop_id: "20",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 22",
                        short_desc: "Change for Pink Line",
                      },
                      location: {
                        descriptor: {
                          code: "DILLI_HAAT_INA",
                        },
                        gps: "28.567276, 77.210032",
                      },
                      id: "22",
                      parent_stop_id: "21",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 23",
                      },
                      location: {
                        descriptor: {
                          code: "AIIMS",
                        },
                        gps: "28.731976, 77.139032",
                      },
                      id: "23",
                      parent_stop_id: "22",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 24",
                      },
                      location: {
                        descriptor: {
                          code: "GREEN_PARK",
                        },
                        gps: "28.558476, 77.202932",
                      },
                      id: "24",
                      parent_stop_id: "23",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 25",
                        short_desc: "Change for Magenta Line",
                      },
                      location: {
                        descriptor: {
                          code: "HAUZ_KHAS",
                        },
                        gps: "28.547912, 77.203132",
                      },
                      id: "25",
                      parent_stop_id: "24",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 26",
                      },
                      location: {
                        descriptor: {
                          code: "MALVIYA_NAGAR",
                        },
                        gps: "28.534276, 77.209432",
                      },
                      id: "26",
                      parent_stop_id: "25",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 27",
                      },
                      location: {
                        descriptor: {
                          code: "SAKET",
                        },
                        gps: "28.522176, 77.210232",
                      },
                      id: "27",
                      parent_stop_id: "26",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 28",
                      },
                      location: {
                        descriptor: {
                          code: "QUTAB_MINAR",
                        },
                        gps: "28.524576, 77.185532",
                      },
                      id: "28",
                      parent_stop_id: "27",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 29",
                      },
                      location: {
                        descriptor: {
                          code: "CHHATARPUR",
                        },
                        gps: "28.495976, 77.184832",
                      },
                      id: "29",
                      parent_stop_id: "28",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 30",
                      },
                      location: {
                        descriptor: {
                          code: "SULTANPUR",
                        },
                        gps: "28.496776, 77.163432",
                      },
                      id: "30",
                      parent_stop_id: "29",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 31",
                      },
                      location: {
                        descriptor: {
                          code: "GHITORNI",
                        },
                        gps: "28.496476, 77.139432",
                      },
                      id: "31",
                      parent_stop_id: "30",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 32",
                      },
                      location: {
                        descriptor: {
                          code: "ARJAN_GARH",
                        },
                        gps: "28.480976, 77.125932",
                      },
                      id: "32",
                      parent_stop_id: "31",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 33",
                      },
                      location: {
                        descriptor: {
                          code: "GURU_DRONACHARYA",
                        },
                        gps: "28.568476, 77.089932",
                      },
                      id: "33",
                      parent_stop_id: "32",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 34",
                        short_desc: "Change for Rapid Metro",
                      },
                      location: {
                        descriptor: {
                          code: "SIKANDERPUR",
                        },
                        gps: "28.778476, 77.199932",
                      },
                      id: "34",
                      parent_stop_id: "33",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 35",
                      },
                      location: {
                        descriptor: {
                          code: "MG_ROAD",
                        },
                        gps: "28.418476, 77.133268",
                      },
                      id: "35",
                      parent_stop_id: "34",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 36",
                      },
                      location: {
                        descriptor: {
                          code: "IFFCO_CHOWK",
                        },
                        gps: "28.472276, 77.072432",
                      },
                      id: "36",
                      parent_stop_id: "35",
                    },
                    {
                      type: "END",
                      instructions: {
                        name: "Stop 37",
                      },
                      location: {
                        descriptor: {
                          code: "HUDA_CITY_CENTRE",
                        },
                        gps: "28.459276, 77.072532",
                      },
                      id: "37",
                      parent_stop_id: "36",
                    },
                  ],
                },
                {
                  id: "F2",
                  type: "ROUTE",
                  stops: [
                    {
                      type: "START",
                      instructions: {
                        name: "Stop 1",
                      },
                      location: {
                        descriptor: {
                          code: "NEW_DELHI",
                        },
                        gps: "28.738216, 77.130932",
                      },
                      id: "1",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 1",
                      },
                      location: {
                        descriptor: {
                          code: "SHIVAJI_STADIUM",
                        },
                        gps: "28.732276, 77.132132",
                      },
                      id: "2",
                      parent_stop_id: "1",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 2",
                        short_desc: "Change for Pink Line",
                      },
                      location: {
                        descriptor: {
                          code: "DHAULA_KUAN",
                        },
                        gps: "28.712276, 77.122132",
                      },
                      id: "3",
                      parent_stop_id: "2",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 3",
                      },
                      location: {
                        descriptor: {
                          code: "DELHI_AEROCITY",
                        },
                        gps: "28.712176, 77.122932",
                      },
                      id: "4",
                      parent_stop_id: "3",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 4",
                      },
                      location: {
                        descriptor: {
                          code: "IGI_AIRPORT",
                        },
                        gps: "28.742176, 77.122332",
                      },
                      id: "5",
                      parent_stop_id: "4",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 5",
                        short_desc: "Change for Blue Line",
                      },
                      location: {
                        descriptor: {
                          code: "DWARKA_SECTOR_21",
                        },
                        gps: "28.742156, 77.122232",
                      },
                      id: "6",
                      parent_stop_id: "5",
                    },
                    {
                      type: "END",
                      instructions: {
                        name: "Stop 6",
                      },
                      location: {
                        descriptor: {
                          code: "ECC_CENTRE_DWARKA_SECTOR_25",
                        },
                        gps: "28.712176, 77.112332",
                      },
                      id: "7",
                      parent_stop_id: "6",
                    },
                  ],
                  vehicle: {
                    category: "METRO",
                  },
                },
              ],
              payments: [
                {
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
                          value: "PT30D",
                        },
                        {
                          descriptor: {
                            code: "SETTLEMENT_BASIS",
                          },
                          value: "INVOICE_RECEIPT",
                        },
                        {
                          descriptor: {
                            code: "MANDATORY_ARBITRATION",
                          },
                          value: "TRUE",
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
                          value: "https://api.example-bpp.com/booking/terms",
                        },
                      ],
                    },
                  ],
                },
              ],
              cancellation_terms: [
                {
                  external_ref: {
                    mimetype: "text/html",
                    url: "https://transitsolutions.com/mf/tnc.html",
                  },
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "SCHEDULED_INFO",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "GTFS",
                      },
                      value: "https://metro-transit/gtfs-realtime",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    search_trip: {
      context: {
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_search",
        version: "2.0.0",
        bpp_id: "api.example-bpp.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bap_id: "api.example-bap.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        catalog: {
          descriptor: {
            name: "Transit Solutions",
            images: [
              {
                url: "https://transitsolutions.in/logos/logo.ico",
              },
            ],
          },
          providers: [
            {
              id: "P1",
              categories: [
                {
                  descriptor: {
                    name: "Ticket",
                    code: "TICKET",
                  },
                  id: "C1",
                },
                {
                  descriptor: {
                    name: "Pass",
                    code: "PASS",
                  },
                  id: "C2",
                },
              ],
              time: {
                range: {
                  start: "2023-09-14T05:30:00.000Z",
                  end: "2023-09-14T23:30:00.000Z",
                },
              },
              descriptor: {
                name: "Delhi Metro Rail Limited",
                images: [
                  {
                    url: "https://delhimetrorail.com/logos/logo.ico",
                  },
                ],
              },
              items: [
                {
                  id: "I1",
                  category_ids: ["C1"],
                  descriptor: {
                    name: "Single Journey Ticket",
                    code: "SJT",
                  },
                  price: {
                    currency: "INR",
                    value: "60",
                  },
                  quantity: {
                    maximum: {
                      count: 6,
                    },
                    minimum: {
                      count: 1,
                    },
                  },
                  fulfillment_ids: ["F1"],
                  time: {
                    label: "Validity",
                    duration: "PT2D",
                  },
                },
                {
                  id: "I2",
                  category_ids: ["C1"],
                  descriptor: {
                    name: "Round Journey Ticket",
                    code: "RJT",
                  },
                  price: {
                    currency: "INR",
                    value: "110",
                  },
                  quantity: {
                    maximum: {
                      count: 6,
                    },
                    minimum: {
                      count: 1,
                    },
                  },
                  fulfillment_ids: ["F1"],
                  time: {
                    label: "Validity",
                    duration: "PT2D",
                  },
                },
                {
                  id: "I3",
                  category_ids: ["1", "2"],
                  descriptor: {
                    name: "Journey Pass",
                    code: "Pass",
                  },
                  price: {
                    currency: "INR",
                    value: "500",
                  },
                  quantity: {
                    maximum: {
                      count: 1,
                    },
                    minimum: {
                      count: 1,
                    },
                  },
                  fulfillment_ids: ["F2"],
                  time: {
                    label: "Validity",
                    duration: "PT2D",
                  },
                },
              ],
              fulfillments: [
                {
                  id: "F1",
                  type: "TRIP",
                  stops: [
                    {
                      type: "START",
                      location: {
                        descriptor: {
                          name: "Shaheed Sthal(New Bus Adda)",
                          code: "SHAHEED_STHAL",
                        },
                        gps: "28.686576, 77.441632",
                      },
                      id: "1",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 1",
                      },
                      location: {
                        descriptor: {
                          name: "Hindon River",
                          code: "HINDON_RIVER",
                        },
                        gps: "28.686176, 77.442632",
                      },
                      id: "2",
                      parent_stop_id: "1",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 2",
                      },
                      location: {
                        descriptor: {
                          name: "Arthala",
                        },
                        gps: "28.181276, 77.442332",
                      },
                      id: "3",
                      parent_stop_id: "2",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 3",
                      },
                      location: {
                        descriptor: {
                          name: "Mohan Nagar",
                        },
                        gps: "28.981276, 77.772332",
                      },
                      id: "4",
                      parent_stop_id: "3",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 4",
                      },
                      location: {
                        descriptor: {
                          name: "Shyam Park",
                        },
                        gps: "28.620976, 77.046732",
                      },
                      id: "5",
                      parent_stop_id: "4",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 5",
                      },
                      location: {
                        descriptor: {
                          name: "Major Mohit Sharma Rajendra Nagar",
                        },
                        gps: "28.120976, 77.946732",
                      },
                      id: "6",
                      parent_stop_id: "5",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 6",
                      },
                      location: {
                        descriptor: {
                          name: "Raj Bagh",
                        },
                        gps: "28.677076, 77.346632",
                      },
                      id: "7",
                      parent_stop_id: "6",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 7",
                      },
                      location: {
                        descriptor: {
                          name: "Shaheed Nagar",
                        },
                        gps: "28.617076, 77.146632",
                      },
                      id: "8",
                      parent_stop_id: "7",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 8",
                      },
                      location: {
                        descriptor: {
                          name: "Dilshad Garden",
                        },
                        gps: "28.917076, 77.146632",
                      },
                      id: "9",
                      parent_stop_id: "8",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 9",
                      },
                      location: {
                        descriptor: {
                          name: "Jhilmil",
                        },
                        gps: "28.897076, 77.146632",
                      },
                      id: "10",
                      parent_stop_id: "9",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 10",
                      },
                      location: {
                        descriptor: {
                          name: "Mansarovar Park",
                        },
                        gps: "28.117076, 77.116632",
                      },
                      id: "11",
                      parent_stop_id: "10",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 11",
                      },
                      location: {
                        descriptor: {
                          name: "Shahdara",
                        },
                        gps: "28.127076, 77.416632",
                      },
                      id: "12",
                      parent_stop_id: "11",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 12",
                      },
                      location: {
                        descriptor: {
                          name: "Welcome",
                        },
                        gps: "28.217076, 77.216632",
                      },
                      id: "13",
                      parent_stop_id: "12",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 13",
                      },
                      location: {
                        descriptor: {
                          name: "Seelampur",
                        },
                        gps: "28.327076, 77.416632",
                      },
                      id: "14",
                      parent_stop_id: "13",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 14",
                      },
                      location: {
                        descriptor: {
                          name: "Shastri Park",
                        },
                        gps: "28.427076, 77.446632",
                      },
                      id: "15",
                      parent_stop_id: "14",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        name: "Stop 15",
                        short_desc: "Please Change here for Yellow Line",
                      },
                      location: {
                        descriptor: {
                          name: "Kashmere Gate",
                        },
                        gps: "28.738426, 77.139922",
                      },
                      id: "16",
                      parent_stop_id: "15",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 16",
                      },
                      location: {
                        descriptor: {
                          name: "Civil Lines",
                        },
                        gps: "28.627076, 77.646632",
                      },
                      id: "17",
                      parent_stop_id: "16",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 17",
                      },
                      location: {
                        descriptor: {
                          name: "Vidhan Sabha",
                        },
                        gps: "28.727076, 77.746632",
                      },
                      id: "18",
                      parent_stop_id: "17",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 18",
                      },
                      location: {
                        descriptor: {
                          name: "Vishwavidyalaya",
                        },
                        gps: "28.827076, 77.846632",
                      },
                      id: "19",
                      parent_stop_id: "18",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 19",
                      },
                      location: {
                        descriptor: {
                          name: "Guru Tegh Bahadur Nagar",
                        },
                        gps: "28.927076, 77.946632",
                      },
                      id: "20",
                      parent_stop_id: "19",
                    },
                    {
                      type: "INTERMEDIATE_STOP",
                      instructions: {
                        name: "Stop 20",
                      },
                      location: {
                        descriptor: {
                          name: "Model Town",
                        },
                        gps: "28.217076, 77.496632",
                      },
                      id: "21",
                      parent_stop_id: "20",
                    },
                    {
                      type: "END",
                      location: {
                        descriptor: {
                          name: "Azadpur",
                          code: "AZADPUR",
                        },
                        gps: "28.707358, 77.180910",
                      },
                      id: "22",
                      parent_stop_id: "21",
                    },
                  ],
                  vehicle: {
                    category: "METRO",
                  },
                },
                {
                  id: "F2",
                  type: "TRIP",
                  stops: [
                    {
                      type: "START",
                      location: {
                        descriptor: {
                          name: "Shaheed Sthal(New Bus Adda)",
                          code: "SHAHEED_STHAL",
                        },
                        gps: "28.686576, 77.441632",
                      },
                      id: "1",
                    },
                    {
                      type: "TRANSIT_STOP",
                      instructions: {
                        short_desc: "Please Change here for Yellow Line",
                      },
                      location: {
                        descriptor: {
                          name: "Kashmere Gate",
                        },
                        gps: "28.738426, 77.139922",
                      },
                      id: "2",
                      parent_stop_id: "1",
                    },
                    {
                      type: "END",
                      location: {
                        descriptor: {
                          name: "Azadpur",
                          code: "AZADPUR",
                        },
                        gps: "28.707358, 77.180910",
                      },
                      id: "3",
                      parent_stop_id: "2",
                    },
                  ],
                  tags: [
                    {
                      descriptor: {
                        code: "TRIP_DETAILS",
                      },
                      list: [
                        {
                          descriptor: {
                            code: "AVAILABLE_TRIPS",
                          },
                          value: "30",
                        },
                        {
                          descriptor: {
                            code: "UTILIZED_TRIPS",
                          },
                          value: "0",
                        },
                      ],
                    },
                  ],
                  vehicle: {
                    category: "METRO",
                  },
                },
              ],
              payments: [
                {
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
                          value: "PT30D",
                        },
                        {
                          descriptor: {
                            code: "SETTLEMENT_BASIS",
                          },
                          value: "INVOICE_RECEIPT",
                        },
                        {
                          descriptor: {
                            code: "MANDATORY_ARBITRATION",
                          },
                          value: "TRUE",
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
                          value: "https://api.example-bpp.com/booking/terms",
                        },
                      ],
                    },
                  ],
                },
              ],
              cancellation_terms: [
                {
                  external_ref: {
                    mimetype: "text/html",
                    url: "https://transitsolutions.com/mf/tnc.html",
                  },
                },
              ],
              tags: [
                {
                  descriptor: {
                    code: "SCHEDULED_INFO",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "GTFS",
                      },
                      value: "https://metro-transit/gtfs-realtime",
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
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_select",
        version: "2.0.0",
        bap_id: "api.example-bap.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bpp_id: "api.example-bpp.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        order: {
          items: [
            {
              id: "I1",
              category_ids: ["C1"],
              descriptor: {
                name: "Single Journey Ticket",
                code: "SJT",
              },
              price: {
                currency: "INR",
                value: "60",
              },
              quantity: {
                selected: {
                  count: 2,
                },
              },
              fulfillment_ids: ["F1", "F2"],
              time: {
                label: "Validity",
                duration: "PT2D",
              },
            },
          ],
          provider: {
            id: "P1",
            descriptor: {
              name: "Delhi Metro Rail Limited",
              images: [
                {
                  url: "https://delhimetrorail.com/logos/logo.ico",
                },
              ],
            },
            time: {
              range: {
                start: "2023-09-14T05:30:00.000Z",
                end: "2023-09-14T23:30:00.000Z",
              },
            },
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
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
            {
              id: "F2",
              type: "TRIP",
              stops: [
                {
                  type: "START",
                  location: {
                    descriptor: {
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
          ],
          quote: {
            price: {
              value: "120",
              currency: "INR",
            },
            breakup: [
              {
                title: "BASE_FARE",
                item: {
                  id: "I1",
                  price: {
                    currency: "INR",
                    value: "60",
                  },
                  quantity: {
                    selected: {
                      count: 2,
                    },
                  },
                },
                price: {
                  currency: "INR",
                  value: "120",
                },
              },
            ],
          },
          cancellation_terms: [
            {
              external_ref: {
                mimetype: "text/html",
                url: "https://transitsolutions.com/mf/tnc.html",
              },
            },
          ],
          tags: [
            {
              descriptor: {
                code: "SCHEDULED_INFO",
              },
              display: false,
              list: [
                {
                  descriptor: {
                    code: "GTFS",
                  },
                  value: "https://metro-transit/gtfs-realtime",
                },
              ],
            },
          ],
        },
      },
    },
    init: {
      context: {
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_init",
        version: "2.0.0",
        bap_id: "api.example-bap.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bpp_id: "api.example-bpp.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        order: {
          items: [
            {
              id: "I1",
              category_ids: ["C1"],
              descriptor: {
                name: "Single Journey Ticket",
                code: "SJT",
              },
              price: {
                currency: "INR",
                value: "60",
              },
              quantity: {
                selected: {
                  count: 2,
                },
              },
              fulfillment_ids: ["F1", "F2"],
              time: {
                label: "Validity",
                duration: "PT2D",
              },
            },
          ],
          provider: {
            id: "P1",
            descriptor: {
              name: "Delhi Metro Rail Limited",
              images: [
                {
                  url: "https://delhimetrorail.com/logos/logo.ico",
                },
              ],
            },
            time: {
              range: {
                start: "2023-09-14T05:30:00.000Z",
                end: "2023-09-14T23:30:00.000Z",
              },
            },
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
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
            {
              id: "F2",
              type: "TRIP",
              stops: [
                {
                  type: "START",
                  location: {
                    descriptor: {
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
          ],
          billing: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+91-9897867564",
          },
          quote: {
            price: {
              value: "120",
              currency: "INR",
            },
            breakup: [
              {
                title: "BASE_FARE",
                item: {
                  id: "I1",
                  price: {
                    currency: "INR",
                    value: "60",
                  },
                  quantity: {
                    selected: {
                      count: 2,
                    },
                  },
                },
                price: {
                  currency: "INR",
                  value: "120",
                },
              },
            ],
          },
          payments: [
            {
              id: "PA1",
              collected_by: "BAP",
              status: "NOT-PAID",
              type: "PRE-ORDER",
              params: {
                bank_code: "XXXXXXXX",
                bank_account_number: "xxxxxxxxxxxxxx",
                virtual_payment_address: "9988199772@okicic",
              },
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
                      value: "PT30D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "INVOICE_RECEIPT",
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
                      value: "https://api.example-bpp.com/booking/terms",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "59",
                    },
                  ],
                },
              ],
            },
          ],
          cancellation_terms: [
            {
              external_ref: {
                mimetype: "text/html",
                url: "https://transitsolutions.com/mf/tnc.html",
              },
            },
          ],
          tags: [
            {
              descriptor: {
                code: "SCHEDULED_INFO",
              },
              display: false,
              list: [
                {
                  descriptor: {
                    code: "GTFS",
                  },
                  value: "https://metro-transit/gtfs-realtime",
                },
              ],
            },
          ],
        },
      },
    },
    confirm: {
      context: {
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_confirm",
        version: "2.0.0",
        bap_id: "api.example-bap.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bpp_id: "api.example-bpp.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        order: {
          id: "077b248f",
          status: "ACTIVE",
          items: [
            {
              id: "I1",
              category_ids: ["C1"],
              descriptor: {
                name: "Single Journey Ticket",
                code: "SJT",
              },
              price: {
                currency: "INR",
                value: "60",
              },
              quantity: {
                selected: {
                  count: 2,
                },
              },
              fulfillment_ids: ["F1", "F2"],
              time: {
                label: "Validity",
                duration: "PT2D",
              },
            },
          ],
          provider: {
            id: "P1",
            descriptor: {
              name: "Delhi Metro Rail Limited",
              images: [
                {
                  url: "https://delhimetrorail.com/logos/logo.ico",
                },
              ],
            },
            time: {
              range: {
                start: "2023-09-14T05:30:00.000Z",
                end: "2023-09-14T23:30:00.000Z",
              },
            },
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
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  authorization: {
                    type: "QR",
                    token:
                      "iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9AQAAAACn+1GIAAAApklEQVR4Xu2UMQ4EMQgD/QP+/0vK6zjsvayUMmavWxQpMAUBkwS12wcveAAkgNSCD3rR5Lkgoai3GUCMgWqbAEYR3HxAkZlzU/0MyBisYRsgI1ERFfcpBpA+ze6k56Cj7KTdXNigFWZvSOpsgqLfd18i2aAukXh9TXBNmdWt5gzA/oqzWkkN8HtA7G8CNOwYAiZt3wZixUfkA32OHNQq7Bxs9oI/gC/9fV8AVCkPjQAAAABJRU5ErkJggg==",
                    valid_to: "2021-03-23T23:59:59.999Z",
                    status: "UNCLAIMED",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
            {
              id: "F2",
              type: "TRIP",
              stops: [
                {
                  type: "START",
                  location: {
                    descriptor: {
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  authorization: {
                    type: "QR",
                    token:
                      "xNMPRw0KGgoAAAANSUhEUgAAAH0AAAB9AQAAAACn+1GIAAAApklEQVR4Xu2UMQ4EMQgD/QP+/0vK6zjsvayUMmavWxQpMAUBkwS12wcveAAkgNSCD3rR5Lkgoai3GUCMgWqbAEYR3HxAkZlzU/0MyBisYRsgI1ERFfcpBpA+ze6k56Cj7KTdXNigFWZvSOpsgqLfd18i2aAukXh9TXBNmdWt5gzA/oqzWkkN8HtA7G8CNOwYAiZt3wZixUfkA32OHNQq7Bxs9oI/gC/9fV8AVCkPjQAAAABJRU5ErkJggg==",
                    valid_to: "2021-03-23T23:59:59.999Z",
                    status: "UNCLAIMED",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
          ],
          billing: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+91-9897867564",
          },
          quote: {
            price: {
              value: "120",
              currency: "INR",
            },
            breakup: [
              {
                title: "BASE_FARE",
                item: {
                  id: "I1",
                  price: {
                    currency: "INR",
                    value: "60",
                  },
                  quantity: {
                    selected: {
                      count: 2,
                    },
                  },
                },
                price: {
                  currency: "INR",
                  value: "120",
                },
              },
            ],
          },
          payments: [
            {
              id: "PA1",
              collected_by: "BAP",
              status: "PAID",
              type: "PRE-ORDER",
              params: {
                transaction_id: "34cc9b0b-6887-4c63-8397-2f4fcf03e50d",
                currency: "INR",
                amount: "120",
                bank_code: "XXXXXXXX",
                bank_account_number: "xxxxxxxxxxxxxx",
                virtual_payment_address: "9988199772@okicic",
              },
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
                      value: "PT30D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "INVOICE_RECEIPT",
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
                      value: "https://api.example-bpp.com/booking/terms",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "59",
                    },
                  ],
                },
              ],
            },
          ],
          cancellation_terms: [
            {
              external_ref: {
                mimetype: "text/html",
                url: "https://transitsolutions.com/mf/tnc.html",
              },
            },
          ],
          tags: [
            {
              descriptor: {
                code: "SCHEDULED_INFO",
              },
              display: false,
              list: [
                {
                  descriptor: {
                    code: "GTFS",
                  },
                  value: "https://metro-transit/gtfs-realtime",
                },
              ],
            },
          ],
        },
      },
    },
    status: {
      context: {
        location: {
          country: {
            code: "IND",
          },
          city: {
            code: "std:011",
          },
        },
        domain: "ONDC:TRV11",
        action: "on_status",
        version: "2.0.0",
        bap_id: "api.example-bap.com",
        bap_uri: "https://api.example-bap.com/ondc/metro",
        bpp_id: "api.example-bpp.com",
        bpp_uri: "https://api.example-bpp.com/ondc/metro",
        transaction_id: transactionId,
        message_id: "fde8b8b6-c2e5-49f7-b254-720843d528bd",
        timestamp: "2021-03-23T10:00:40.065Z",
        ttl: "PT30S",
      },
      message: {
        order: {
          id: "077b248f",
          status: "COMPLETE",
          items: [
            {
              id: "I1",
              descriptor: {
                name: "Single Journey Ticket",
                code: "SJT",
              },
              category_ids: ["C1"],
              price: {
                currency: "INR",
                value: "60",
              },
              quantity: {
                selected: {
                  count: 2,
                },
              },
              fulfillment_ids: ["F1", "F2"],
              time: {
                label: "Validity",
                duration: "PT2D",
              },
            },
          ],
          provider: {
            id: "P1",
            descriptor: {
              name: "Delhi Metro Rail Limited",
              images: [
                {
                  url: "https://delhimetrorail.com/logos/logo.ico",
                },
              ],
            },
            time: {
              range: {
                start: "2023-09-14T05:30:00.000Z",
                end: "2023-09-14T23:30:00.000Z",
              },
            },
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
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
            {
              id: "F2",
              type: "TRIP",
              stops: [
                {
                  type: "START",
                  location: {
                    descriptor: {
                      name: "Shaheed Sthal(New Bus Adda)",
                      code: "SHAHEED_STHAL",
                    },
                    gps: "28.686576, 77.441632",
                  },
                  id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 1",
                  },
                  location: {
                    descriptor: {
                      name: "Hindon River",
                      code: "HINDON_RIVER",
                    },
                    gps: "28.686176, 77.442632",
                  },
                  id: "2",
                  parent_stop_id: "1",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 2",
                  },
                  location: {
                    descriptor: {
                      name: "Arthala",
                    },
                    gps: "28.181276, 77.442332",
                  },
                  id: "3",
                  parent_stop_id: "2",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 3",
                  },
                  location: {
                    descriptor: {
                      name: "Mohan Nagar",
                    },
                    gps: "28.981276, 77.772332",
                  },
                  id: "4",
                  parent_stop_id: "3",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 4",
                  },
                  location: {
                    descriptor: {
                      name: "Shyam Park",
                    },
                    gps: "28.620976, 77.046732",
                  },
                  id: "5",
                  parent_stop_id: "4",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 5",
                  },
                  location: {
                    descriptor: {
                      name: "Major Mohit Sharma Rajendra Nagar",
                    },
                    gps: "28.120976, 77.946732",
                  },
                  id: "6",
                  parent_stop_id: "5",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 6",
                  },
                  location: {
                    descriptor: {
                      name: "Raj Bagh",
                    },
                    gps: "28.677076, 77.346632",
                  },
                  id: "7",
                  parent_stop_id: "6",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 7",
                  },
                  location: {
                    descriptor: {
                      name: "Shaheed Nagar",
                    },
                    gps: "28.617076, 77.146632",
                  },
                  id: "8",
                  parent_stop_id: "7",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 8",
                  },
                  location: {
                    descriptor: {
                      name: "Dilshad Garden",
                    },
                    gps: "28.917076, 77.146632",
                  },
                  id: "9",
                  parent_stop_id: "8",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 9",
                  },
                  location: {
                    descriptor: {
                      name: "Jhilmil",
                    },
                    gps: "28.897076, 77.146632",
                  },
                  id: "10",
                  parent_stop_id: "9",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 10",
                  },
                  location: {
                    descriptor: {
                      name: "Mansarovar Park",
                    },
                    gps: "28.117076, 77.116632",
                  },
                  id: "11",
                  parent_stop_id: "10",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 11",
                  },
                  location: {
                    descriptor: {
                      name: "Shahdara",
                    },
                    gps: "28.127076, 77.416632",
                  },
                  id: "12",
                  parent_stop_id: "11",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 12",
                  },
                  location: {
                    descriptor: {
                      name: "Welcome",
                    },
                    gps: "28.217076, 77.216632",
                  },
                  id: "13",
                  parent_stop_id: "12",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 13",
                  },
                  location: {
                    descriptor: {
                      name: "Seelampur",
                    },
                    gps: "28.327076, 77.416632",
                  },
                  id: "14",
                  parent_stop_id: "13",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 14",
                  },
                  location: {
                    descriptor: {
                      name: "Shastri Park",
                    },
                    gps: "28.427076, 77.446632",
                  },
                  id: "15",
                  parent_stop_id: "14",
                },
                {
                  type: "TRANSIT_STOP",
                  instructions: {
                    name: "Stop 15",
                    short_desc: "Please Change here for Yellow Line",
                  },
                  location: {
                    descriptor: {
                      name: "Kashmere Gate",
                    },
                    gps: "28.738426, 77.139922",
                  },
                  id: "16",
                  parent_stop_id: "15",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 16",
                  },
                  location: {
                    descriptor: {
                      name: "Civil Lines",
                    },
                    gps: "28.627076, 77.646632",
                  },
                  id: "17",
                  parent_stop_id: "16",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 17",
                  },
                  location: {
                    descriptor: {
                      name: "Vidhan Sabha",
                    },
                    gps: "28.727076, 77.746632",
                  },
                  id: "18",
                  parent_stop_id: "17",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 18",
                  },
                  location: {
                    descriptor: {
                      name: "Vishwavidyalaya",
                    },
                    gps: "28.827076, 77.846632",
                  },
                  id: "19",
                  parent_stop_id: "18",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 19",
                  },
                  location: {
                    descriptor: {
                      name: "Guru Tegh Bahadur Nagar",
                    },
                    gps: "28.927076, 77.946632",
                  },
                  id: "20",
                  parent_stop_id: "19",
                },
                {
                  type: "INTERMEDIATE_STOP",
                  instructions: {
                    name: "Stop 20",
                  },
                  location: {
                    descriptor: {
                      name: "Model Town",
                    },
                    gps: "28.217076, 77.496632",
                  },
                  id: "21",
                  parent_stop_id: "20",
                },
                {
                  type: "END",
                  location: {
                    descriptor: {
                      name: "Azadpur",
                      code: "AZADPUR",
                    },
                    gps: "28.707358, 77.180910",
                  },
                  id: "22",
                  parent_stop_id: "21",
                },
              ],
              vehicle: {
                category: "METRO",
              },
            },
          ],
          cancellation_terms: [
            {
              external_ref: {
                mimetype: "text/html",
                url: "https://transitsolutions.com/mf/tnc.html",
              },
            },
          ],
          tags: [
            {
              descriptor: {
                code: "SCHEDULED_INFO",
              },
              display: false,
              list: [
                {
                  descriptor: {
                    code: "GTFS",
                  },
                  value: "https://metro-transit/gtfs-realtime",
                },
              ],
            },
          ],
          billing: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+91-9897867564",
          },
          quote: {
            price: {
              value: "120",
              currency: "INR",
            },
            breakup: [
              {
                title: "BASE_FARE",
                item: {
                  id: "I1",
                  price: {
                    currency: "INR",
                    value: "60",
                  },
                  quantity: {
                    selected: {
                      count: 2,
                    },
                  },
                },
                price: {
                  currency: "INR",
                  value: "120",
                },
              },
            ],
          },
          payments: [
            {
              id: "PA1",
              collected_by: "BAP",
              status: "PAID",
              type: "PRE-ORDER",
              params: {
                transaction_id: "34cc9b0b-6887-4c63-8397-2f4fcf03e50d",
                currency: "INR",
                amount: "120",
                bank_code: "XXXXXXXX",
                bank_account_number: "xxxxxxxxxxxxxx",
                virtual_payment_address: "9988199772@okicic",
              },
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
                    code: "SETTLEMENT_TERMS",
                  },
                  display: false,
                  list: [
                    {
                      descriptor: {
                        code: "SETTLEMENT_WINDOW",
                      },
                      value: "PT30D",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_BASIS",
                      },
                      value: "INVOICE_RECEIPT",
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
                      value: "https://api.example-bpp.com/booking/terms",
                    },
                    {
                      descriptor: {
                        code: "SETTLEMENT_AMOUNT",
                      },
                      value: "59",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  };

  return data[config];
};

module.exports = { apiResponse };
