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
            <a href="javascript:;" class="cate__item" @click="show(investment)">投资理财</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(music)">音乐乐器</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(art)">文艺修养</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(sports)">运动健康</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(life)">生活百科</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show(baby)">母婴亲子</a>
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
        investment: [
          '全部',
          '证券投资',
          '期权期货',
          '外汇衍生',
          '其他'
        ],
        music: [
          '全部',
          '音乐基础',
          '唱歌发声',
          '乐器演奏',
          '音乐制作',
          '其他'
        ],
        art: [
          '全部',
          '摄影',
          '书法',
          '棋牌',
          '益智休闲',
          '传统文化',
          '手工手艺'
        ],
        sports: [
          '全部',
          '体育休闲',
          '健身训练',
          '舞蹈健美',
          '武术格斗',
          '其他'
        ],
        life: [
          '全部',
          '婚恋交友',
          '家居家装',
          '时尚美妆',
          '美食烹饪',
          '养生保健',
          '动植育养'
        ],
        baby: [
          '全部',
          '科学孕产',
          '育儿护理',
          '亲子启蒙',
          '家庭教育',
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

