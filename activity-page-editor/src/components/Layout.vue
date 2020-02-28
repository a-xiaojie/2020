<template>
  <el-container class="wrap">
    <el-header class="header flex" height="50">
      <div class="left"></div>
      <div class="center flex-1">
        <div class="title">活动页面编辑器</div>
      </div>
      <div class="right">
        <slot name="header-right"></slot>
      </div>
    </el-header>
    <el-container class="main flex-1">
      <slot></slot>
    </el-container>
  </el-container>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Layout',
  }
</script>

<style scoped lang="less">
  .wrap {
    height: 100vh;
    .header {
      height: 50px;
      color: #fff;
      background: #42b983;
      .title {
        padding: 0 20px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
      }
      .right {
        line-height: 50px;
        span {
          margin: 0 10px;
        }
      }
    }
    .main {
      background: #e7f6ee;
    }
  }
</style>
