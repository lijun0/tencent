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
            <a href="javascript:;" class="cate__item" @click="show1">公考求职</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show2">法学院</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show3">财会金融</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show4">医疗卫生</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show5">建造工程</a>
          </li>
          <li class="cate">
            <a href="javascript:;" class="cate__item" @click="show6">职业技能</a>
          </li>
      </ul>
      <div class="cateRight">
        <ul class="cate-list" v-if="display1">
          <li class="cate" v-for="item in work">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display2">
          <li class="cate" v-for="item in law">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display3">
          <li class="cate" v-for="item in financial">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display4">
          <li class="cate" v-for="item in Medical">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display5">
          <li class="cate" v-for="item in Construct">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
        <ul class="cate-list" v-if="display6">
          <li class="cate" v-for="item in skill">
            <router-link to="" class="cate__item">{{item}}</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.axios.get('https://www.easy-mock.com/mock/5943d53a8ac26d795f1c9a61/tencent/career')
        .then((response) => {
          this.work = response.data.work
          this.law = response.data.law
          this.financial = response.data.financial
          this.Medical = response.data.Medical
          this.Construct = response.data.Construct
          this.skill = response.data.skill
          // console.log(this.work)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    data () {
      return {
        selected: 1,
        display1: false,
        display2: false,
        display3: false,
        display4: false,
        display5: false,
        display6: false,
        work: [],
        law: [],
        financial: [],
        Medical: [],
        Construct: [],
        skill: []
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

