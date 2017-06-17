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
            <a href="javascript:;" class="cate__item" @click="show1">考研</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show2">大学</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show3">高中</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show4">初中</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show5">小学</a>
          </li>
      </ul>
      <div class="cateRight">
        <ul class="cate-list" v-if="display1">
          <li class="cate" v-for="item in kaoyan">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display2">
          <li class="cate" v-for="item in college">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display3">
          <li class="cate" v-for="item in highschool">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display4">
          <li class="cate" v-for="item in Junior">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display5">
          <li class="cate" v-for="item in Primary">
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
        display1: false,
        display2: false,
        display3: false,
        display4: false,
        display5: false,
        display6: false,
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
      show1 () {
        this.display1 = !this.display1
        this.display2 = false
        this.display3 = false
        this.display4 = false
        this.display5 = false
        this.display6 = false
      },
      show2 () {
        this.display2 = !this.display2
        this.display1 = false
        this.display3 = false
        this.display4 = false
        this.display5 = false
        this.display6 = false
      },
      show3 () {
        this.display3 = !this.display3
        this.display1 = false
        this.display2 = false
        this.display4 = false
        this.display5 = false
        this.display6 = false
      },
      show4 () {
        this.display4 = !this.display4
        this.display1 = false
        this.display2 = false
        this.display3 = false
        this.display5 = false
        this.display6 = false
      },
      show5 () {
        this.display5 = !this.display5
        this.display1 = false
        this.display2 = false
        this.display3 = false
        this.display4 = false
        this.display6 = false
      },
      show6 () {
        this.display6 = !this.display6
        this.display1 = false
        this.display2 = false
        this.display3 = false
        this.display4 = false
        this.display5 = false
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

