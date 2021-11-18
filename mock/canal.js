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
          "took": 40333,
          "tookHuman": "40.33 s"
        }
      }
    }
  }


]

