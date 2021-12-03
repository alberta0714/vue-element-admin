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
              <el-option :value="null" :key="-1" label="不限制"/>
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

        <el-col style="float: left; width:420px;">
          <el-button class="filter-item" icon="el-icon-search" @click="doScanSwTraces()" type="primary">扫描链路</el-button>
        </el-col>
<!--        <el-button icon="el-icon-search" type="primary" @click.prevent.stop="guide">Show Guide</el-button>-->
      </el-row>
    </el-form>

    <div style="margin-top: 10px;" v-if="!isLoaded">
      <aside><strong>加载中……</strong></aside>
    </div>

    <div v-if="isLoaded">
      <aside>
        <p>
          持续始末时间：{{data.timeStart}} ~ {{data.timeEnd}}<br/>
          扫描相关根TraceId总数：<el-tag><count-to :end-val="data.totalTraceIdCount" :duration="500" :autoplay="true" suffix="个"/></el-tag>耗时：{{data.tookHuman}}<br/>
        </p>
      </aside>

      <!-- 卡片组 -->
      <h4>服务映射及<span style="color:red;">异常链路</span>信息：</h4>
      <el-tabs type="border-card" v-model="activeTabName">
        <!--【TAB-PANE】当前Skywalking涉及服务与ID的映 -->
        <el-tab-pane label="当前Skywalking涉及服务与ID的映" name="serviceTab">
          <el-table :data="data.trafficList" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="名称" element-loading-text="请给我点时间！"><template slot-scope="{row}"><span @click="showDialogServiceInfo(row)" style="cursor: pointer;">{{ row.name }}</span></template></el-table-column>
            <el-table-column label="Skywalking中匹配到的ID"><template slot-scope="{row}"><span>{{ row.id }}</span></template></el-table-column>
            <el-table-column label="节点类型"><template slot-scope="{row}"><el-tag>{{ row.nodeTypeName }}</el-tag></template></el-table-column>
          </el-table>
        </el-tab-pane>
        <!--【TAB-PANE】断路-链路 -->
        <el-tab-pane :label="brokenSwLabel" name="brokenTab">
          <el-table :data="brokenTableData" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId"><template slot-scope="scope"><span @click="showDialogBrokenTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.traceId}}</span></template></el-table-column>
            <el-table-column align="center" label="StartTime"><template slot-scope="scope"><span @click="showDialogBrokenTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.startTime}}</span></template></el-table-column>
            <el-table-column label="耗时"><template slot-scope="{row}"><pre>{{ row.totalTime }}</pre></template></el-table-column>
          </el-table>
        </el-tab-pane>
        <!--【TAB-PANE】运行时异常-链路 -->
        <el-tab-pane :label="runtimeSwLabel" name="runtimeExceptionTab">
          <el-table :data="runtimeExceptionTableData" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId"><template slot-scope="scope"><span @click="showDialogRuntimeTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.traceId}}</span></template></el-table-column>
            <el-table-column align="center" label="StartTime"><template slot-scope="scope"><span @click="showDialogRuntimeTraceInfo(scope.row.traceId)" style="cursor: pointer;">{{ scope.row.startTime}}</span></template></el-table-column>
            <el-table-column label="耗时"><template slot-scope="{row}"><pre>{{ row.totalTime }}</pre></template></el-table-column>
          </el-table>
        </el-tab-pane>
        <!--【TAB-PANE】SlowTrace-链路 -->
        <el-tab-pane :label="slowTrace.labelPrefix + slowTrace.labelSuffix" name="slowTraceTab">
          <el-table :data="this.slowTrace.tableItems" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="TraceId"><template slot-scope="{row}"><span @click="showDialogSlowTraceInfo(row)" style="cursor: pointer;">{{row.traceId}}</span></template></el-table-column>
            <el-table-column align="center" label="StartTime"><template slot-scope="{row}"><span @click="showDialogSlowTraceInfo(row.data)" style="cursor: pointer;">{{row.startTime}}</span></template></el-table-column>
            <el-table-column label="耗时"><template slot-scope="{row}"><pre>{{row.totalTime}}</pre></template></el-table-column>
            <el-table-column label="Segments.size()"><template slot-scope="{row}"><pre>{{row.segList.length}}</pre></template></el-table-column>
          </el-table>
        </el-tab-pane>
        <!--【TAB-PANE】分组统计 -->
        <el-tab-pane :label="tableBiGroup.labelName" name="groupTab">
          <el-table :data="tableBiGroup.list" border fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="服务名称"><template slot-scope="{row}"><span>{{ row.key }}</span></template></el-table-column>
            <el-table-column align="center" label="数量"><template slot-scope="{row}"><span>{{ row.value }}</span></template></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>


      <!--【DIALOG】服务详情对话框 START -->
      <el-dialog :visible.sync="dialogServiceInfo.visible" title="详情">
        <el-table :data="dialogServiceInfo.list" border fit highlight-current-row>
          <el-table-column label="Key"><template slot-scope="{row}">{{row.key}}</template></el-table-column>
          <el-table-column label="Value"><template slot-scope="{row}">{{row.value}}</template></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogServiceInfo.visible = false">确认</el-button></span>
      </el-dialog>
      <!--【DIALOG】断路详情对话窗口 -->
      <el-dialog :visible.sync="dialogBrokenTraceInfo.visible" title="断路详情">
        <el-table :data="dialogBrokenTraceInfo.list" border fit highlight-current-row>
          <el-table-column label="segmentId"><template slot-scope="{row}"><span>{{ row.segmentId }}</span></template></el-table-column>
          <el-table-column label="startDateTime"><template slot-scope="{row}"><span>{{ row.startDateTime }}</span></template></el-table-column>
          <el-table-column label="error"><template slot-scope="{row}"><span>{{ row.error }}</span></template></el-table-column>
          <!--          <el-table-column label="duration"><template slot-scope="{row}"><span>{{ row.duration }}</span></template></el-table-column>-->
          <!--          <el-table-column label="traceIds"><template slot-scope="{row}"><span>{{ row.traceIds }}</span></template></el-table-column>-->
          <el-table-column label="endpointNames"><template slot-scope="{row}"><span>{{ row.endpointNames }}</span></template></el-table-column>
          <el-table-column label="json"><template slot-scope="{row}"><pre>{{ row }}</pre></template></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogBrokenTraceInfo.visible = false">确认</el-button></span>
      </el-dialog>
      <!--【DIALOG】断路详情对话窗口 -->
      <el-dialog :visible.sync="dialogRuntimeTraceInfo.visible" title="异常详情">
        <el-table :data="dialogRuntimeTraceInfo.list" border fit highlight-current-row>
          <el-table-column label="segmentId"><template slot-scope="{row}"><span>{{ row.segmentId }}</span></template></el-table-column>
          <el-table-column label="startDateTime"><template slot-scope="{row}"><span>{{ row.startDateTime }}</span></template></el-table-column>
          <el-table-column label="error"><template slot-scope="{row}"><span>{{ row.error }}</span></template></el-table-column>
          <!--          <el-table-column label="duration"><template slot-scope="{row}"><span>{{ row.duration }}</span></template></el-table-column>-->
          <!--          <el-table-column label="traceIds"><template slot-scope="{row}"><span>{{ row.traceIds }}</span></template></el-table-column>-->
          <el-table-column label="endpointNames"><template slot-scope="{row}"><span>{{ row.endpointNames }}</span></template></el-table-column>
          <el-table-column label="json"><template slot-scope="{row}"><pre>{{ row }}</pre></template></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="dialogRuntimeTraceInfo.visible = false">确认</el-button></span>
      </el-dialog>
      <!--【DIALOG】SlowTrace慢查询 -->
      <el-dialog :visible.sync="slowTrace.dialog.visible" :title="slowTrace.dialog.title">
        <el-table :data="slowTrace.dialog.list" border fit highlight-current-row>
          <el-table-column label="segmentId"><template slot-scope="{row}"><span>{{ row.segmentId }}</span></template></el-table-column>
          <el-table-column label="startDateTime"><template slot-scope="{row}"><span>{{ row.startDateTime }}</span></template></el-table-column>
          <el-table-column label="error"><template slot-scope="{row}"><span>{{ row.error }}</span></template></el-table-column>
          <el-table-column label="duration(ms)"><template slot-scope="{row}"><span>{{ row.duration }}</span></template></el-table-column>
          <!--          <el-table-column label="traceIds"><template slot-scope="{row}"><span>{{ row.traceIds }}</span></template></el-table-column>-->
          <el-table-column label="endpointNames"><template slot-scope="{row}"><span>{{ row.endpointNames }}</span></template></el-table-column>
          <el-table-column label="json"><template slot-scope="{row}"><pre>{{ row }}</pre></template></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer"><el-button type="primary" @click="slowTrace.dialog.visible = false">确认</el-button></span>
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
  import {apiDataQuerySwCheckPoint, apiDataQuerySwCheckPointDev} from '@/api/canal'
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
        activeTabName: null,
        listQuery: {startGte: null, endLt: null, minutesAgo: 15, duration: 0},
        listQueryExt: {qTimeRange: []},
        isLoaded: false,
        data: null
        , brokenSwLabel: "断掉的链路", runtimeSwLabel: "RuntimeException异常链路"

        , tableBiGroup: {list: [], labelName: "业务分组统计"}
        , brokenTableData: [] // 表格数据：断链路
        , runtimeExceptionTableData: [] // 表格数据：运行时异常的

        , dialogServiceInfo: {visible: false, list:[]} // 弹详情表格：服务
        , dialogBrokenTraceInfo: {visible: false, list:[]}  // 弹详情表格：断路
        , dialogRuntimeTraceInfo: {visible: false, list:[]} // 弹详情表格：运行时异常

        , slowTrace:{
            labelPrefix: "SlowTrace列表",
            labelSuffix: "",
            tableItems: [],
            dialog: {visible: false, data:null, list:[] , title: ""}
        }
      }
    },
    created() {
      const tab = this.$route.query.tab
      if (tab) { this.activeTabName = tab }
      this.doScanSwTraces()
    },
    watch: {
      // 监听activeName的值
      activeTabName(val) { this.$router.push(`${this.$route.path}?tab=${val}`) }
    },
    methods: {
      // 显示详情表格：服务
      showDialogServiceInfo(data) {
        this.dialogServiceInfo.list = [
          {key: "服务名称", value: data.name},
          {key: "Skywalking对应ID", value: data.id},
          {key: "节点类型", value: data.nodeTypeName},
          {key: "服务组", value: data.aggsByTag},
        ]
        this.dialogServiceInfo.visible = true
      },
      // 显示详情表格：断路
      showDialogBrokenTraceInfo(traceId) {
        this.dialogBrokenTraceInfo.list = this.data.brokenTraces[traceId]
        this.dialogBrokenTraceInfo.visible = true
      },
      // 显示详情表格：异常
      showDialogRuntimeTraceInfo(traceId) {
        this.dialogRuntimeTraceInfo.list = this.data.runtimeExceptionTraces[traceId]
        this.dialogRuntimeTraceInfo.visible = true
      },
      // 显示详情表格：SlowTrace
      showDialogSlowTraceInfo(trace){
        this.slowTrace.dialog.data = trace
        this.slowTrace.dialog.visible = true
        this.slowTrace.dialog.list = trace.segList
        this.slowTrace.dialog.title = "SlowTrace ("+ trace.segList.length +")"
      },
      // 执行链路扫描
      doScanSwTraces() {
        this.$notify({title: '数据加载中', message: '数据加载中', type: 'info', duration: 2000})
        this.isLoaded = false
        this.$emit('create') // for test
        if (this.listQueryExt.qTimeRange.length == 2) {
          this.listQuery.startGte = this.listQueryExt.qTimeRange[0]
          this.listQuery.endLt = this.listQueryExt.qTimeRange[1]
        }
        // apiDataQuerySwCheckPointDev(this.listQuery).then(response => {
        apiDataQuerySwCheckPoint(this.listQuery).then(response => {
          this.isLoaded = true
          this.data = response.data
          this.brokenSwLabel = "断掉的链路(" + Object.keys(this.data.brokenTraces).length + ")个"
          this.runtimeSwLabel = "RuntimeException异常链路(" + Object.keys(this.data.runtimeExceptionTraces).length + ")个"
          // 构建业务分组数据
          this.tableBiGroup.list = []
          for (let biName of Object.keys(this.data.aggsByTag)) {
            let biCount = this.data.aggsByTag[biName]
            this.tableBiGroup.list.push({key: biName, value: biCount})
          }
          this.tableBiGroup.labelName = "业务分组统计(" + Object.keys(this.data.aggsByTag).length + ")个";
          // 设置默认选种的选项卡
          if (Object.keys(this.data.brokenTraces).length > 0) {
            this.activeTabName = 'brokenTab'
          } else if (Object.keys(this.data.runtimeExceptionTraces).length > 0) {
            this.activeTabName = 'runtimeExceptionTab'
          } else if(this.listQuery.duration > 0){
            this.activeTabName = 'slowTraceTab'
          } else {
            this.activeTabName = 'serviceTab'
          }
          // 构建brokenTrace数据 brokenTableData
          this.brokenTableData = []
          for (let traceId of Object.keys(this.data.brokenTraces)) {
            let segList = this.data.brokenTraces[traceId];

            this.brokenTableData.push({
              traceId: traceId
              , startTime: segList[0].startDateTime
              , totalTime: Math.abs(segList[segList.length - 1].start - segList[0].start) + "ms"
            })
          }
          // 构建表格数据：运行异常的
          this.runtimeExceptionTableData = [];
          for(let traceId of Object.keys(this.data.runtimeExceptionTraces)){
            let segList = this.data.runtimeExceptionTraces[traceId];
            this.runtimeExceptionTableData.push({
              traceId: traceId
              , startTime: segList[0].startDateTime
              , totalTime: Math.abs(segList[segList.length - 1].start - segList[0].start) + "ms"
            })
          }
          // 构建表格数据：SlowTrace slowTraces
          this.slowTrace.tableItems = []
          for(let traceId of Object.keys(this.data.slowTraces)){
            let segList = this.data.slowTraces[traceId];
            this.slowTrace.tableItems.push({
              traceId: traceId
              , startTime: segList[0].startDateTime
              , totalTime: Math.abs(segList[segList.length - 1].start - segList[0].start) + "ms"
              , segList: segList
            })
          }
          this.slowTrace.labelSuffix = "";
          if (this.slowTrace.tableItems.length > 0) {
            this.slowTrace.labelSuffix = "${duration}≥" + this.listQuery.duration + "ms(" + this.slowTrace.tableItems.length + "+)";
          }

          // 发送通知
          this.$notify({title: '数据加载成功', message: '数据加载成功', type: 'success', duration: 2000})
        })
      }
      // 结束链路扫描方法 - END

    }
  }
</script>

