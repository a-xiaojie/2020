<template>
  <div>
    <el-container class="wrap">
      <el-header class="header flex" height="50px">
        <div class="left"></div>
        <div class="center flex-1">
          <div class="title">活动页面编辑</div>
        </div>
        <div class="right">
          <span>预览</span>
          <span>发布</span>
        </div>
      </el-header>
      <el-container class="main flex-1">
        <el-aside class="left flex flex-column" width="200px">
          <div class="hd">组件库</div>
          <div class="bd flex-1">
            <ul>
              <li v-for="item in componentsArr" :key="item.name" @click="appendComponent(item)">
                <button>{{item.label}}</button>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-main class="center flex-1 flex flex-column">
          <div class="hd flex justify-between">
            主界面
            <div class="tools">
              <el-tooltip class="item" effect="dark" content="清空" placement="top">
                <i class="el-icon-delete" @click="clear"></i>
              </el-tooltip>
            </div>
          </div>
          <div class="bd flex-1 flex items-center justify-center">
            <div class="main-page">
              <div v-if="!componentList.length" class="no-component">试试添加组件进来</div>
              <div class="mobile-page" v-else>
                <template v-for="item in componentList">
                  <xj-banner
                      v-if="item.name === 'BANNER'"
                      :img-url="item.imgUrl"
                      :style-options="item.styleOptions"
                      :key="item.id"
                  />
                  <xj-button
                      v-if="item.name === 'BUTTON'"
                      :key="item.id"
                      :style-options="item.styleOptions"
                      :text="item.text"
                  />
                  <xj-text
                      v-if="item.name === 'TEXT'"
                      :key="item.id"
                      :style-options="item.styleOptions"
                      :text="item.text"
                  />
                </template>
              </div>
            </div>
          </div>
        </el-main>
        <el-aside class="right flex flex-column" width="200px">
          <template v-if="activeComponent">
            <div class="hd">参数设置</div>
            <div class="bd flex-1">
              <el-form :model="activeComponent" v-if="activeComponent" label-position="top" size="mini">
                <el-form-item label="文案" v-if="activeComponent.name !== 'BANNER'">
                  <el-input v-model="activeComponent.text"/>
                </el-form-item>
                <el-form-item label="宽度">
                  <el-input v-model="activeComponent.styleOptions.width" />
                </el-form-item>
                <el-form-item label="高度">
                  <el-input v-model="activeComponent.styleOptions.height"/>
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
                <el-form-item label="文字颜色" v-if="activeComponent.name !== 'BANNER'">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="activeComponent.styleOptions.color"/>
                    </el-col>
                    <el-col :span="19">
                      <el-input v-model="activeComponent.styleOptions.color"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="上传图片" v-if="activeComponent.name === 'BANNER'">
                  <uploader
                      keyName="imgUrl"
                      :files="activeComponent.imgUrl"
                      :handle-change="handleUpload"
                  />
                </el-form-item>
              </el-form>
            </div>
          </template>
          <template v-else>
            <div class="hd">页面参数设置</div>
            <div class="bd flex-1">
              <el-form :model="pageForm" label-position="top" size="mini">
                <el-form-item label="页面标题">
                  <el-input v-model="pageForm.pageTitle"/>
                </el-form-item>
                <el-form-item label="背景色">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-color-picker v-model="pageForm.bgColor"/>
                    </el-col>
                    <el-col :span="19">
                      <el-input v-model="pageForm.bgColor"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="淘口令文案">
                  <el-input v-model="pageForm.mainCopyTemp"/>
                </el-form-item>
                <el-form-item label="海报原图">
                  <uploader
                      keyName="posterBgImg"
                      :files="pageForm.posterOptions.posterBgImg"
                      :handle-change="handleUpload"
                  />
                </el-form-item>
                <el-form-item label="海报宽">
                  <el-input v-model="pageForm.posterOptions.posterWidth"/>
                </el-form-item>
                <el-form-item label="海报高">
                  <el-input v-model="pageForm.posterOptions.posterHeight"/>
                </el-form-item>
                <el-form-item label="二维码宽">
                  <el-input v-model="pageForm.posterOptions.qrCode.width"/>
                </el-form-item>
                <el-form-item label="二维码高">
                  <el-input v-model="pageForm.posterOptions.qrCode.height"/>
                </el-form-item>
                <el-form-item label="二维码坐标">
                  左：<el-input v-model="pageForm.posterOptions.qrCode.left"/>
                  顶：<el-input v-model="pageForm.posterOptions.qrCode.top"/>
                </el-form-item>
              </el-form>
            </div>
          </template>
        </el-aside>
      </el-container>
    </el-container>
    <el-dialog>

    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import XjButton from '../components/XjButton'
import XjBanner from '../components/XjBanner'
import XjText from '../components/XjText'

import Uploader from '../components/common/Uploader'

export default {
  name: 'Home',
  data () {
    return {
      componentsArr: [
        {
          name: 'BANNER',
          label: '背景图',
          imgUrl: '',
          styleOptions: {
          }
        },
        {
          name: 'TEXT',
          label: '文本框',
          text: '',
          styleOptions: {
          }
        },
        {
          name: 'BUTTON',
          label: '按钮',
          text: '确定',
          styleOptions: {
            width: '600px',
            height: '80px',
            borderRadius: '40px',
            color: '#fff',
            backgroundColor: 'red'
          }
        },
      ],
      componentList: [],
      index: 0,
      pageForm: {
        pageTitle: '',
        bgColor: '',
        mainCopyTemp: '♬新年抢年货、囤货买买买，年终最后一波低价等你来，长按付zhi（[PWD]）本段文字、打开桃.bao~',
        posterOptions: {
          posterBgImg: '',
          posterWidth: 750,
          posterHeight: 1200,
          qrCode: {
            width: 260,
            height: 260,
            left: 244,
            top: 875
          }
        }
      }
    }
  },
  computed: {
    activeComponent () {
      return this.componentList[this.index]
    }
  },
  components: {
    XjButton,
    XjBanner,
    XjText,
    Uploader,
  },
  methods: {
    appendComponent (item) {
      this.componentList.push(item)
      this.index = this.componentList.length - 1
    },
    clear () {
      this.componentList = []
    },
    handleUpload ({images, keyName}) {
      this.activeComponent[keyName] = images.length ? images[0] : ''
    }
  }
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
      .left {
        .hd {
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          font-size: 14px;
          color: #666;
          background: #fff;
          box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
        }
        .bd {
          overflow: auto;
          ul {
            padding: 20px;
            li {
              height: 40px;
              text-align: center;
              button {
                height: 30px;
                width: 100px;
                color: #fff;
                background: #0db97f;
              }
            }
          }
        }
      }
      .center {
        padding: 0;
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
        .no-component {
          display: flex;
          height: inherit;
          align-items: center;
          justify-content: center;
        }
        .mobile-page {
          width: 750px;
          height: 1334px;
          margin: 0 auto;
          transform: scale(.5);
          transform-origin: 0 0;
        }
      }
      .right {
        .hd {
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          font-size: 14px;
          color: #666;
          background: #fff;
          box-shadow: 0 1px 6px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.1);
        }
        .bd {
          overflow: auto;
          form {
            padding: 10px 20px;
          }
        }
      }
    }
  }
</style>
