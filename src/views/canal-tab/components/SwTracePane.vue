<template>
  <div>
    <el-form>
      <el-row :gutter="10">
        <el-col style="float: left; width: 220px;">
          <el-form-item label="Quick:">
            <el-select v-model="listQuery.minutesAgo" style="width: 120px;">
              <el-option :value="5" :key="5" label="5分钟前"/>
              <el-option :value="15" :key="15" label="15分钟前"/>
              <el-option :value="30" :key="30" label="30分钟前"/>
              <el-option :value="60" :key="60" label="1小时前"/>
              <el-option :value="180" :key="180" label="3小时前"/>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col style="float: left; width:520px;">
          <el-form-item label="Time Range:">
            <el-date-picker
              v-model="listQueryExt.qTimeRange"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="截止日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col style="float: left; width:340px;">
          <el-form-item label="Duration(ms): ">
            <el-input-number placeholder="DURATION" v-model="listQuery.duration"/>
          </el-form-item>
        </el-col>

        <el-col style="float: left; width:320px;">
          <el-button class="filter-item" type="primary" icon="search"
                     @click="doSearch()">扫描链路
          </el-button>
        </el-col>
      </el-row>
    </el-form>

    <div style="margin-top: 10px;" v-if="!isLoaded">
      <aside><strong>加载中……</strong></aside>
    </div>

    <div v-if="isLoaded">
      <aside>
        <p>
          持续始末时间：{{data.timeStart}} ~ {{data.timeEnd}}<br/>
          扫描相关根TraceId总数：
          <el-tag>
            <count-to :end-val="data.totalTraceIdCount" :duration="500" :autoplay="true" suffix="个"/>
          </el-tag>
          耗时：{{data.tookHuman}}<br/>
        </p>
        <!--            <dd> 业务数：{{ Object.keys(data.businessTraceIdCount).length }}个</dd>-->
        <!--            <dd> 业务对象：{{data.businessTraceIdCount}}</dd>-->
      </aside>

      <!-- 卡片 -->
      <h4>服务映射及<span style="color:red;">异常链路</span>信息：</h4>
      <el-tabs type="border-card">
        <!-- 更简要的trace信息 -->
        <!--        <el-tab-pane :label="brokenSwLabel">-->
        <!--          <el-table :data="Object.keys(data.traceBroken)" border fit highlight-current-row style="width: 100%">-->
        <!--            <el-table-column>-->
        <!--              <template slot-scope="slop">-->
        <!--                {{  slop.row  }}-->
        <!--              </template>-->
        <!--            </el-table-column>-->
        <!--          </el-table>-->
        <!--        </el-tab-pane>-->

        <!-- 当前Skywalking涉及服务与ID的映 -->
        <el-tab-pane label="当前Skywalking涉及服务与ID的映">
          <el-table :data="data.trafficList" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="名称" element-loading-text="请给我点时间！">
              <template slot-scope="{row}">
                <span @click="showDialogServiceInfo(row)" style="cursor: pointer;">{{ row.name }}</span>
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

        <!--  断路-链路 -->
        <el-tab-pane :label="brokenSwLabel">
          <el-table :data="brokenTableData" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId">
              <template slot-scope="scope"><span @click="showDialogBrokenTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.traceId}}</span></template>
            </el-table-column>
            <el-table-column align="center" label="StartTime">
              <template slot-scope="scope"><span @click="showDialogBrokenTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.startTime}}</span></template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!--  运行时异常-链路 -->
        <el-tab-pane :label="runtimeSwLabel">
          <el-table :data="data.runtimeExceptionErrorSet" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId">
              <template slot-scope="scope">
                <span>{{ scope.row }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>


        <!-- 分组统计 -->
        <el-tab-pane :label="tableBiGroup.labelName">
          <el-table :data="tableBiGroup.list" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="服务名称">
              <template slot-scope="{row}">
                <span>{{ row.key }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="数量">
              <template slot-scope="{row}">
                <span>{{ row.value }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>


      </el-tabs>

      <!-- 服务详情对话框 START -->
      <el-dialog :visible.sync="dialogServiceInfo.visible" title="详情">
        <el-table :data="dialogServiceInfo.list" border fit highlight-current-row>
          <el-table-column label="Key">
            <template slot-scope="{row}">{{row.key}}</template>
          </el-table-column>
          <el-table-column label="Value">
            <template slot-scope="{row}">{{row.value}}</template>
          </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogServiceInfo.visible = false">确认</el-button></span>
      </el-dialog>
      <!-- 服务详情对话框 END -->
      <!-- 断路详情对话窗口 -->
      <el-dialog :visible.sync="dialogBrokenTraceInfo.visible" title="断路详情">
        <el-table :data="dialogBrokenTraceInfo.list" border fit highlight-current-row>
          <el-table-column label="segmentId"><template slot-scope="{row}"><span>{{ row.segmentId }}</span></template></el-table-column>
          <el-table-column label="startDateTime"><template slot-scope="{row}"><span>{{ row.startDateTime }}</span></template></el-table-column>
          <el-table-column label="error"><template slot-scope="{row}"><span>{{ row.error }}</span></template></el-table-column>

<!--          <el-table-column label="duration"><template slot-scope="{row}"><span>{{ row.duration }}</span></template></el-table-column>-->
<!--          <el-table-column label="traceIds"><template slot-scope="{row}"><span>{{ row.traceIds }}</span></template></el-table-column>-->
          <el-table-column label="endpointNames"><template slot-scope="{row}"><span>{{ row.endpointNames }}</span></template></el-table-column>

        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogBrokenTraceInfo.visible = false">确认</el-button></span>
      </el-dialog>

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
  import {traceCheck, traceCheckApiDev} from '@/api/canal'
  import SplitPane from "vue-splitpane/src/split-pane/index";
  import countTo from 'vue-count-to'
  import VueCountTo from "vue-count-to/src/vue-countTo";
  import BackToTop from '@/components/BackToTop'
  // import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
  import waves from '@/directive/waves' // waves directive
  import MDinput from '@/components/MDinput'
  import Sticky from '@/components/Sticky' // 粘性header组件
  import Tinymce from '@/components/Tinymce'
  import Upload from '@/components/Upload/SingleImage3'
  import {validURL} from '@/utils/validate'

  export default {
    name: "SwTracePane",
    // directives: "elDragDialog",
    components: {VueCountTo, SplitPane, countTo, BackToTop,},


    data() {
      return {
        listQuery: {
          startGte: null,
          endLt: null,
          minutesAgo: 180,
          duration: 0
        },
        listQueryExt: {qTimeRange: []},
        isLoaded: false,
        data: null
        , brokenSwLabel: "断掉的链路"
        , runtimeSwLabel: "RuntimeException异常链路"
        , dialogServiceInfo: {visible: false} // 显示服务详情信息
        , dialogBrokenTraceInfo: {visible: false}  // 弹窗显示断路详情
        , tableBiGroup: {list: [], labelName: "业务分组统计"}
        , brokenTableData:[]
      }
    },
    created() {
      this.doSearch()
    },
    methods: {
      showDialogServiceInfo(data) {
        console.log("显示对话窗口")
        console.log(data)

        this.dialogServiceInfo.list = [
          {key: "服务名称", value: data.name},
          {key: "Skywalking对应ID", value: data.id},
          {key: "节点类型", value: data.nodeTypeName},
          {key: "服务组", value: data.serviceGroup},
        ]

        this.dialogServiceInfo.visible = true
      }
      , showDialogBrokenTraceInfo(row) {
        console.log("显示断路详情")
        console.log(row)
        this.dialogBrokenTraceInfo.list = []
        for (let traceId of Object.keys(this.data.traceBroken)) {
          this.dialogBrokenTraceInfo.list = this.data.traceBroken[traceId]
        }
        console.log(this.dialogBrokenTraceInfo.list)
        this.dialogBrokenTraceInfo.visible = true
      },

      doSearch() {
        this.$notify({
          title: '数据加载中',
          message: '数据加载中',
          type: 'info',
          duration: 2000
        })

        this.isLoaded = false
        this.$emit('create') // for test
        if (this.listQueryExt.qTimeRange.length == 2) {
          this.listQuery.startGte = this.listQueryExt.qTimeRange[0]
          this.listQuery.endLt = this.listQueryExt.qTimeRange[1]
        }
        traceCheck(this.listQuery)
        // traceCheckApiDev(this.listQuery)
          .then(response => {
            this.isLoaded = true
            this.data = response.data
            this.brokenSwLabel = "断掉的链路(" + response.data.trafficBrokenTraceIdSet.length + ")个"
            this.runtimeSwLabel = "RuntimeException异常链路(" + response.data.runtimeExceptionErrorSet.length + ")个"
            // 构建业务分组数据
            this.tableBiGroup.list = []
            for (let biName of Object.keys(this.data.businessTraceIdCount)) {
              let biCount = this.data.businessTraceIdCount[biName]
              this.tableBiGroup.list.push({key: biName, value: biCount})
            }
            this.tableBiGroup.labelName = "业务分组统计(" + Object.keys(this.data.businessTraceIdCount).length + ")个";
            // 构建brokenTrace数据 brokenTableData
            this.brokenTableData=[]
            for (let traceId of Object.keys(this.data.traceBroken)) {
              this.brokenTableData.push({
                traceId: traceId
                , startTime: this.data.traceBroken[traceId][0].startDateTime
              })
            }
            console.log("新断路表：")
            console.log(this.brokenTableData)


            this.$notify({
              title: '数据加载成功',
              message: '数据加载成功',
              type: 'success',
              duration: 2000
            })

          })

      }

    }
  }
</script>

