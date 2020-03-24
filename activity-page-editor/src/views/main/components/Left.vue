<template>
  <el-aside class="layout-left" width="300px">
    <el-tabs v-model="activeName" class="tab-bar">
      <el-tab-pane name="COMPONENTS" label="组件">
        <div class="components flex flex-wrap">
          <div class="item flex flex-column items-center justify-center"
             v-for="(item, index) in components"
             :key="item.name"
             @click="setComponent(index)"
          >
            <img class="item-img" :src="item.img" alt="">
            <p class="item-name">{{item.name}}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="SETTINGS" label="设置">
        <el-form size="small" label-position="right" label-width="75px" class="settings">
          <el-form-item label="背景色:">
            <el-row :gutter="10">
              <el-col :span="5">
                <el-color-picker v-model="core.background"/>
              </el-col>
              <el-col :span="18">
                <el-input v-model="core.background"/>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="网页标题:">
            <el-input type="text" placeholder="请输入网页标题" v-model="core.pageTitle"/>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script>
  import { baseButton, baseImg, baseInput, baseText} from '@/utils/baseComponents'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Left',
    data () {
      return {
        activeName: 'COMPONENTS',
        components: [
          {
            name: '按钮',
            img: require('@/assets/images/button.png')
          },
          {
            name: '文本',
            img: require('@/assets/images/text.png')
          },
          {
            name: '输入框',
            img: require('@/assets/images/input.png')
          },
          {
            name: '图片',
            img: require('@/assets/images/img.png')
          }
        ]
      }
    },
    computed: {
      ...mapState(['core'])
    },
    methods: {
      ...mapMutations(['setTemplate']),
      setComponent (idx) {
        switch (idx) {
          case 0:
            this.setTemplate(baseButton(this.$store))
            break
          case 1:
            this.setTemplate(baseText(this.$store))
            break
          case 2:
            this.setTemplate(baseInput(this.$store))
            break
          case 3:
            this.setTemplate(baseImg(this.$store))
            break
          default:
            return
        }
      }
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
  .components {
    padding: 20px;
    .item {
      width: 100px;
      height: 80px;
      margin: 10px;
      color: @themeColor;
      font-size: 14px;
      text-align: center;
      border: 1px dashed #999;
      border-radius: 5px;
      cursor: pointer;
      &-img {
        display: block;
        width: 20px;
        margin-bottom: 5px;
      }
      &-name {
      }
      &:hover {
        border-color: @themeColor;
        background: @bgColor;
      }
    }
  }
  .settings {
    padding: 20px;
  }
</style>
