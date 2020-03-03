<template>
  <temp-wrap :class="{active: index === 0}"
       @click.native="selectComponent(0)" :style="{backgroundColor: componentList[0].h5Options.bgColor}">
    <div v-for="(item, idx) in componentList" :key="item.key" :class="{active: index === idx}" @click.stop="selectComponent(idx)">
      <div class="banner" v-if="item.name === 'TOP_IMG'" :style="{height: item.h5Options.height + 'px'}">
        <img :src="item.h5Options.imgUrl" alt="">
      </div>
      <div class="temp-main" v-if="item.name === 'MAIN'">
        <button class="entry-btn" :style="{backgroundImage: `url(${item.h5Options.imgUrl})`, backgroundColor: item.h5Options.bgColor}">{{item.h5Options.text || '进入主会场'}}</button>
        <div class="btns flex justify-center items-center">
          <button class="share-poster">分享海报</button>
          <button class="copy-btn">复制淘口令</button>
        </div>
      </div>
      <div class="sub-main-mod" :class="{row1: item.h5Options.row === 1, row2: item.h5Options.row === 2, row3: item.h5Options.row === 3}" v-if="item.name === 'SUB'">
        <div class="mod-hd" v-if="item.h5Options.title">{{item.h5Options.title}}</div>
        <div class="mod-bd" :class="{'flex flex-wrap justify-around': item.h5Options.row !== 1}">
          <div class="item" :class="{flex: item.h5Options.row === 1}" v-for="(child, sIndex) in item.children" :key="sIndex">
            <div class="img">
              <img :src="child.imgUrl">
            </div>
            <div class="info">
              <p class="title">{{child.title}}</p>
              <input class="pwd" v-model="child.activityId"/>
              <div class="btns" :class="{'flex justify-between': item.h5Options.row !== 3}">
                <button class="flex-1 entry-btn" :style="{backgroundColor: item.h5Options.btnBgColor, color: item.h5Options.color}">进入会场</button>
                <button class="flex-1 copy-btn" :style="{backgroundColor: item.h5Options.btnBgColor,  color: item.h5Options.color}">一键复制</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </temp-wrap>
</template>

<script>
  import TempWrap from './components/TempWrap'
  export default {
    name: 'SubTemp',
    props: {
      index: {
        type: Number,
        default: 0
      },
      componentList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      TempWrap,
    },
    methods: {
      selectComponent (idx) {
        this.$emit('selectComponent', idx)
      }
    }
  }
</script>

<style scoped lang="less">
  .temp-wrap {
    width: 750px;
    padding-bottom: 100px;
    min-height: 100vh;
    background: #f8f8f8;
    &.active, .active {
      box-shadow: inset 0 0 10px 4px #3a8dff;
    }
    .banner {
      width: 750px;
      height: 844px;
      overflow: hidden;
    }
    .temp-main {
      text-align: center;
      margin-bottom: 26px;
      .entry-btn {
        width: 603px;
        height: 86px;
        font-size: 40px;
        color: #fff;
        background: url(http://img-shop.kkkd.com/2020/yh/activity/38/button.png) no-repeat;
        background-size: 100%;
        border-radius: 40px;
      }
      .btns {
        margin-top: 26px;
        button {
          width: 286px;
          height: 80px;
          margin: 0 10px;
          font-size: 40px;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 40px;
          background: transparent;
        }
      }
    }
    .sub-main-mod {
      padding-top: 26px;
      .mod-hd {
        font-size: 34px;
        margin: 0 auto 20px;
        text-align: center;
        color: #fff;
        line-height: 48px;
      }
      .mod-bd {
        padding: 0 25px;
        .item {
          width: 700px;
          margin-bottom: 16px;
          border-radius: 10px;
          background: #fff;
          .img {
            width: 360px;
            height: 166px;
            overflow: hidden;
            border-radius: 10px 0 0 10px;
            img {
              width: inherit;
              height: inherit;
              object-fit: cover;
              display: block;
            }
          }
          .info {
            width: 340px;
            .title {
              padding: 25px 12px 0;
              line-height: 1;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .pwd {
              display: block;
              width: 100%;
              height: 50px;
              padding: 12px 0;
              text-align: center;
              font-size: 22px;
              color: #575757;
            }
            .btns {
              padding: 0 12px 15px;
              button {
                display: block;
                height: 46px;
                margin: 0 5px;
                border-radius: 23px;
                padding: 0 20px;
                font-size: 26px;
                color: #fff;
                background: #D02555;
              }
            }
          }
        }
      }
      &.row2 {
        .mod-bd {
          padding: 0 12px;
          .item {
            width: 340px;
            .img {
              width: 340px;
              height: 140px;
              border-radius: 10px 10px 0 0;
            }
            .info {
              width: 100%;
              .title {
                padding: 0 12px;
                line-height: 50px;
              }
              .pwd {
                margin-bottom: 16px;
                background: #f8f8f8;
              }
              .btns {
                padding: 0 12px 15px;
                button {
                  width: 100%;
                  margin: 0 5px;
                }
              }
            }
          }
        }
      }
      &.row3 {
        .mod-bd {
          padding: 0 12px;
          .item {
            width: 218px;
            .img {
              width: 218px;
              height: 114px;
              border-radius: 10px 10px 0 0;
            }
            .info {
              width: 100%;
              .title {
                padding: 0 12px;
                line-height: 50px;
              }
              .pwd {
                margin-bottom: 16px;
                background: #f8f8f8;
              }
              .btns {
                padding-bottom: 0;
                button {
                  width: 100%;
                  margin: 0 0 15px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
