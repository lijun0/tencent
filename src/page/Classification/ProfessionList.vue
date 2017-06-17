<template>
  <div class="cat-detail-container">
    <div class="banner">
      <img src="http://p.qpic.cn/qqconadmin/0/c26e002a75ca49a3b0340df9dc515faa/0" alt="">
    </div>
    <div class="inner scroll-wrapper">
      <ul class="sub-cat-list" v-for="item in catItems">
        <!--<li class="sub-cat">-->
          <a href="javascript:;" class="sub-cat-title">{{item.subTitle}}</a>
          <ul class="sub-cat-sub">
            <router-link to="/CourseList/mask">
              <li class="sub-item" v-for="item in item.subItems">
                <a href="javascript:;" class="sub-item-title">{{item}}</a>
              </li>
            </router-link>
          </ul>
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      catItems: [
        {
          subTitle: '公务求职',
          subItems: [
            '公务员',
            '事业单位',
            '教师考试',
            '金融银行',
            '警法考试',
            '企业招聘'
          ]
        },
        {
          subTitle: '法学院',
          subItems: [
            '法律硕士',
            '司法考试',
            '法律实务',
            '趣味法学'
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cat-detail-container{
  height: 100%;
}
.banner {
    overflow: hidden;
    margin-top: .15rem;
    position: relative;
    /*right:0;*/
    /*padding-top: 39%;*/
    /*height: 0;*/
    /*background: url(//9.url.cn/edu/mobilev2/img/default-img.74ba483.png) no-repeat;*/
    background-size: cover;
    border-radius: 4px;
}
.banner img{
  border-radius: 4px;
  margin-left: 80px;
}
.inner{
  position: relative;
  width: 75%;
  left: 23%;

  height: 100%;
}
a{
  text-decoration: none;
  color:#000;
}
.sub-cat-list{
  padding-bottom: .15rem;
  /*padding-left:3rem;*/
  height: 10.25rem;
  left: 0;
  position: relative;
}
ul {
  list-style: none;
}

.sub-cat-title {
  display: block;
  position: relative;
  margin: .15rem 0;
  padding-left:1.2rem; 
  height: 2.5rem;
  font-size: 16px;
  line-height: 2.5rem;
  left: 0;
  text-align: left;
  color: #000;
  width: 200px;

}
.sub-cat-sub{
  margin-left: 1.2rem;
  left: 0;
  position: relative;
}
.sub-item {
    float: left;
    position: relative;
    overflow: hidden;
    margin-right: 3.5%;
    margin-bottom: 3.5%;
    width: 29%;
    height: 3.3125rem;
    font-size: 14px;
    line-height: 3.3125rem;
    color:black;
    border-radius: 4px;
    background: #efeff4;
}
</style>
