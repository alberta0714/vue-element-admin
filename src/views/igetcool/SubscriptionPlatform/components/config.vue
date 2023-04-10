<template>
  <div>
    <h1>订阅开放平台配置</h1>
    <el-form>
      <el-row><h3>Canal Binlog配置</h3></el-row>
      <el-row :gutter="10">
        <el-col style="float: left; width: 300px;"><el-form-item label="Canal集群">
          <el-select v-model="myForm.canal.cluster" style="width: 120px;"><el-option :value="1" :key="1" label="1"/></el-select>
        </el-form-item></el-col>
        <el-col style="float: left; width: 400px;"><el-form-item label="对应Destination"><el-select v-model="myForm.canal.cluster" style="width: 120px;"><el-option :value="1" :key="1" label="1"/></el-select></el-form-item></el-col>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>订阅数据配置</h3></el-row>
      <el-row>
        <el-col style="width: 700px;"><el-form-item label="数据库地址"><el-input/></el-form-item></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col style="float: left; width: 200px;"><el-form-item label="数据库用户名"><el-input/></el-form-item></el-col>
        <el-col style="float: left; width: 300px;"><el-form-item label="数据库密码"><el-input/></el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col style="width:700px;"><el-form-item label="订阅的库、表、字段"><el-input/></el-form-item></el-col>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>Kafka配置</h3></el-row>
      <el-row :gutter="10">
        <el-col style="float: left; width: 400px;"><el-form-item label="Kafka队列名称"><el-select v-model="myForm.canal.cluster" style="width: 120px;"><el-option :value="1" :key="1" label="1"/></el-select></el-form-item></el-col>
        <el-col style="float: left; width: 400px;"><el-form-item label="分区数"><el-input-number value="0"></el-input-number></el-form-item></el-col>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>抽取处理</h3></el-row>
      <el-row :gutter="10">
        <el-alert>接收并加工处理订阅得到的消息</el-alert>
        <el-col style="float: left; width: 700px;"><el-form-item label="数据加工接口"><el-input></el-input></el-form-item></el-col>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>转发配置-RocketMq</h3></el-row>
      <el-row>
        <el-col style="width:700px;"><el-form-item label="RocketMq地址"><el-input/></el-form-item></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col style="float: left; width: 200px;"><el-form-item label="用户名"><el-input/></el-form-item></el-col>
        <el-col style="float: left; width: 300px;"><el-form-item label="密码"><el-input/></el-form-item></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col style="float: left; width: 300px;"><el-form-item label="队列名称"><el-input/></el-form-item></el-col>
        <el-col style="float: left; width: 150px;"><el-form-item label="TAG"><el-input/></el-form-item></el-col>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>转发配置-ES</h3></el-row>
      <el-row>
        <aside>Building</aside>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>转发配置-Mysql</h3></el-row>
      <el-row>
        <aside>Building</aside>
      </el-row>
    </el-form>

    <el-form>
      <el-row><h3>转发配置-AliRocketMq</h3></el-row>
      <el-row>
        <aside>Building</aside>
      </el-row>
    </el-form>

  </div>
</template>
<script>
  import ElSelectDropdown from "element-ui/packages/select/src/select-dropdown";
  export default {
    name: 'SubscriptionPlatformConfig',
    components: {ElSelectDropdown},
    data(){
      return {
        myForm: {
          mysql: {
            url: null
          },
          canal: {
            cluster: null
          }
        }

      }
    },
    watch:{},
    created() {
      this.$message({
        message: 'DESIGNING 设计中……'
        , type: 'info' //  'success' | 'warning' | 'info' | 'error'
        , duration: 1000
      })
    },
    methods:{}
  }
</script>
