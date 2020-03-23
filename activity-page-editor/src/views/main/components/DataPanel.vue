<template>
  <div class="data-panel">
    <el-form v-if="hasActiveTemp" size="small" label-position="right" label-width="100px">
      <el-form-item label="文本:" v-if="showText">
        <el-input placeholder="请输入文字" v-model="core.text" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="名称:" v-if="showElementName">
        <el-input placeholder="请输入文字" v-model="core.option.inputName"></el-input>
      </el-form-item>
      <el-form-item label="占位文字:" v-if="showInputPlaceholder">
        <el-input placeholder="请输入文字" v-model="core.option.placeholder"></el-input>
      </el-form-item>
      <template v-if="showButton">
        <el-form-item label="按钮动作:">
          <el-select v-model="core.option.btnType">
            <el-option :value="0">无事件</el-option>
            <el-option :value="1">外部链接</el-option>
            <el-option :value="2">提交表单</el-option>
            <el-option :value="3">客户端事件</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="按钮链接:" v-if="core.option.btnType === 1">
          <el-input placeholder="请输入链接地址" v-model="core.option.link" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="提交地址:" v-if="core.option.btnType === 2">
          <el-input placeholder="请输入链接地址" v-model="core.text" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="客户端事件:" v-if="core.option.btnType === 3">
          <el-select v-model="core.option.appMethod">
            <el-option :value="0">请选择</el-option>
            <el-option :value="1">复制</el-option>
            <el-option :value="2">分享</el-option>
            <el-option :value="3">登录</el-option>
          </el-select>
        </el-form-item>
      </template>
    </el-form>
    <p class="no-data-tip" v-else>当前无可操作性的组件</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'DataPanel',
    computed: {
      ...mapState(['templates', 'activeTemplate']),
      hasActiveTemp () {
        console.log(this.activeTemplate)
        return !!this.activeTemplate
      },
      core () {
        const activeTemp = this.templates.find(i => i.activityId === this.activeTemplate)
        return activeTemp || {}
      },
      showText () {
        return ['base-input', 'base-div', 'base-swiper'].includes(this.core.name)
      },
      showElementName () {
        return ['base-input'].includes(this.core.name)
      },
      showInputPlaceholder () {
        return ['base-input'].includes(this.core.name)
      },
      showButton () {
        return ['base-button'].includes(this.core.name)
      },
    }
  }
</script>

<style scoped>
  .no-data-tip {
    text-align: center;
    font-size: 12px;
    color: #999;
  }
</style>
