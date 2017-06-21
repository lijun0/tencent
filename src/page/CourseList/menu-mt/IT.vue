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
            <a href="javascript:;" class="cate__item" @click="show(Interprod)">互联网产品</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(Intermark)">互联网营销</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(proglang)">编程语言</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(devlop)">前端开发</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(mobdev)">移动开发</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(netOper)">网络与运维</a>
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
  // import { mapMutations } from 'Vuex'
  export default {
    data () {
      return {
        selected: 1,
        list: [],
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

