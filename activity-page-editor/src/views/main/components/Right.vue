<template>
  <el-aside class="layout-right" width="360px">
    <el-tabs v-model="activeName" class="tab-bar">
      <el-tab-pane name="ATTR" label="属性">
        <attributes-panel></attributes-panel>
      </el-tab-pane>
      <el-tab-pane name="DATA" label="数据">
        <data-panel></data-panel>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script>
  import AttributesPanel from './AttributesPanel'
  import DataPanel from './DataPanel'
  export default {
    name: 'Right',
    components: {
      AttributesPanel,
      DataPanel
    },
    data () {
      return {
        activeName: 'ATTR'
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/assets/style/var";
  .tab-bar {
    &::v-deep .el-tabs__nav-wrap {
      padding: 0 20px;
      background: #fff;
    }
  }

</style>
