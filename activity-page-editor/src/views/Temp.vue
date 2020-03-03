<template>
  <layout>
    <el-container class="temp-wrap">
      <el-aside width="200px">
        <el-container>
          <el-header class="aside-hd" height="40px">组件库</el-header>
          <el-main>
            <ul class="component-list">
              <li v-for="(item, index) in componentsArr" :key="item.name" @click="appendComponent(item, index)">
                <el-button :disabled="item.disabled" size="small" plain>{{item.label}}</el-button>
              </li>
            </ul>
          </el-main>
        </el-container>
      </el-aside>
      <el-main class="main">
        <el-header height="40px">
          <el-button @click="submit">确定<i class="el-icon-check"></i></el-button>
        </el-header>
        <div class="mobile-page">
          <activity-temp
              :index="index"
              :componentList="componentList"
              @selectComponent="selectComponent"
          />
        </div>
      </el-main>
      <el-aside width="300px">
        <el-container>
          <template v-if="index === 0">
            <el-header class="aside-hd" height="40px">页面基本信息设置</el-header>
            <div class="aside-bd">
              <el-form label-position="top" size="mini">
                <el-form-item label="页面标题">
                  <el-input v-model="activeComponent.options.pageTitle"/>
                </el-form-item>
                <el-form-item label="背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.options.bgColor"/>
                    </el-col>
                    <el-col :span="19">
                      <el-input v-model="activeComponent.options.bgColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="淘口令文案">
                  <el-input v-model="activeComponent.options.mainCopyTemp"/>
                </el-form-item>
                <el-form-item label="海报原图">
                  <uploader
                      keyName="posterBgImg"
                      :files="activeComponent.options.posterBgImg"
                      :handle-change="handleUploadPoster"
                  />
                </el-form-item>
                <el-form-item label="海报宽">
                  <el-input v-model="activeComponent.options.posterWidth"/>
                </el-form-item>
                <el-form-item label="海报高">
                  <el-input v-model="activeComponent.options.posterHeight"/>
                </el-form-item>
                <el-form-item label="二维码信息">
                  <el-row :gutter="20">
                    <el-col :span="6">
                      宽： <el-input v-model="activeComponent.options.qrWidth"/>
                    </el-col>
                    <el-col :span="6">
                      高： <el-input v-model="activeComponent.options.qrHeight"/>
                    </el-col>
                    <el-col :span="6">
                      左：<el-input v-model="activeComponent.options.qrLeft"/>
                    </el-col>
                    <el-col :span="6">
                      顶：<el-input v-model="activeComponent.options.qrTop"/>
                    </el-col>
                  </el-row>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template v-else>
            <el-header class="aside-hd" height="40px">属性设置</el-header>
            <div class="aside-bd">
              <el-form v-if="activeComponent.name === 'TOP_IMG'" label-position="top" size="mini">
                <el-form-item label="组件名称">
                  <el-input v-model="activeComponent.label" readonly disabled/>
                </el-form-item>
                <el-form-item label="背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.styleOptions.backgroundColor"/>
                    </el-col>
                    <el-col :span="19">
                      <el-input v-model="activeComponent.styleOptions.backgroundColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="上传图片">
                  <uploader
                      key="topImg"
                      keyName="imgUrl"
                      :fileList="activeComponent.options.imgUrl"
                      :handle-change="handleChange"
                  />
                </el-form-item>
              </el-form>
              <el-form v-if="activeComponent.name === 'MAIN_ENTRY'" label-position="top" size="mini">
                <el-form-item label="组件名称">
                  <el-input v-model="activeComponent.label" readonly disabled/>
                </el-form-item>
                <el-form-item label="按钮背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.styleOptions.backgroundColor"/>
                    </el-col>
                    <el-col :span="19">
                      <el-input v-model="activeComponent.styleOptions.backgroundColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="按钮背景图">
                  <uploader
                      key="btnImg"
                      keyName="imgUrl"
                      :fileList="activeComponent.options.imgUrl"
                      :handle-change="handleChange"
                  />
                </el-form-item>
              </el-form>
              <el-form v-if="activeComponent.name === 'SUB_ITEM'" label-position="top" size="mini">
                <el-form-item label="组件名称">
                  <el-input v-model="activeComponent.label" readonly disabled/>
                </el-form-item>
                <el-form-item label="分会场标题">
                  <el-input v-model="activeComponent.options.title"/>
                </el-form-item>
                <el-form-item label="展示方式">
                  <el-radio-group v-model="activeComponent.options.row">
                    <el-radio :label="1">一行一个</el-radio>
                    <el-radio :label="2">一行两个</el-radio>
                    <el-radio :label="3">一行三个</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-card class="box-card">
                  <div v-for="(item, index) in activeComponent.children" :key="activeComponent.key + '_' + item.id">
                    <el-form-item label="会场ID">
                      <el-input v-model="item.activityId"/>
                    </el-form-item>
                    <el-form-item label="会场名称">
                      <el-input v-model="item.title"/>
                    </el-form-item>
                    <el-form-item label="会场图">
                      <uploader
                          :keyName="index"
                          :fileList="item.imgUrl"
                          :handle-change="handleSubImgChange"
                      />
                    </el-form-item>
                  </div>
                </el-card>
                <el-button size="mini" @click="addNewSub">增加一个分会场</el-button>
              </el-form>
            </div>
          </template>
        </el-container>
      </el-aside>
    </el-container>
  </layout>
</template>

<script>
  import Layout from '../components/Layout'
  import ActivityTemp from '../templates/SubTemp'
  import Uploader from '../components/common/Uploader'

  export default {
    name: 'Temp',
    components: {
      Layout,
      ActivityTemp,
      Uploader
    },
    data () {
      return {
        componentsArr: [
          {
            name: 'TOP_IMG',
            label: '头图',
            disabled: false,
            options: {
              imgUrl: '',
            },
            styleOptions: {

            }
          },
          {
            name: 'MAIN_ENTRY',
            label: '主会场入口',
            disabled: false,
            options: {
              imgUrl: '',
            },
            styleOptions: {

            },
          },
          {
            name: 'SUB_ITEM',
            label: '分会场',
            options: {
              title: '精选分会场',
              row: 1
            },
            styleOptions: {

            },
            children: []
          }
        ],
        componentList: [
          {
            name: 'PAGE',
            label: '页面',
            options: {

            },
            styleOptions: {
              bgImg: '',
              backgroundColor: ''
            },
          },
        ],
        index: 0,
      }
    },
    computed: {
      activeComponent () {
        return this.componentList[this.index]
      }
    },
    methods: {
      handleChange ({images, keyName}) {
        this.activeComponent.options[keyName] = images.length ? images[0] : ''
      },
      selectComponent (idx) {
        this.index = idx
      },
      handleSubImgChange ({images, keyName}) {
        this.activeComponent.children[keyName].imgUrl = images[0]
      },
      handleUploadPoster ({images}) {
        this.activeComponent.options.posterBgImg = images[0]
      },
      addNewSub () {
        const lastChildren = this.activeComponent.children[this.activeComponent.children.length - 1]
        this.activeComponent.children.push({
          id: lastChildren ? lastChildren.id + 1 : 0,
          imgUrl: '',
          title: '',
          activityId: ''
        })
      },
      appendComponent (item) {
        const newItem = JSON.parse(JSON.stringify(item))
        if (item.disabled == false) {
          item.disabled = true
        }
        newItem.key = newItem.name + '_' + new Date().getTime()
        this.componentList.push(newItem)
        this.index = this.componentList.length - 1
        // this.componentList[this.index].key = new Date().getTime()
        console.log(this.componentList)
      },
      submit () {
        console.log(this.componentList)
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    overflow: hidden;
    height: 100vh;
  }
  .component-list {
    li {
      text-align: center;
      button {
        display: block;
        width: 150px;
        margin-bottom: 10px;
      }
    }
  }
  .main {
    height: calc(100vh - 50px);
    background: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);

    .hd {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;
      background: #f5f5f5;
      box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
    }
    .bd {
      .main-page {
        width: 375px;
        height: 667px;
        overflow: hidden;
        box-shadow: 0 14px 45px rgba(0,0,0,.25), 0 10px 18px rgba(0,0,0,.2);
      }
    }
  }
  .mobile-page {
    width: 750px;
    transform: scale(.3);
    transform-origin: 0 0;
  }
  .aside-hd {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 14px;
    color: #666;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
  }
  .aside-bd {
    height: calc(100vh - 50px - 40px);
    padding: 10px 20px;
    overflow: auto;
  }
</style>
