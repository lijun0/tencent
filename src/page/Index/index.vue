<template>
  <div id="wrapper" class="wrapper">
    <div class="scroll-wrapper">
      <template>
        <el-carousel >
          <el-carousel-item v-for="item in bannerItems" :key="item">
            <img :src="item" style="width:100%;height:100%;"></img>
            <!--<h3>{{ item }}</h3>-->
          </el-carousel-item>
        </el-carousel>
      </template>
      <section class="custom" >
        <div class="custom__mod" v-for="item in courseItems">
          <h3 class="common-title">{{item.title}}</h3>
          <ul class="common__course-list">
            <li class="common__course-item" v-for="item in item.course">
              <router-link to="/Course" class="common__course-link">
                <div class="common__course-cover-wrap">
                  <img :src="item.pic" alt="" class="common__course-cover">
                </div>
                <h3 class="common__course-title">{{item.desc}}</h3>
                <p class="common__course-price">{{item.price}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      bannerItems: [
        'https://p.qpic.cn/qqconadmin/0/e2d957e813524bd18fa48982643608b3/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/6ae6fead2df9401c9ae50b08352a1bd5/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/bd3cdffaedc24129837c41f860d01226/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/3928b2fbc314438fa2a9506e87522e31/0?tp=webp'
      ],
      courseItems: [
        {
          title: 'IT互联网',
          course: [
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp',
              desc: 'CD-Linux高级运维架构师课程/云计算/安全/docker/虚拟化/调优',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCUt1qTkJXNZR9Pkf9PxLrunHFZ2pqGCvEncOdwt7qx0Wj3f3pa2RVFX2puateIfMQ/220?tp=webp',
              desc: 'JAVA开发/Nginx/NoSQL/高并发/架构/集群/性能优化【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDriaGpS1J9q34e9HtpaCmrn48BaxXMZdkAAq4kpgy32dqickRjV4SOibaE4lsFPpArnU/220?tp=webp',
              desc: '高级前端开发晋升班【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCx31vPjTpp0ibIL4yDQibtV2MNsPzfA4pxUkNVzWnh5j9xsEVyXjQhK7y1z2Y0GeB3I/220?tp=webp',
              desc: '软件测试自学/面试/接口/压力/自动化/性能/入门到精通【柠檬班】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAgeoR0OBnvPS422xIZ7SJd4dUib9323FkItCICiaXtku7iaZv6ZG697kkATGcOnpnbrk/220?tp=webp',
              desc: 'Android开发/安卓/NDK/架构/数据结构算法/性能优化【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBFB9RqSao5wvvfzL7iccib09MjzhfO4m56ibgViazTImOKUaIcByksSzeSIUx66CWWSho/220?tp=webp',
              desc: '18个标题法则 ：助你打造10万+级文章的标题',
              price: '￥99.00'
            }
          ]
        },
        {
          title: '设计创作',
          course: [
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp',
              desc: 'CD-Linux高级运维架构师课程/云计算/安全/docker/虚拟化/调优',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCUt1qTkJXNZR9Pkf9PxLrunHFZ2pqGCvEncOdwt7qx0Wj3f3pa2RVFX2puateIfMQ/220?tp=webp',
              desc: 'JAVA开发/Nginx/NoSQL/高并发/架构/集群/性能优化【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDriaGpS1J9q34e9HtpaCmrn48BaxXMZdkAAq4kpgy32dqickRjV4SOibaE4lsFPpArnU/220?tp=webp',
              desc: '高级前端开发晋升班【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCx31vPjTpp0ibIL4yDQibtV2MNsPzfA4pxUkNVzWnh5j9xsEVyXjQhK7y1z2Y0GeB3I/220?tp=webp',
              desc: '软件测试自学/面试/接口/压力/自动化/性能/入门到精通【柠檬班】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAgeoR0OBnvPS422xIZ7SJd4dUib9323FkItCICiaXtku7iaZv6ZG697kkATGcOnpnbrk/220?tp=webp',
              desc: 'Android开发/安卓/NDK/架构/数据结构算法/性能优化【动脑学院】',
              price: '免费'
            },
            {
              pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBFB9RqSao5wvvfzL7iccib09MjzhfO4m56ibgViazTImOKUaIcByksSzeSIUx66CWWSho/220?tp=webp',
              desc: '18个标题法则 ：助你打造10万+级文章的标题',
              price: '￥99.00'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  .el-carousel {
    width: 100%;
    height: 143px;
  }
  .el-carousel__item{
    height: 143px;
  }
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .common-title {
    position: relative;
    height: 22px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 400;
    color: #888;
    padding-top: 16px;
}
.common-title:before {
    margin-right: 13px;
}
.common-title:before, .common-title:after {
    display: inline-block;
    width: 1px;
    height: 9px;
    background: #cecece;
    -webkit-transform: rotate(30deg);
    content: "";
}
.common-title:after {
    margin-left: 9px;
}
.common__course-list {
    margin-top: 14px;
    padding: 0 10px 8px;
    /*font-size: 0;*/
}
ul{
  list-style: none;
}
.common__course-item {
    display: inline-block;
    margin-bottom: 10px;
    width: 50%;
    vertical-align: top;
}
.common__course-item:nth-child(odd) .common__course-link {
    margin-right: 3px;
}
.common__course-link {
    display: block;
    border-radius: 4px;
}
a, a:active, a:hover {
    text-decoration: none;
}
a, div {
    -webkit-tap-highlight-color: transparent;
}
.common__course-cover-wrap {
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    padding-top: 56%;
    width: 100%;
}
.common__course-cover {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
}
.common__course-title {
    margin-top: 7px;
    padding: 3px 4px;
    margin-bottom: 4px;
    height: 18px;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
}
.common__course-price {
    padding-left: 4px;
    font-size: 14px;
    line-height: 14px;
    color: #188eee;
    text-align: left;
}
</style>
