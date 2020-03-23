<template>
  <layout>
    <template #header-right>
<!--      <el-button size="mini" round icon="el-icon-document">保存为模板</el-button>-->
      <el-button type="mini" round icon="el-icon-upload">发布</el-button>
    </template>
    <left></left>
    <el-main class="main-container" @click.native="cancelActive">
      <div class="mode">
        <el-radio-group v-model="mode" size="mini">
          <el-radio-button label="EDIT">开发模式</el-radio-button>
          <el-radio-button label="PREVIEW">预览模式</el-radio-button>
        </el-radio-group>
      </div>
      <!--开发模式-->
      <core ref="core" v-if="mode === 'EDIT'"></core>
    </el-main>
    <right></right>
  </layout>
</template>

<script>
  import Layout from '@/components/Layout'
  import Left from './components/Left'
  import Right from './components/Right'
  import Core from './components/Core'

  import { mapMutations } from 'vuex'

  export default {
    name: 'Main',
    components: {
      Layout,
      Left,
      Right,
      Core
    },
    data () {
      return {
        mode: 'EDIT',
      }
    },
    methods: {
      ...mapMutations(['clearActiveTemplate']),
      cancelActive () {
        console.log(1111)
        this.clearActiveTemplate()
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-container {
    background: #f8f8f8;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.1);
    .mode {
      text-align: center;
    }
    .core {
      margin: 20px auto;
      width: 375px;
      min-height: 667px;
      background: #f8f8f8;
      background-image:
          linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, .25) 0),
          linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, .25) 0);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
      box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.2);
    }
  }
</style>

