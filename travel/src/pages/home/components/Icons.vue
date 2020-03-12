<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.imgUrl">
          <div class="icon-img">
            <img :src="item.imgUrl" alt=""/>
          </div>
          <p class="icon-desc">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      icons: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '热门景点热门景点'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          text: '热门景点'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          text: '热门景点'
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          text: '热门景点'
        },
        {
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          text: '热门景点'
        },
        {
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
          text: '热门景点'
        },
        {
          id: '0007',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          text: '热门景点'
        },
        {
          id: '0008',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
          text: '热门景点'
        },
        {
          id: '0009',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          text: '泡温泉'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden;
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        right: 0
        bottom: .44rem
        left: 0
        padding .1rem
        box-sizing border-box
        img
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        right: 0
        bottom: 0
        left: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
