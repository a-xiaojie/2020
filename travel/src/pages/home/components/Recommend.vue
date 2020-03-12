<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/d7/8cf4043a2246e37dae2122232802adb2.water.jpg_200x200_ab7bbc76.jpg',
        title: '杭州薰衣草庄园',
        desc: '杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/d7/8cf4043a2246e37dae2122232802adb2.water.jpg_200x200_ab7bbc76.jpg',
        title: '杭州薰衣草庄园',
        desc: '杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园杭州薰衣草庄园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/d7/8cf4043a2246e37dae2122232802adb2.water.jpg_200x200_ab7bbc76.jpg',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
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
