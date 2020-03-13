<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="//img1.qunarzz.com/sight/p0/2001/45/45ad86f7511c332ba3.img.jpg_600x330_f032b1de.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">哈哈哈哈</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/2001/45/45ad86f7511c332ba3.img.jpg_r_800x800_2b3a9bca.jpg',
        'http://img1.qunarzz.com/sight/p0/1909/87/87d20d1ebb0619c0a3.img.jpg_r_800x800_3e876e52.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    padding-bottom: 55%
    overflow: hidden
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff;
      background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height .32rem
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        font-size: .24rem
        border-radius: .2rem
        background:rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
