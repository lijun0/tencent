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
            <a href="javascript:;" class="cate__item" @click="show1">互联网产品</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show2">互联网营销</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show3">编程语言</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show4">前端开发</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show5">移动开发</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show6">网络与运维</a>
          </li>
      </ul>
      <div class="cateRight">
        <ul class="cate-list" v-if="display1">
          <li class="cate" v-for="item in Interprod">
            <router-link to=""  class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display2">
          <li class="cate" v-for="item in Intermark">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display3">
          <li class="cate" v-for="item in proglang">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display4">
          <li class="cate" v-for="item in devlop">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display5">
          <li class="cate" v-for="item in mobdev">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display6">
          <li class="cate" v-for="item in netOper">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  // import { mapMutations } from 'Vuex'
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
        Interprod: [
          '全部',
          '产品策划',
          '游戏策划',
          '产品运营',
          '游戏运营'
        ],
        Intermark: [
          '全部',
          '网络营销理论',
          '淘宝营销',
          '微信营销',
          'SEO',
          '新媒体营销',
          'SEM'
        ],
        proglang: [
          '全部',
          'C',
          'C++',
          'Java',
          'PHP',
          'C#/.Net',
          'Python'
        ],
        devlop: [
          '全部',
          'HTML/CSS',
          'JavaScript',
          'jquery',
          'Web全栈开发',
          '其他'
        ],
        mobdev: [
          '全部',
          'Android开发',
          'IOS开发',
          '微信开发',
          '跨平台APP'
        ],
        netOper: [
          '全部',
          'Linux运维',
          'Python自动化',
          'DevOps',
          '信息安全',
          '其他'
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

