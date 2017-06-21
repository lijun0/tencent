<template>
  <div class="global">
    <div class="video">
      <div class="video-task__player">
        <video width="375" height="200"  controls src="http://117.41.241.14/vedu.tc.qq.com/t14187jcf3r.m701.mp4?vkey=637BC505E050D6D2B41CC3FF2495798648F90FC43E551FBDE765C8E33E0435F17C590D4BB724D66E1F8982E18171DDC1DDB1759D4A0EC1F9F829F2090836FB1136F771AD0A454AA0C22959DA92D0DF110B9D24594F85BD96&amp;br=16&amp;platform=2&amp;fmt=auto&amp;level=0&amp;sdtfrom=v3010&amp;guid=e477e5d6ade3db8a52fb690b9b5651f3"></video>
        <!--<i class="icon-font i-play video-task__player-icon"></i>-->
      </div>
    </div>
    <div class="course-info">
      <ul class="info-list">
        <li class="info">
          <router-link to="/Course/Info" class="tabbar__item" id="tabbar__item1" @click.native="setIndex(1)">
            <p v-if="selected != 1" class="icon">详情</p>
            <p v-if="selected === 1" class="icon__active">详情</p>
          </router-link>
        </li>
        <li class="directory">
          <router-link to="/Course/Directory" class="tabbar__item" id="tabbar__item2" @click.native="setIndex(2)">
            <p v-if="selected != 2" class="icon">目录</p>
            <p v-if="selected === 2" class="icon__active">目录</p>
          </router-link>
        </li>
        <li class="related">
          <router-link to="/Course/Related" class="tabbar__item" id="tabbar__item3" @click.native="setIndex(3)">
            <p v-if="selected != 3" class="icon">相关课程</p>
            <p v-if="selected === 3" class="icon__active">相关课程</p>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('/Course/Info')
  },
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    setIndex (n) {
      this.selected = n
    }
  },
  watch: {
    selected: function (value) {
      // console.log(value)
      this.$emit('switchNav', value)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

.video{
  width: 100%;
  height: 13.1875rem;
  /*background-image: url(https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp);*/
  background-size: 100%;
  position: relative;
  /*top: 0;*/
  right: 0;
  /*bottom: 0;*/
  left: 0;
  z-index: 60;
  text-align: center;
}
.video-task__player{
  width: 100%;
  height: 13.1875rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  /*width: 120px;*/
  /*height: 54px;*/
}
video{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /*margin: auto;*/
}
.video-task__player-icon.i-play {
    border: 4px solid #fff;
}
.icon-font {
    vertical-align: 1px;
}
.video-task__player-icon {
    display: block;
    margin: auto;
    border-radius: 35px;
    width: 54px;
    height: 54px;
    font-size: 24px;
    line-height: 54px;
    color: #fff;
    background-color: rgba(0,0,0,.4);
}
.icon-font {
    position: relative;
    font-family: mfont;
    /*font-size: 16px;*/
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    /*line-height: 1;*/
    vertical-align: -2px;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    speak: none;
}
.course-info{
  width: 100%;
  background-color: #fff;
  /*height: 13.1875rem;*/
  /*background-image: url(https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp);
  background-size: 100%;*/
  position: relative;
  /*top: 17.1875rem;*/
  right: 0;
  /*bottom: 0;*/
  left: 0;
  z-index: 60;
  text-align: center;
}
ul{
  list-style: none;
}
ul li{
  float: left;
  display: fixed;
  flex: 1;
  width: 33.3333%;
  line-height: 45px;
  border-bottom: 1px solid #e1e1e1;
}
.info,.directory,.related{
  background-color: #fff;
}
a{
  text-decoration: none;
}
.icon{
  color:gray;
}
.icon__active{
  color:#188fee;
  /*border-bottom: 3px solid #188fee;*/
}
.icon__active:before {
  content: "";
  border-top: 3px solid #188fee;
  display: block;
  width: 100%;
  position: relative;
  top:44px;
  bottom: 0;
  left: 0;
  z-index: 2;
}
</style>
