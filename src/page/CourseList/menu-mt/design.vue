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
            <a href="javascript:;" class="cate__item" @click="show(planedesign)">平面设计</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(UIdesign)">UI设计</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(designSoft)">设计软件</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(playgames)">游戏动画设计</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(draw)">绘画设计</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(tele)">影视后期设计</a>
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
        planedesign: [
          '全部',
          '网页设计',
          '摄影后期',
          '广告海报',
          '综合平面设计'
        ],
        UIdesign: [
          '全部',
          '交互设计',
          '游戏UI设计',
          'Web UI设计',
          'APP UI 设计',
          '图标设计',
          '其他'
        ],
        designSoft: [
          '全部',
          'photoshop',
          'Indesign',
          'Axure',
          'CDR',
          'Illustrator',
          'Dreamweaver'
        ],
        playgames: [
          '全部',
          '游戏角色设计',
          '场景概念设计',
          '游戏模型设计',
          '游戏特效设计',
          '动画设计',
          '其他'
        ],
        draw: [
          '全部',
          '插画漫画',
          '国画油画',
          '水彩水粉画',
          '素描',
          '手绘其他'
        ],
        tele: [
          '全部',
          '影视特效',
          '后期合成',
          '后期剪辑',
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

