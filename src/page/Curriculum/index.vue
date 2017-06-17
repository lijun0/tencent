<template>
  <div class="list-wrapper">
    <ul class="course-list">
      <router-link to="/Course/Info">
        <li class="course list-view__item">
        <div class="course__cover">
          <div class="course__cover-img" style="background-image:url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp);"></div>
          <div class="course__cover-mask"></div>
        </div>
        <div class="course__name-box">
          <h3 class="course__name">PHP开发入门基础/web前端/MySQL/模板引擎/框架</h3>
        </div>
        <div class="course__progress" data-id="100135806">
          <div class="course__progress-term-rect course__progress-term-rect1" style="left: 29px;">
            <div class="course__progress-term-circle course__progress-term-circle1" style="clip: rect(0px 29px 58px 0px); transform: rotate(7.2deg); border-color: rgba(255, 255, 255, 0.4); left: -29px; transition: -webkit-transform 36ms linear;"></div>
          </div>
          <div class="course__progress-term-rect course__progress-term-rect2">
            <div class="course__progress-term-circle course__progress-term-circle2"></div>
          </div>
          <div class="course__progress-bg-circle"></div>
          <div class="course__progress-my-rect course__progress-my-rect1" style="left: 29px;">
            <div class="course__progress-my-circle course__progress-my-circle1" style="clip: rect(0px 24px 48px 0px); transform: rotate(3.6deg); border-color: rgb(255, 255, 255); left: -24px; transition: -webkit-transform 18ms linear;"></div>
          </div>
          <div class="course__progress-my-rect course__progress-my-rect2">
            <div class="course__progress-my-circle course__progress-my-circle2"></div>
          </div>
          <p class="course__progress-wording">1<span class="course__progress-wording-unit">%</span></p>
        </div>
        <p class="course__msg">
          <i class="icon-font i-course-record"></i> 
          <span class="course__sub-name">继续学习：第2节 自定义函数（上）</span> 
        </p>
      </li>
      </router-link>
    </ul>
    没有更多数据
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html{
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.list-wrapper{
  background-color: #e9e9e9;
  height: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 3.5rem;
  right: 0;
  bottom: 6rem;
  left: 0;
  -webkit-transform: translate3d(0,0,0);
  -webkit-overflow-scrolling: touch;
}
.course-list {
  margin-top: -10px;
  background-color: #e9e9e9;
  left: 0;
}
.course {
  position: relative;
  margin: 30px 20px 10px 10px;
  border-radius: 5px;
  height: 8.5rem;
  background: #fff;
  width: 90%;
}
.course__cover {
  overflow: hidden;
  position: absolute;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 96px;
}
/*.course__cover-img{
  height: 96px;
  background-image: url(http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCYR0ZhPtQkEc4Kw276ibriba9ZibzTtYkZycCUuia5ktiaiaw9zz9RfGK1VHGOxPrAS0kIA/90?tp=webp90&amp;tp=webp) no-repeat;
  background-size:100% 100%;
}*/
.course__cover-img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 96px;
  background: url(//9.url.cn/edu/mobilev2/img/default-img.74ba483.png) #fff no-repeat top left;
  background-size: 100% 96px;
  -webkit-filter: blur(12px);
  filter: blur(12px);
}
.course__cover-mask {
  background: rgba(0,0,0,.3);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 100%;
}
.course__name-box {
  overflow: hidden;
  position: relative;
  top: 1.25rem;
  left: 15px;
  width: 60%;
  height: 4.25rem;
  z-index:99;
}
.course__name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  bottom: 30%;
  max-height: 48px;
  font-size: 14px;
  line-height: 24px;
  vertical-align: middle;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #fff;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  -webkit-line-clamp: 2;
}
.course__progress {
  position: absolute;
  top: 24px;
  right: 20px;
  width: 58px;
  height: 58px;
  line-height: 58px;
  text-align: center;
  vertical-align: middle;
  color: #fff;
}
.course__progress-term-rect {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 29px;
  height: 58px;
}
.course__progress-term-circle {
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid rgba(255,255,255,0);
  border-radius: 29px;
  width: 50px;
  height: 50px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}
.course__progress-bg-circle {
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 24px;
  width: 46px;
  height: 46px;
}
.course__progress-my-rect {
  overflow: hidden;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
  width: 24px;
  height: 48px;
}
.course__progress-my-circle {
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid rgba(255,255,255,0);
  border-radius: 24px;
  width: 40px;
  height: 40px;
  -webkit-transform: rotate(0);
  transform: rotate(0);
}
.course__progress-wording {
  padding-left: 4px;
  font-size: 15px;
  line-height: 58px;
  margin: 0;
}
.course__progress-wording-unit {
  font-size: 12px;
  vertical-align: middle;
}
.course__msg {
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #666;
  margin: 0;
  text-align: left;
}
.course__msg .icon-font {
  position: relative;
  top: -2px;
  margin-right: 7px;
  color: #d1e8fc;
}
.icon-font {
  position: relative;
  font-family: mfont;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  vertical-align: -2px;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  speak: none;
}
.i-course-record:before {
  content: "\f03e";
}
</style>
