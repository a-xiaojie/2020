<template>
  <div class="attributes">
    <el-form v-if="hasActiveTemp" size="small" label-position="right" label-width="100px">
      <el-form-item label="位置X:">
        <el-slider v-model="core.css.left" max="10000" show-input></el-slider>
      </el-form-item>
      <el-form-item label="位置Y:">
        <el-slider v-model="core.css.top" max="10000" show-input></el-slider>
      </el-form-item>
      <el-form-item label="层级:">
        <el-slider v-model="core.css.zIndex" show-input></el-slider>
      </el-form-item>
      <el-form-item label="宽度:">
        <el-input-number placeholder="请输入宽度" v-model="core.css.width"></el-input-number>
      </el-form-item>
      <el-form-item label="高度:">
        <el-input-number placeholder="请输入高度" v-model="core.css.height"></el-input-number>
      </el-form-item>
      <template v-if="showBackground">
        <el-form-item label="背景颜色:">
          <el-row :gutter="10">
            <el-col :span="5">
              <el-color-picker v-model="core.css.background" show-alpha/>
            </el-col>
            <el-col :span="18">
              <el-input v-model="core.css.background"/>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="字体颜色:">
          <el-row :gutter="10">
            <el-col :span="5">
              <el-color-picker v-model="core.css.color"/>
            </el-col>
            <el-col :span="18">
              <el-input v-model="core.css.color"/>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="字体大小:">
          <el-slider v-model="core.css.fontSize" show-input></el-slider>
        </el-form-item>
      </template>
      <template v-if="showBorder">
        <el-form-item label="边框颜色:">
          <el-row :gutter="10">
            <el-col :span="5">
              <el-color-picker v-model="core.css.borderColor"/>
            </el-col>
            <el-col :span="18">
              <el-input v-model="core.css.borderColor"/>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="边框宽度:">
          <el-slider :min="0" :max="20" v-model="core.css.borderWidth" show-input></el-slider>
        </el-form-item>
      </template>
      <el-form-item label="圆角:" v-if="showBorderRadius">
        <el-slider :min="0" :max="100" v-model="core.css.borderRadius" show-input></el-slider>
      </el-form-item>
    </el-form>
    <p class="no-data-tip" v-else>当前无可操作性的组件</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'AttributesPanel',
    computed: {
      ...mapState(['templates', 'activeTemplate']),
      core () {
        const activeTemp = this.templates.find(i => i.activityId === this.activeTemplate)
        console.log(activeTemp)
        return activeTemp || {}
      },
      hasActiveTemp () {
        return !!this.activeTemplate
      },
      showBackground () {
        return !['base-img', 'base-swiper'].includes(this.core.name)
      },
      showBorder () {
        return ['base-button', 'base-input', 'base-div'].includes(this.core.name)
      },
      showBorderRadius () {
        return ['base-button', 'base-input', 'base-div'].includes(this.core.name)
      }
    }
  }
</script>

<style scoped>
  .attributes {
    padding: 0 20px;
  }
  .no-data-tip {
    text-align: center;
    font-size: 12px;
    color: #999;
  }
</style>
