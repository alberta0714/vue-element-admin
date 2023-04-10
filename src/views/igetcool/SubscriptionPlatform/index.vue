<template>
  <div class="app-container">
    <aside>DESIGNING 设计中……</aside>

    <config/>

<!--    <pre>-->
<!--    1、开放订阅平台-->
<!--    canal一些操作：链接至canal-admin-->
<!--    暂停、启动-->
<!--    重置-->
<!--    删除-->
<!--    创建-->
<!--    清理无用实例-->
<!--    kafka一些操作、链接至kafka-manager-->

<!--    canal:-->
<!--    配置订阅：-->
<!--    实例名称：-->
<!--    库，用户名，密码，-->
<!--    订阅的表、字段-->
<!--    过滤的表、字段-->

<!--    kafka-->
<!--    配置：-->
<!--    kafka队列名称，默认与上游订阅相同-->
<!--    分区数量-->
<!--    分区规则-->

<!--    中间处理接口或后生成新的json并提供返回数据-->

<!--    转发至  mq, es, mysql...-->
<!--    rocketMq    地址、签名、队列、标签-->
<!--    ES          地址、索引、索引mapping-->
<!--    mysql       用户名、密码、库、表-->
<!--    </pre>-->
  </div>
</template>
<script>
  import config from './components/config'

  export default {
    name: 'SubscriptionPlatform',
    components: {config}
  }
</script>
