<template>
  <div>
    <el-button @click="traceCheck()">点击扫描链路</el-button>

    <div style="margin-top: 10px;" v-if="!isLoaded">
      <aside><strong>加载中……</strong></aside>
    </div>

    <div v-if="isLoaded">
      <div>
        <dl>
          <strong>基础信息：</strong>
          <aside>
            <dd> 筛选时间范围：{{data.timeRangeStartGte}} ~ {{data.timeRangeEndLt}}</dd>
            <dd> 持续始末时间：{{data.timeStart}} ~ {{data.timeEnd}}</dd>
            <dd> 扫描相关Trace Id数：
              <el-tag>
                <count-to :end-val="data.totalTraceIdCount" :duration="500" :autoplay="true" suffix="个"/>
              </el-tag>
              耗时：{{data.tookHuman}}
            </dd>
            <!--            <dd> 业务数：{{ Object.keys(data.businessTraceIdCount).length }}个</dd>-->
            <!--            <dd> 业务对象：{{data.businessTraceIdCount}}</dd>-->
          </aside>
        </dl>


        <strong>业务分组：</strong>
        <dl>
          <aside>
            <dd v-for="(biVal, biName) in data.businessTraceIdCount">{{biName}}数量：{{biVal}}个</dd>
          </aside>
        </dl>

      </div>

      <strong>服务及链路信息：</strong>
      <el-tabs type="border-card">
        <el-tab-pane label="当前Skywalking涉及服务与ID的映">
          <el-table :data="data.trafficList" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="名称" element-loading-text="请给我点时间！">
              <template slot-scope="{row}">
                <span @click="showDialogServiceInfo(row)">{{ row.name }}</span>
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

        <el-tab-pane :label="brokenSwLabel">
          <el-table :data="data.trafficBrokenTraceIdSet" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId">
              <template slot-scope="scope">
                <span>{{ scope.row }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane :label="runtimeSwLabel">
          <el-table :data="data.runtimeExceptionErrorSet" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId">
              <template slot-scope="scope">
                <span>{{ scope.row }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>


      </el-tabs>

      <!-- 服务详情对话框 START -->
      <el-dialog :visible.sync="dialogServiceInfo.visible" title="详情">
        <el-table
          :data="dialogServiceInfo.list"
          border fit highlight-current-row
        >
          <el-table-column label="Key"><template slot-scope="{row}">{{row.key}}</template></el-table-column>
          <el-table-column label="Value"><template slot-scope="{row}">{{row.value}}</template></el-table-column>
        </el-table>


        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogServiceInfo.visible = false">确认</el-button>
      </span>
      </el-dialog>
      <!-- 服务详情对话框 END -->

    </div>
    <!-- 数据部分结束 -->


    <!-- you can add element-ui's tooltip -->
    <el-tooltip placement="top" content="tooltip">
      <back-to-top :visibility-height="300" :back-position="50"
                   transition-name="fade"/>
    </el-tooltip>
  </div>

</template>

<script>
  import {traceCheck} from '@/api/canal'
  import SplitPane from "vue-splitpane/src/split-pane/index";
  import countTo from 'vue-count-to'
  import VueCountTo from "vue-count-to/src/vue-countTo";
  import BackToTop from '@/components/BackToTop'
  // import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui

  export default {
    name: "SwTracePane",
    // directives: "elDragDialog",
    components: {VueCountTo, SplitPane, countTo, BackToTop,},

    data() {
      return {
        list: null,
        listQuery: {
          startGte: null,
          endLt: null,
          minutesAgo: 15
        },
        isLoaded: false,
        data: null,
        brokenSwLabel: "断掉的链路",
        runtimeSwLabel: "RuntimeException异常链路",

        dialogServiceInfo: {visible: false} // 显示服务详情信息
      }
    },
    created() {
      this.traceCheck()
    },
    methods: {
      showDialogServiceInfo(data) {
        console.log("显示对话窗口")
        console.log(data)

        this.dialogServiceInfo.list = [
          { key:"服务名称", value: data.name },
          { key:"Skywalking对应ID", value: data.id },
          { key:"节点类型", value: data.nodeTypeName },
          { key:"服务组", value: data.serviceGroup },
        ]

        this.dialogServiceInfo.visible = true
      },

      traceCheck() {
        this.isLoaded = false
        this.$emit('create') // for test
        traceCheck(this.listQuery).then(response => {
          this.data = response.data
          this.brokenSwLabel = "断掉的链路(" + response.data.trafficBrokenTraceIdSet.length + ")个"
          this.runtimeSwLabel = "断掉的链路(" + response.data.runtimeExceptionErrorSet.length + ")个"
          this.isLoaded = true
        })
      }

    }
  }
</script>

