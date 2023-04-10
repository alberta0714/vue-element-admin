<template>
  <div class="app-container">
    <aside>【课包买送活动配置】Building</aside>

    <div class="filter-container">

    </div>
    <el-table
      :data="tableData.activities"
      v-loading="tableData.loading"
      border fit highlight-current-row style="width:100%"
    >
      <el-table-column label="序号" type="index" width="50" align="center">
      </el-table-column>
      <el-table-column label="活动开始时间" align="center">
        <template slot-scope="{row}">
          <span>{{row.start | unLimitFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="活动结束时间" align="center">
        <template slot-scope="{row}">
          <span>{{row.end | unLimitFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="购买了商品" align="center">
        <template slot-scope="{row}">
          <span>{{row.productIdsBought}}</span>
        </template>
      </el-table-column>
      <el-table-column label="赠送商品" align="center">
        <template slot-scope="{row}">
          <span>{{row.productIdsGive}}</span>
        </template>
      </el-table-column>
      <el-table-column label="活动名称" align="center">
        <template slot-scope="{row}">
          <span>{{row.title}}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="tableData.total>0" :total="tableData.total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getTableData" />

  </div>
</template>
<script>
  import waves from '@/directive/waves' // waves directive
  import { parseTime } from '@/utils'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination

  export default {
    name: 'CoursePackage'
    , components: { Pagination }
    , directives: { waves }
    , filters: {
      unLimitFilter(input) {
        if (input == null) {
          return '无限制';
        }
        return input;
      }
    }
    , data() {
      return {
        tableQuery: { page: 5, limit: 2 },
        tableData: {
          total: 1000,
          loading: false,
          activities: [
            {
              start: null, end: null
              , title: "测试数据", desc: null
              , productIdsBought: null
              , productIdsGive: null
            },
            {
              start: null, end: null
              , title: "测试数据", desc: null
              , productIdsBought: null
              , productIdsGive: null
            },
            {
              start: null, end: null
              , title: "测试数据", desc: null
              , productIdsBought: null
              , productIdsGive: null
            }
          ]
        }
      }
    }
    , created() {
      this.$message({
        message: '构建中'
        , type: 'info' //  'success' | 'warning' | 'info' | 'error'
        , duration: 1000
      })
    }
    , methods: {
      getTableData(query){
        console.log(query)
      }
    }
  }
</script>
