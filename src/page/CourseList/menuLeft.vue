<template>
  <div class="cateLeft" v-model="selected">
      <ul class="cate-list">
          <li class="cate">
            <router-link to="/menu-mt/IT" class="cate__item" id="cate__item1" @click.native="setIndex(1)">
            <p v-if="selected != 1" class="icon">全部</p>
            <p v-if="selected === 1" class="icon__active">全部</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/IT" class="cate__item" id="cate__item1" @click.native="setIndex(2)">
            <p v-if="selected != 2" class="icon">IT</p>
            <p v-if="selected === 2" class="icon__active">IT</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/design" class="cate__item" id="cate__item2" @click.native="setIndex(3)">
            <p v-if="selected != 3" class="icon">设计</p>
            <p v-if="selected === 3" class="icon__active">设计</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/language" class="cate__item" id="cate__item3" @click.native="setIndex(4)">
            <p v-if="selected != 4" class="icon">语言</p>
            <p v-if="selected === 4" class="icon__active">语言</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/career" class="cate__item" id="cate__item5" @click.native="setIndex(5)">
            <p v-if="selected != 5" class="icon">职业</p>
            <p v-if="selected === 5" class="icon__active">职业</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/cap" class="cate__item" id="cate__item2" @click.native="setIndex(6)">
            <p v-if="selected != 6" class="icon">升学</p>
            <p v-if="selected === 6" class="icon__active">升学</p>
            </router-link>
          </li>
          <li class="cate">
            <router-link to="/menu-mt/interest" class="cate__item" id="cate__item3" @click.native="setIndex(7)">
            <p v-if="selected != 7" class="icon">兴趣</p>
            <p v-if="selected === 7" class="icon__active">兴趣</p>
            </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 1
      }
    },
    methods: {
      setIndex (n) {
        this.selected = n
      }
    },
    watch: {
      selected: function (value) {
        // console.log(value)
        this.$emit('switchNav', value)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
  @import '../../assets/css/font.css';
  a {
    text-decoration: none;
  }
  .cateLeft {
    position: fixed;
    left: 0;
    /*height: 100%;*/
    width: 5.5625rem;
    background-color: #efeff4;
    opacity: .95;
    display: flex;
    text-align: center
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  li{
    display: normal;
    /*border-bottom:1px solid #C8C7CC;*/
    height: 2.96rem;
    line-height: 2.96rem;
  }
  .cate__item{
    color: #777;
    display: block;
    width: 5.5625rem;
    /*height: 100%;*/
    /*line-height: 3.75rem;*/
    text-align: center;
    font-size: 14px;
    text-align: center;
   }
   .cate:after {
    content: ' ';
    /*background: #C8C7CC;*/
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
}
  /*.cate::before {
    content: '';
    position: fixed;
    height: 1px;
    width: 100%;
    background-color: #d2d2d2;
    transform: scaleY(.35);
    -webkit-transform: scaleY(.35)
  }*/
  .cate__item .icon {
    font-size: 0.875rem;
    color: #000;
    width: 5.5625rem;
    display: block;
  }
  .icon__active {
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
