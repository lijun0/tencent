<template>
  <div class="header">
    <header class="header-search" id="header-search">
      <p class="header-logo">
        <i class="icon-font i-logo"></i>
      </p>
      <div class="header-search-btn" cmd="cancel">取消</div>
      <form  class="search__form">
        <div class="search__tips">
          <i class="icon-font i-search"></i>
          <span class="search__tips-word">搜索老师、机构、课程</span>
        </div>
        <input type="search" class="header__input" maxlength="40" autocomplete="off" autocorrect="off">
        <div class="header__reset-wrap" cmd="resetSearch">
          <!--<i class="header__reset icon-font i-close"></i>-->
        </div>
      </form>
    </header>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
@import '../../assets/css/font.css';
.header{
  /*height: 2.1875rem;*/
  background-color: #fff;
  position: fixed;
  top:0;
  width: 100%;
  z-index:99;
  display: flex;
}
.header-search{
  position: fixed;
  top:0;
  width: 100%;
  height: 2.1875rem;
  z-index:99;
  display: flex;
}
.header-logo{
  display: inline-block;
  position: absolute;
  width: 3.125rem;
  height: 2.8125rem;
  text-align: center;
}
.header-logo i{
  display:block;
  position:relative;
  top:14px;
  font-size:1.625rem;
  color:#00a4ff;
}
.icon-font{
  font-family: "mfont";
  font-size: 1.5rem;
  font-style: normal;
}
.i-logo::before {
  content:"\f001";
}
.i-search{
  color:#bbb;
  font-size: 1rem;
}
.i-search:before{
  content: "\f002";
}
.i-close:before {
  content: "\f003";
}
.header-search-btn {
    display: none;
    float: right;
    position: relative;
    margin: 0 5px 4px 8px;
    border-radius: 3px;
    height: 25px;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 2px;
    color: #188eee;
    background: #fff;
}
.header__reset-wrap {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px 9px;
    width: 16px;
    height: 16px;
    font-size: 0;
}
.search__form{
    display: inline-block;
    position: relative;
    margin: 1rem 1rem 0 3.125rem;
    border-radius: 2px;
    height: 1.5625rem;
    width: 100%;
    background: #f2f2f6;
}
.search__tips {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    color: #bbb;
}
.header__input{
    display: block;
    position: relative;
    border: 0;
    border-radius: 0;
    padding-right: 2.125rem;
    padding-left: 2px;
    width: 100%;
    height: 1.5625rem;
    font-size: 0.75rem;
    line-height: 1.5625rem;
    background: transparent;
    outline: 0;
    pointer-events: none;
}
</style>
