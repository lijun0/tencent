<template>
  <div class="tabbar" v-model="selected">
    <router-link to="/" class="tabbar__item" id="tabbar__item1" @click.native="setIndex(1)">
      <i v-if="selected != 1" class="i-font i-home4" alt=""></i>
      <i v-if="selected === 1" class="i-home4 i-active" alt=""></i>
      <p v-if="selected != 1" class="icon">首页</p>
      <p v-if="selected === 1" class="icon__active">首页</p>
    </router-link>
    <router-link to="/Classification/ITList" class="tabbar__item" id="tabbar__item2" @click.native="setIndex(2)">
      <i v-if="selected != 2" class="i-font i-cate" alt=""></i>
      <i v-if="selected === 2" class="i-cate i-active" alt=""></i>
      <p v-if="selected != 2" class="icon">分类</p>
      <p v-if="selected === 2" class="icon__active">分类</p>
    </router-link>
    <router-link to="/Curriculum" class="tabbar__item" id="tabbar__item3" @click.native="setIndex(3)">
      <i v-if="selected != 3" class=" i-font i-plan3" alt=""></i>
      <i v-if="selected === 3" class="i-plan3 i-active" alt=""></i>
      <p v-if="selected != 3" class="icon">课程表</p>
      <p v-if="selected === 3" class="icon__active">课程表</p>
    </router-link>
    <router-link to="/Mine" class="tabbar__item" id="tabbar__item5" @click.native="setIndex(4)">
      <i v-if="selected != 4" class="i-font i-center3" alt=""></i>
      <i v-if="selected === 4" class="i-center3 i-active" alt=""></i>
      <p v-if="selected != 4" class="icon">我的</p>
      <p v-if="selected === 4" class="icon__active">我的</p>
    </router-link>
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
    // 状态传回父容器
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
  .tabbar {
    position: fixed;
    bottom: 0;
    height: 4rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    z-index:99;
  }
  .tabbar::before {
    content: '';
    position: fixed;
    height: 1px;
    width: 100%;
    background-color: #d2d2d2;
    /*transform: scaleY(.35);
    -webkit-transform: scaleY(.35)*/
  }
  .tabbar__item {
    text-align: center;
    flex: 1;
    /*width: 25%;*/
  }
  .tabbar__item i {
    margin: 0 auto;
    display: block;
    margin-top: .3rem;
    margin-bottom: .6rem;
    width: 1.5rem;
    height: 1.5rem;
    font-family: "mfont";
    font-size: 1.5rem;
    font-style: normal;
  }
  .i-font {
    line-height: 2.625rem;
    color: #777;
  }
  .i-active {
    /*margin-top: 5px;*/
    color: #188eee;
  }
  .i-home4:before {
    content: "\f028";
  }
  .i-cate:before {
    content: "\f029";
  }
  .i-plan3:before {
    content: "\f02a";
  }
  .i-center3:before {
    content: "\f02b";
  }
  .tabbar__item .icon {
    font-size: 0.8rem;
    color: #777;
  }
  .icon__active {
    margin-top: 0;
    color: #188eee;
  }
  .tabbar__item p {
    color: #188eee;
  }
</style>
