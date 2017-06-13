<template>
  <div class="directory-container">
    <div class="sub-course-static">
      <div class="sub-course-static__title">授课方式：</div>
      <div class="sub-course-static__cate sub-course-static__record">
        <i class="i-course-record"></i>视频（63）
      </div>
      <div class="sub-course-static__cate sub-course-static__data">
        <i class="i-course-data"></i>资料（1）
      </div>
      <div class="sub-course-static__cate sub-course-static__test">
        <i class="i-course-test"></i>习题（1）
      </div>
    </div>
    <div class="sub-course-list-wrapper">
      <ul class="course-cnt__lesson-list" >
        <li class="course-cnt__lesson-item" v-for="item in courseList">
          <div class="course-cnt__lesson-title">
            <a href="javascript:;" class="course-cnt__lesson-link">
              <span class="course-cnt__lesson-no">{{item.num}}</span>
              <span class="course-cnt__lesson-title-word">{{item.title}}</span>
              <i class="icon-down-arrow i-v-bottom"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      courseList: [
        {
          num: '01',
          title: 'Linux系统介绍和学习方法课程指导'
        },
        {
          num: '02',
          title: 'Linux系统介绍和RHEL7操作系统的安装'
        },
        {
          num: '03',
          title: '创建可用实验快照和服务组装'
        },
        {
          num: '04',
          title: 'RHEL7基本命令操作'
        },
        {
          num: '05',
          title: '文件的基本管理和服务器来电后自动开机'
        },
        {
          num: '06',
          title: 'RHEL7系统用户及组管理'
        },
        {
          num: '07',
          title: 'RHEL7文件的归档和压缩文件的归档和压缩'
        },
        {
          num: '08',
          title: 'RHEL7软件包管理'
        },
        {
          num: '09',
          title: 'Linux磁盘管理'
        },
        {
          num: '10',
          title: 'RAID磁盘阵列的搭建'
        },
        {
          num: '11',
          title: '进程管理'
        },
        {
          num: '12',
          title: '重定向和文件查找'
        },
        {
          num: '13',
          title: 'LVM逻辑卷-磁盘配额技术'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/font.css';
.cat-detail-container{
  height: 100%;
}
.sub-course-static {
    display: block;
    text-align: left;
    width: 100%;
    float:left;
    overflow: hidden;
    border-bottom: 10px solid #efeff4;
    /*padding: 0 16px 0;*/
    max-height: 72px;
    font-size: 14px;
    line-height: 36px;
    color: #777;
}
.sub-course-static__title {
    display: inline-block;
    position: relative;
    left: 16px;
}
.sub-course-static__cate {
    padding: 0 15px;
    display: inline-block;
}
ul {
  list-style: none;
}
i {
    font-style: normal;
}
.i-course-record,.i-course-test, .i-course-data {
    display: inline-block;
    position: relative;
    top: 8px;
    left: 0;
    width: 32px;
    height: 28px;
    font-size: 18px;
    line-height: 28px;
    background-repeat: no-repeat;
    background-size: 26px auto;
}
.sub-course-static__test{
  position: relative;
  left: 75px;
}
.i-course-record {
    background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-video@2x.ea9e65a.png);
}
.i-course-data {
    background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-file@2x.f74b35b.png);
}
.i-course-test {
    background-image: url(http://9.url.cn/edu/mobilev2/pages/courseDetail/img/task-test@2x.f5e78fd.png);
}
.sub-course-list-wrapper{
  display: block;
  position: relative;
  top:130px;
  width: 100%;
  height: 200px;
}
.course-cnt__lesson-list{
  width: 100%;
  height: 90%;

  position:absolute;
}
.course-cnt__lesson-item{
  width: 100%;
  height: 50px;
  line-height: 50px;
  
}
.course-cnt__lesson-no {
    display: block;
    float: left;
    position: relative;
    margin-right: 12px;
    margin-left: 12px;
    font-size: 16px;
    line-height: 52px;
    color: #bbb;
}
.course-cnt__lesson-title-word {
    float: left;
    overflow: hidden;
    -webkit-box-orient: vertical;
    max-width: 70%;
    max-height: 52px;
    font-size: 16px;
    line-height: 52px;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 2;
    display: block;
    white-space: nowrap;
    color:black;
}
.course-cnt__lesson-link{
  width: 100%;
  float:left;
  /*border:1px solid black*/
}
a{
  text-decoration: none;
}
.icon-down-arrow {
    position: relative;
    top: 50%;
    float:right;
    padding: 13px 16px 0 0;
    width: 24px;
    height: 24px;
    font-family: mfont;
    font-size: 16px;
    line-height: 24px;
    text-indent: 0;
    color: #a7a7a7;
    -webkit-font-smoothing: antialiased;
}
.i-v-bottom:before {
    content: "\f005";
}
</style>
