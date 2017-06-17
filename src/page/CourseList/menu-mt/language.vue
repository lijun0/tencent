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
            <a href="javascript:;" class="cate__item" @click="show1">实用英语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show2">出国留学</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show3">国内考试</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show4">日语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show5">韩语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show6">小语种</a>
          </li>
      </ul>
      <div class="cateRight">
        <ul class="cate-list" v-if="display1">
          <li class="cate" v-for="item in English">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display2">
          <li class="cate" v-for="item in abroad">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display3">
          <li class="cate" v-for="item in exam">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display4">
          <li class="cate" v-for="item in Japanese">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display5">
          <li class="cate" v-for="item in Korean">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display6">
          <li class="cate" v-for="item in other">
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
        English: [
          '全部',
          '英语口语',
          '学术英语',
          '新概念英语',
          '词汇语法',
          '职场英语'
        ],
        abroad: [
          '全部',
          '雅思',
          '托福',
          'K12留学',
          '研究生留学',
          '留学指导'
        ],
        exam: [
          '全部',
          '英语四六级',
          '其他英语应试'
        ],
        Japanese: [
          '全部',
          '日语零基础',
          '日语初级',
          '日语中高级',
          '兴趣日语',
          '日语考试',
          '日本留学'
        ],
        Korean: [
          '全部',
          '韩语零基础',
          '韩语初级',
          '旅游韩语',
          '韩流文化',
          'TOPIK考试'
        ],
        other: [
          '全部',
          '法语',
          '德语',
          '西班牙语',
          '葡萄牙语',
          '方言',
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

