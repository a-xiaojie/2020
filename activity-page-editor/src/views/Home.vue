<template>
  <div class="wrap flex flex-column">
    <div class="header flex">
      <div class="left"></div>
      <div class="center flex-1">
        <div class="title">活动页面编辑</div>
      </div>
      <div class="right">
        <span>预览</span>
        <span>发布</span>
      </div>
    </div>
    <main class="main flex-1 flex">
      <div class="left flex flex-column">
        <div class="hd">组件库</div>
        <div class="bd flex-1">
          <ul>
            <li v-for="item in componentsArr" :key="item.name" @click="appendComponent(item)">
              <button>{{item.label}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="center flex-1 flex flex-column">
        <div class="hd flex justify-between">
          主界面
          <div class="tools">
            <span @click="clear">清空</span>
          </div>
        </div>
        <div class="bd flex-1 flex items-center justify-center">
          <div class="main-page">
            <div v-if="!componentList.length">试试添加组件进来</div>
            <div class="mobile-page" v-else>
              <template v-for="item in componentList">
                <xj-banner
                    v-if="item.name === 'BANNER'"
                    :img-url="item.imgUrl"
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
      </div>
      <div class="right">
        <div class="hd">参数设置</div>
        <div class="bd">
          <form v-if="activeComponent">
            <div class="form-item">
              <label for="text">文案</label>
              <input type="text" id="text" v-model="activeComponent.text" />
            </div>
            <div class="form-item">
              <label for="bgColor">背景色</label>
              <input type="text" id="bgColor" v-model="activeComponent.styleOptions.backgroundColor" />
            </div>
            <div class="form-item">
              <label for="width">宽度</label>
              <input type="text" id="width" v-model="activeComponent.styleOptions.width" />
            </div>
            <div class="form-item">
              <label for="height">高度</label>
              <input type="text" id="height" v-model="activeComponent.styleOptions.height" />
            </div>
            <div class="form-item">
              <label for="color">颜色</label>
              <input type="text" id="color" v-model="activeComponent.styleOptions.color" />
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import XjButton from '../components/XjButton'
import XjBanner from '../components/XjBanner'
import XjText from '../components/XjText'

export default {
  name: 'Home',
  data () {
    return {
      componentsArr: [
        {
          name: 'BANNER',
          label: '背景图',
          imgUrl: 'http://img-shop.kkkd.com/2020_38_bg.png',
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
    XjText
  },
  methods: {
    appendComponent (item) {
      this.componentList.push(item)
    },
    clear () {
      this.componentList = []
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
        width: 200px;
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
        .mobile-page {
          width: 750px;
          height: 1334px;
          margin: 0 auto;
          transform: scale(.5);
          transform-origin: 0 0;
        }
      }
      .right {
        width: 200px;
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
          .form-item {
            padding: 10px 20px;
            label {
              display: block;
              margin-bottom: 10px;
              font-size: 12px;
              color: #666;
            }
            input {
              width: 160px;
              height: 30px;
              padding: 0 10px;
              color: #65967a;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
