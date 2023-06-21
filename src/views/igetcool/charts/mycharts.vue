<template>
  <div class="app-container">
    <aside>【我的图表】Building</aside>
    <div class="chart-container">
      <chart height="100%" width="100%" />
    </div>
  </div>
</template>
<script>
  // import Chart from '@/components/Charts/MixChart'
  import Chart from './components/MixChart'

  export default {
    name: 'igcMixChart'
    , components: { Chart }
    , filters: {}
    , data() {
      return {
      }
    }
    , created() {
      this.$message({
        message: '构建中'
        , type: 'success' //  'success' | 'warning' | 'info' | 'error'
        , duration: 1000
      })
    }
    , methods: {
      
    }
  }
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(70vh - 84px);
}
</style>