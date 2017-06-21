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
            <a href="javascript:;" class="cate__item" @click="show(English)">实用英语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(abroad)">出国留学</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(exam)">国内考试</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(Japanese)">日语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(Korean)">韩语</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(other)">小语种</a>
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

