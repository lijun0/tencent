<template>
  <div class="cateMiddle" v-model="selected">
      <ul class="cate-list">
          <li class="cate">
            <router-link to="/menu-mt/IT" class="cate__item" id="cate__item1" @click.native="setIndex(1)">
            <p v-if="selected != 1" class="icon">全部</p>
            <p v-if="selected === 1" class="icon__active">全部</p>
            </router-link>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(kaoyan)">考研</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(college)">大学</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(highschool)">高中</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(Junior)">初中</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(Primary)">小学</a>
          </li>
      </ul>
      <div class="cateRight">
        <ul class="cate-list" >
          <li class="cate" v-for="item in list">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 1,
        list: [],
        kaoyan: [
          '全部',
          '规划指导',
          '考研英语',
          '考研政治',
          '考研数学',
          '专业课',
          '其他'
        ],
        college: [
          '全部',
          '自考',
          '专升本'
        ],
        highschool: [
          '全部',
          '高考备战',
          '高二',
          '高一'
        ],
        Junior: [
          '全部',
          '中考备战',
          '初二',
          '初一'
        ],
        Primary: [
          '全部',
          '语文',
          '数学',
          '英语',
          '其他',
          '小升初备战'
        ]
      }
    },
    methods: {
      show (arr) {
        this.list = arr
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  @import '../../../assets/css/font.css';
  a {
    color:#000;
    text-decoration: none;
  }
  .cateMiddle {
    position: fixed;
    left: 5.5625rem;
    /*height: 100%;*/
    width: 5.5625rem;
    background-color: #f8f8f9;
    opacity: .95;
    display: flex;
    text-align: center
  }
  .cateRight{
    width: 6rem;
    height: 52px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  li{
    display: normal;
    height: 2.96rem;
    line-height: 2.96rem;
  }
  .cate__item{
    display: block;
    width: 5.5625rem;
    text-align: center;
    font-size: 0.875rem;
    color: #000;
  }
  a:active,a:visited,a:hover{
    margin-top: 0;
    color: #188eee;
    width: 5.5625rem;
    background-color: #fff;
    border-bottom:1px solid #fff;
  }
  p {
    /*color: #188eee;*/
    margin: 0;
  }
</style>

