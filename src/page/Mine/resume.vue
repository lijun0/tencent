<template>
  <div class="my-resume">
    <header class="header">
      关于作者
    </header>
    <section class="resume-card">
      <div class="card-header">
        <img src="http://q2.qlogo.cn/g?b=qq&k=1QkflibppmQa3DsG3fHwVTQ&s=140&t=1483347220" alt="" class="header__avatar">
      </div>
      <h2 class="name">张丽君</h2>
      <div class="desc">
        <p class="wx">微信：lele19950124</p>
        <p class="tel">电话：17770031748</p>
        <p class="mail">mail：759651849@qq.com</p>
      </div>
      <div class="link-group">
        <a href="https://github.com/lijun0/tencent" class="github">
          <img src="http://xurenjie.cn:3000/resume/github.png" alt="">
        </a>
        <a href="http://orxfqlpdb.bkt.clouddn.com/%E5%BC%A0%E4%B8%BD%E5%90%9B%E7%9A%84%E7%AE%80%E5%8E%86%20%282%29.pdf" class="resume">
          我的简历
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: 'http://xurenjie.cn:3000/resume/xurenjie.JPG',
      github: 'http://xurenjie.cn:3000/resume/github.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-resume
  position absolute
  top 0
  left 0
  right 0
  height 16.466667rem
  z-index 888
  .header
    width 100%
    text-align center
    margin-top 4.326667rem
    color #777
    font-size 1.344444rem
  .resume-card
    text-align center
    margin-top 2.6rem
    .card-header
      width 100%
      text-align center
      .header__avatar
        width 5rem
        height 5rem
        background-size cover
        border-radius 999px
        border 3px solid #f2f2f2
    .name
      margin-top .8rem
      font-size 1.5rem
      color #333
    .desc
      width 100%
      p
        margin-top .81rem
        font-size 1rem
    .link-group
      margin-top 1rem
      position relative
      .github
        text-align center
        font-size .6rem
        color #333
        img
          margin-left .3rem
          width 1.5rem
          height 1.5rem
          vertical-align middle
      .resume
        margin-top .6rem
        display block
        color #333
        font-size 1rem
        position relative
</style>
