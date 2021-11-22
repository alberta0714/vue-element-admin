module.exports = [
  {
    url: '/vue-element-admin/canal/canalList',
    type: 'get',
    response: config => {

      return {
        "code": 20000,
        "data": {
          "total": 1,
          "items": [
            {
              "id": 2404,
              "timestamp": 194267648353,
              "author": "Ronald",
              "reviewer": "Ronald",
              "title": "Gxcdq Upmyvh Qbwfjxovn Kneb Tpefigt Lsnx Dbd Gcduibork Oibxs",
              "content_short": "mock data",
              "content": "<p>I am testing data, I am testing data.</p><p><img src=\"https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943\"></p>",
              "forecast": 3.35,
              "importance": 1,
              "type": "canal",
              "status": "draft",
              "display_time": "2009-04-10 15:21:47",
              "comment_disabled": true,
              "pageviews": 4507,
              "image_uri": "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
              "platforms": [
                "a-platform"
              ]
            }
          ]
        }
      }
    }

  }



  ,{
    url: '/admin/dataquery/sw/checkpoint',
    type: 'get',
    response: config => {

      return {
        "code": 10000,
        "msg": "成功",
        "friendlyMsg": "成功",
        "data": {
          "trafficList": [
            {
              "id": "aWdldGNvb2wtZGF0YS1xdWVyeS11aS1xYQ==.1",
              "name": "igetcool-data-query-ui-qa",
              "serviceGroup": null,
              "nodeType": 0,
              "nodeTypeName": "Normal"
            },
            {
              "id": "aWdldGNvb2wtY2FuYWwtc3luYy1zZXJ2ZXItcWE=.1",
              "name": "igetcool-canal-sync-server-qa",
              "serviceGroup": null,
              "nodeType": 0,
              "nodeTypeName": "Normal"
            },
            {
              "id": "aWdldGNvb2wtZGF0YS1xdWVyeS1xYQ==.1",
              "name": "igetcool-data-query-qa",
              "serviceGroup": null,
              "nodeType": 0,
              "nodeTypeName": "Normal"
            },
            {
              "id": "aWdldGNvb2wtY2FuYWwta2Fma2EtYWRhcHRlci1xYQ==.1",
              "name": "igetcool-canal-kafka-adapter-qa",
              "serviceGroup": null,
              "nodeType": 0,
              "nodeTypeName": "Normal"
            }
          ],
          "totalTraceIdCount": 2552,
          "timeStart": "2021-11-16 10:34:48",
          "timeEnd": "2021-11-18 17:07:33",
          "timeRangeStartGte": "2021-11-16 10:34:48",
          "timeRangeEndLt": "2021-11-18 17:07:33",
          "businessTraceIdCount": {
            "mq.topic=igetcool-data-query-yuwen": 4,
            "mq.topic=DATA_QUERY_MULTI_APP_QA": 1765,
            "mq.topic=DATA_QUERY_MULTI_APP_OPEN_CLASS_QA": 403,
            "mq.topic=igetcool-data-query-app-orderdetail-qa": 380
          },
          "trafficBrokenTraceIdSet": [
            "b2b29893803b4750a6c7727eb439f6b4.508.16370448183403527",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370453606731411",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370453837921753",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370454072932101",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370547332265843",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370584965820477",
            "b2b29893803b4750a6c7727eb439f6b4.508.16370616023715539",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371192614511741",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371195472315903",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371330027411131",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371386458683057",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371390712019243",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371392303671575",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371423633217055",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371424086307719",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371435198893843",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371436015975043",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371438058378053",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371442740404853",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371443004725243",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371458773418137",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371458929318371",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371459108918639",
            "b2b29893803b4750a6c7727eb439f6b4.508.16371464995397187",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372166043683883",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372166950155209",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372167486765995",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372168222217065",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372174331155947",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372185450392117",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372190589219579",
            "b2b29893803b4750a6c7727eb439f6b4.508.16372245224758921"
          ],
          "runtimeExceptionErrorSet": [
            "b2b29893803b4750a6c7727eb439f6b4.509.16370488571802281"
          ],
          "traceBroken": {
            "b2b29893803b4750a6c7727eb439f6b4.508.16374150815943099": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16374150815952528",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637415081595",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16374150815943099"
                ],
                "startDateTime": "2021-11-20 21:31:21 595",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16374150815943098",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637415081594",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16374150815943099"
                ],
                "startDateTime": "2021-11-20 21:31:21 594",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375528583131933": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375528583142662",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637552858314",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528583131933"
                ],
                "startDateTime": "2021-11-22 11:47:38 314",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375528583131932",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637552858313",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528583131933"
                ],
                "startDateTime": "2021-11-22 11:47:38 313",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375528769662211": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375528769662210",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637552876966",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528769662211"
                ],
                "startDateTime": "2021-11-22 11:47:56 966",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375528769672678",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637552876967",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528769662211"
                ],
                "startDateTime": "2021-11-22 11:47:56 967",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375528981882531": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375528981882530",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637552898188",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528981882531"
                ],
                "startDateTime": "2021-11-22 11:48:18 188",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375528981892688",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637552898189",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375528981882531"
                ],
                "startDateTime": "2021-11-22 11:48:18 189",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375529501053305": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375529501053304",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637552950105",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375529501053305"
                ],
                "startDateTime": "2021-11-22 11:49:10 105",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375529501052742",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637552950105",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375529501053305"
                ],
                "startDateTime": "2021-11-22 11:49:10 105",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375669547386579": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375669547393058",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637566954739",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375669547386579"
                ],
                "startDateTime": "2021-11-22 15:42:34 739",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375669547386578",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637566954738",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375669547386579"
                ],
                "startDateTime": "2021-11-22 15:42:34 738",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375670037367301": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375670037373064",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637567003737",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375670037367301"
                ],
                "startDateTime": "2021-11-22 15:43:23 737",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375670037367300",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637567003736",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375670037367301"
                ],
                "startDateTime": "2021-11-22 15:43:23 736",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375745788837299": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375745788843442",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637574578884",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375745788837299"
                ],
                "startDateTime": "2021-11-22 17:49:38 884",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375745788837298",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637574578883",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375745788837299"
                ],
                "startDateTime": "2021-11-22 17:49:38 883",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375746202877911": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375746202883488",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637574620288",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375746202877911"
                ],
                "startDateTime": "2021-11-22 17:50:20 288",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375746202877910",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637574620287",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375746202877911"
                ],
                "startDateTime": "2021-11-22 17:50:20 287",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375746285388039": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375746285393526",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637574628539",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375746285388039"
                ],
                "startDateTime": "2021-11-22 17:50:28 539",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375746285388038",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637574628538",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375746285388039"
                ],
                "startDateTime": "2021-11-22 17:50:28 538",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375748980081993": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375748980093614",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637574898009",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375748980081993"
                ],
                "startDateTime": "2021-11-22 17:54:58 009",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375748980081992",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637574898008",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375748980081993"
                ],
                "startDateTime": "2021-11-22 17:54:58 008",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375749382372583": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375749382372582",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637574938237",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375749382372583"
                ],
                "startDateTime": "2021-11-22 17:55:38 237",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375749382373634",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637574938237",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375749382372583"
                ],
                "startDateTime": "2021-11-22 17:55:38 237",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375751377775519": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375751377783706",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637575137778",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375751377775519"
                ],
                "startDateTime": "2021-11-22 17:58:57 778",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375751377775518",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637575137777",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375751377775519"
                ],
                "startDateTime": "2021-11-22 17:58:57 777",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375752567077263": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375752567083746",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637575256708",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375752567077263"
                ],
                "startDateTime": "2021-11-22 18:00:56 708",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375752567077262",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637575256707",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375752567077263"
                ],
                "startDateTime": "2021-11-22 18:00:56 707",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375754376249935": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375754376253806",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637575437625",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375754376249935"
                ],
                "startDateTime": "2021-11-22 18:03:57 625",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375754376249934",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637575437624",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375754376249935"
                ],
                "startDateTime": "2021-11-22 18:03:57 624",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375754596280277": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375754596280276",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637575459628",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375754596280277"
                ],
                "startDateTime": "2021-11-22 18:04:19 628",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375754596283872",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637575459628",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375754596280277"
                ],
                "startDateTime": "2021-11-22 18:04:19 628",
                "error": false
              }
            ],
            "b2b29893803b4750a6c7727eb439f6b4.508.16375758074805337": [
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.508.16375758074805336",
                "endpointNames": [
                  "Kafka/igetcool-data-query-app-orderdetail-qa/Producer"
                ],
                "duration": 0,
                "start": "1637575807480",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375758074805337"
                ],
                "startDateTime": "2021-11-22 18:10:07 480",
                "error": false
              },
              {
                "segmentId": "b2b29893803b4750a6c7727eb439f6b4.526.16375758074813932",
                "endpointNames": [
                  "Kafka/Producer/Callback"
                ],
                "duration": 0,
                "start": "1637575807481",
                "traceIds": [
                  "b2b29893803b4750a6c7727eb439f6b4.508.16375758074805337"
                ],
                "startDateTime": "2021-11-22 18:10:07 481",
                "error": false
              }
            ]
          },

          "took": 40333,
          "tookHuman": "40.33 s"
        }
      }
    }
  }


]

