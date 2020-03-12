<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/c1/48e295bdafbc88.jpg_r_640x214_3723c001.jpg',
        title: '杭州薰衣草庄园',
        desc: '杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/c1/48e295bdafbc88.jpg_r_640x214_3723c001.jpg',
        title: '杭州薰衣草庄园',
        desc: '杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/c1/48e295bdafbc88.jpg_r_640x214_3723c001.jpg',
        title: '杭州薰衣草庄园',
        desc: '杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.4375%
    .item-img
      width 100%
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .2rem
      padding 0 .2rem
      color: #fff;
      border-radius: .06rem
      background: #ff9300
</style>
