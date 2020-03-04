<template>
  <layout>
    <el-container class="temp-wrap">
      <!--<el-aside width="200px">
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
      </el-aside>-->
      <el-container class="center">
        <el-header height="40px" class="btn-bar">
          <el-button @click="addNewSubMod" size="small" type="primary" round icon="el-icon-circle-plus-outline">增加分会场列表</el-button>
          <el-button @click="submitTest" size="small" type="primary" round icon="el-icon-check">保存</el-button>
        </el-header>
        <el-main class="">
          <div class="bd flex justify-center">
            <div class="main-page">
              <div class="mobile-page">
                <activity-temp
                    :index="index"
                    :componentList="componentList"
                    @selectComponent="selectComponent"
                />
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
      <el-aside width="400px">
        <el-container>
          <template v-if="index === 0">
            <el-header class="aside-hd" height="40px">页面基本信息设置</el-header>
            <div class="aside-bd">
              <el-form size="mini" label-position="right" label-width="100px">
                <el-form-item label="页面标题" required>
                  <el-input v-model.trim="activeComponent.h5Options.pageTitle"/>
                </el-form-item>
                <el-form-item label="背景色" required>
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.h5Options.bgColor"/>
                    </el-col>
                    <el-col :span="18">
                      <el-input v-model.trim="activeComponent.h5Options.bgColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="淘口令文案" required>
                  <el-input v-model.trim="activeComponent.h5Options.mainCopyTemp" type="textarea" autosize/>
                  <p style="font-size: 12px; color:#fb121c">*注意：淘口令用[PWD]代替</p>
                </el-form-item>
                <el-form-item label="海报原图" required>
                  <uploader
                      keyName="posterBgImg"
                      :files="activeComponent.h5Options.posterBgImg"
                      :handle-change="handleChange"
                  />
                </el-form-item>
                <el-form-item label="海报宽" required>
                  <el-input v-model.trim="activeComponent.h5Options.posterWidth"/>
                </el-form-item>
                <el-form-item label="海报高" required>
                  <el-input v-model.trim="activeComponent.h5Options.posterHeight"/>
                </el-form-item>
                <el-form-item label="二维码信息" required>
                  <el-input placeholder="宽" v-model.trim="activeComponent.h5Options.qrWidth">
                    <template slot="prepend">宽:</template>
                  </el-input>
                  <el-input placeholder="高" v-model.trim="activeComponent.h5Options.qrHeight">
                    <template slot="prepend">高:</template>
                  </el-input>
                  <el-input placeholder="左" v-model.trim="activeComponent.h5Options.qrLeft">
                    <template slot="prepend">左:</template>
                  </el-input>
                  <el-input placeholder="上" v-model.trim="activeComponent.h5Options.qrTop">
                    <template slot="prepend">上:</template>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template v-else>
            <el-header class="aside-hd" height="40px">属性设置</el-header>
            <div class="aside-bd">
              <el-form v-if="activeComponent.name === 'MAIN'" size="mini" label-position="right" label-width="100px">
                <el-form-item label="组件名称">
                  <el-input v-model="activeComponent.label" readonly disabled/>
                </el-form-item>
                <el-form-item label="主会场ID" required>
                  <el-input v-model.trim="activeComponent.options.activityId"/>
                </el-form-item>
                <el-form-item label="主会场名称" required>
                  <el-input v-model.trim="activeComponent.options.title"/>
                </el-form-item>
                <el-form-item label="图片高度">
                  <el-input placeholder="请输入图片高度" v-model.trim="activeComponent.h5Options.topImgHeight"/>
                </el-form-item>
                <el-form-item label="主会场图片" required>
                  <uploader
                      key="topImg"
                      keyName="topImg"
                      :fileList="activeComponent.options.imgUrl"
                      :handle-change="handleChangeTopImg"
                  />
                </el-form-item>
                <el-form-item label="按钮文案">
                  <el-input v-model.trim="activeComponent.h5Options.text"/>
                </el-form-item>
                <el-form-item label="按钮背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.h5Options.btnBgColor"/>
                    </el-col>
                    <el-col :span="18">
                      <el-input v-model.trim="activeComponent.h5Options.btnBgColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="按钮背景图">
                  <uploader
                      key="btnImg"
                      keyName="imgUrl"
                      :fileList="activeComponent.h5Options.imgUrl"
                      :handle-change="handleChange"
                  />
                </el-form-item>
              </el-form>
              <el-form v-if="activeComponent.name === 'SUB'" size="mini" label-position="right" label-width="100px">
                <el-form-item label="组件名称">
                  <el-input v-model="activeComponent.label" readonly disabled/>
                </el-form-item>
                <el-form-item label="分会场标题">
                  <el-input v-model.trim="activeComponent.h5Options.title"/>
                </el-form-item>
                <el-form-item label="展示方式">
                  <el-radio-group v-model="activeComponent.h5Options.row">
                    <el-radio :label="1">一行一个</el-radio>
                    <el-radio :label="2">一行两个</el-radio>
                    <el-radio :label="3">一行三个</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按钮背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.h5Options.btnBgColor"/>
                    </el-col>
                    <el-col :span="18">
                      <el-input v-model.trim="activeComponent.h5Options.btnBgColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="按钮文字颜色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.h5Options.color"/>
                    </el-col>
                    <el-col :span="18">
                      <el-input v-model.trim="activeComponent.h5Options.color"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-card class="box-card">
                  <div slot="header">
                    <h3>分会场相关配置</h3>
                  </div>
                  <el-card
                      :body-style="{ padding: '10px' }"
                      :style="{marginBottom: '20px'}"
                      v-for="(item, index) in activeComponent.children"
                      :key="activeComponent.key + '_' + item.key">
                    <el-divider content-position="left">{{index + 1}}</el-divider>
                    <el-form-item label="会场ID" required>
                      <el-input v-model.trim="item.activityId"/>
                    </el-form-item>
                    <el-form-item label="会场名称" required>
                      <el-input v-model.trim="item.title"/>
                    </el-form-item>
                    <el-form-item label="会场图" required>
                      <uploader
                          :keyName="index"
                          :fileList="item.imgUrl"
                          :handle-change="handleSubImgChange"
                      />
                    </el-form-item>
                    <div style="text-align: right">
                      <el-button size="mini" @click="deleteSub(index)" round type="danger" icon="el-icon-delete">删除该分会场</el-button>
                    </div>
                </el-card>
                  <el-button size="mini" @click="addSub" round type="primary" icon="el-icon-plus">新增分会场</el-button>
                </el-card>
                <el-button size="small" style="display: block; width: 60%; margin: 0 auto" round @click="deleteComponent" icon="el-icon-delete" type="danger">删除当前组件</el-button>
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
  import ActivityTemp from '../templates/ActivityTemp'
  import Uploader from '../components/common/Uploader'
  import * as service from '../service/pwd'

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
        ],
        componentList: [
          {
            name: 'PAGE',
            label: '页面',
            key: 'PAGE_'+ new Date().getTime(),
            h5Options: {
              pageTitle: '天猫三八节',
              bgColor: '#D02555',
              mainCopyTemp: '3.8女王节来袭，超多折扣等你来，復製[PWD]，打开【Tao宝】抢红包！',
              posterWidth: 750,
              posterHeight: 1200,
              qrWidth: 260,
              qrHeight: 260,
              qrLeft: 244,
              qrTop: 875,
            },
          },
          // {
          //   name: 'TOP_IMG',
          //   label: '头图',
          //   key: 'TOP_IMG_' + new Date().getTime(),
          //   h5Options: {
          //     imgUrl: '',
          //   }
          // },
          {
            name: 'MAIN',
            label: '主会场',
            key: 'MAIN_' + new Date().getTime(),
            options: {
              title: '天猫三八节',
              imgUrl: 'http://img-shop.kkkd.com/2020/yh/activity/38/bg.png',
            },
            h5Options: {
              imgUrl: '',
              text: '进入主会场'
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
        this.activeComponent.h5Options[keyName] = images.length ? images[0] : ''
      },
      selectComponent (idx) {
        this.index = idx
      },
      handleSubImgChange ({images, keyName}) {
        this.activeComponent.children[keyName].imgUrl = images.length ? images[0] : ''
      },
      handleChangeTopImg ({images}) {
        this.activeComponent.options.imgUrl = images.length ? images[0] : ''
      },
      addSub () {
        const items = this.activeComponent.children
        const lastItem = items[items.length - 1]
        if (!lastItem.imgUrl || !lastItem.title || !lastItem.activityId) {
          this.$message.error('请先配置当前分会场信息！')
          return
        }
        this.activeComponent.children.push({
          key: new Date().getTime(),
          imgUrl: '',
          title: '',
          activityId: ''
        })

      },
      deleteSub (idx) {
        if (this.activeComponent.children.length <= 1) {
          this.$message.error('每个分会场列表至少要有一个分会场！');
          return
        }
        this.activeComponent.children.splice(idx, 1)
      },
      addNewSubMod () {
        const subMod = JSON.parse(JSON.stringify({
          name: 'SUB',
          label: '分会场',
          h5Options: {
            title: '精选分会场',
            row: 1
          },
          children: [
            {
              key: new Date().getTime(),
              imgUrl: '',
              title: '',
              activityId: ''
            }
          ]
        }))
        subMod.key = subMod.name + '_' + new Date().getTime()
        this.componentList.push(subMod)
        this.index = this.componentList.length - 1
      },
      deleteComponent () {
        this.componentList.splice(this.index)
        this.index = this.componentList.length - 1
      },
      submitTest () {
        let valid = true

        this.componentList.map(i => {
          if (valid) {
            if (i.name === 'PAGE') {
              if (!i.h5Options.bgColor || !i.h5Options.pageTitle || !i.h5Options.mainCopyTemp || !i.h5Options.posterBgImg) {
                this.$message.error('请配置页面相关信息！')
                valid = false
              }
            } else if (i.name === 'MAIN') {
              if (!i.options.title || !i.options.imgUrl || !i.options.activityId) {
                this.$message.error('请配置主会场相关信息！')
                valid = false
              }
            } else {
              if (i.children.find(item => !item.imgUrl || !item.title || !item.activityId)) {
                this.$message.error('请配置分会场相关信息！')
                valid = false
              }
            }
          }
        })
        if (!valid) {
          return
        }
        const components = JSON.parse(JSON.stringify(this.componentList))
        const pageInfo = components[0]
        pageInfo.components = components.slice(1)
        console.log(pageInfo)
      },
      async submit () {
        const components = JSON.parse(JSON.stringify(this.componentList))
        const pageInfo = components[0]
        pageInfo.components = components.slice(1)
        await service.saveTemp({
          content: JSON.stringify(pageInfo)
        })
        this.$message({
          message: '保存成功!',
          type: 'success'
        });
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
  .center {
    height: calc(100vh - 50px);
    background: #fff;
    box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
    .btn-bar {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;
      text-align: right;
      background: #fff;
      box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
    }
    .bd {
      position: relative;
      .main-page {
        width: 375px;
        height: 667px;
        overflow: auto;
        box-shadow: 0 14px 45px rgba(0,0,0,.25), 0 10px 18px rgba(0,0,0,.2);
      }
      .tools {
        position: absolute;
        left: 50%;
        top: 40px;
        margin-left: 300px;
      }
    }
  }
  .mobile-page {
    width: 750px;
    transform: scale(.5);
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
    .box-card {
      margin-bottom: 10px;
    }
  }
</style>
