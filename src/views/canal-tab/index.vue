<template>
  <div class="tab-container">
<!--    <el-tag>mounted times ：{{ createdTimes }}</el-tag>-->
<!--    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" />-->

<!--    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">-->
<!--      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">-->
<!--        <keep-alive>-->
<!--          <canal-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />-->
<!--          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />-->
<!--        </keep-alive>-->
<!--      </el-tab-pane>-->

<!--    </el-tabs>-->

        <sw-trace-pane/>

<!--        <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">-->


<!--          <el-tab-pane :key="tabMapOptions[0].key" :label="tabMapOptions[0].label" :name="tabMapOptions[0].key">-->
<!--            <keep-alive>-->
<!--              <canal-pane  v-if="activeName=='canal'"  :type="tabMapOptions[0].key" @create="showCreatedTimes" />-->
<!--            </keep-alive>-->
<!--          </el-tab-pane>-->

<!--          <el-tab-pane :key="tabMapOptions[1].key" :label="tabMapOptions[1].label" :name="tabMapOptions[1].key">-->
<!--            <keep-alive>-->
<!--              <tab-pane v-if="activeName=='CN'" :type="tabMapOptions[1].key" @create="showCreatedTimes" />-->
<!--            </keep-alive>-->
<!--          </el-tab-pane>-->



<!--        </el-tabs>-->

  </div>
</template>

<script>
import TabPane from './components/TabPane'
import CanalPane from './components/CanalPane'
import SwTracePane from "./components/SwTracePane";

export default {
  name: 'Canal-Tab',
  components: {SwTracePane, CanalPane, TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '订阅skywalking链路数据指标情况', key: 'canal' }
        ,{ label: '查询服务skywalking链路数据指标情况', key: 'CN' }
      ],
      activeName: 'canal',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab (/#/?tab=${tableKey})
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
