<template>
  <div>
    <el-button @click="traceCheck()">扫描链路</el-button>

    <div v-if="isLoaded">
      <dl>
        <dd> 起始时间：{{data.timeRangeStartGte}}</dd>
        <dd> 结束时间：{{data.timeRangeEndLt}}</dd>
        <dd> 持续开始时间：{{data.timeStart}}</dd>
        <dd> 持续结束时间：{{data.timeEnd}}</dd>
        <dd> 扫描相关Trace Id数：<el-tag>{{data.totalTraceIdCount}}</el-tag>个</dd>
        <dd> 耗时：{{data.tookHuman}}</dd>
      </dl>

      <dl>
        <dt>业务分组：</dt>
        <dd v-for="(biVal, biName) in data.businessTraceIdCount">{{biName}}数量：{{biVal}}个</dd>
      </dl>

    </div>

    <el-tabs v-if="isLoaded" type="border-card">

      <el-tab-pane label="当前Skywalking涉及服务与ID的映射">
        <el-table v-if="isLoaded" :data="data.trafficList" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="名称" element-loading-text="请给我点时间！">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column label="Skywalking中匹配到的ID">
            <template slot-scope="{row}">
              <span>{{ row.id }}</span>
              <!--        <el-tag>{{ row.type }}</el-tag>-->
            </template>
          </el-table-column>


          <el-table-column label="节点类型">
            <template slot-scope="{row}">
              <el-tag>{{ row.nodeTypeName }}</el-tag>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>

      <el-tab-pane label="断开的链路">
        <el-table :data="data.trafficBrokenTraceIdSet" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="TraceId">
            <template slot-scope="scope">
              <span>{{ scope.row }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>


      <el-tab-pane label="异常的链路">
        <el-table :data="data.runtimeExceptionErrorSet" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="TraceId">
            <template slot-scope="scope">
              <span>{{ scope.row }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>


    </el-tabs>

  </div>

</template>

<script>
  import {traceCheck} from '@/api/canal'

  export default {
    components: {},

    data() {
      return {
        list: null,
        listQuery: {
          startGte: null,
          endLt: null,
          minutesAgo: 15
        },
        isLoaded: false,
        data: null
      }
    },
    created() {
      this.traceCheck()
    },
    methods: {
      traceCheck() {
        this.isLoaded = false
        this.$emit('create') // for test
        traceCheck(this.listQuery).then(response => {
          this.data = response.data
          this.isLoaded = true
        })
      }
    }
  }
</script>

