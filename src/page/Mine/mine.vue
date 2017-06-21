<template>
  <div class="global">
    <div class="wrapper">
      <router-link to="/resume">
        <div class="me-mod">
          <h1 class="me-name">前端求职中</h1>
          <div class="me-face" style="background-image: url(http://q2.qlogo.cn/g?b=qq&amp;k=1QkflibppmQa3DsG3fHwVTQ&amp;s=140&amp;t=1483347220);"></div>
          <div class="me-interest-list" id="me-interest-list" style="font-size: 12px; display: block;">
            <span class="me-interest" data-pos="0">移动开发</span>
            <span class="me-interest" data-pos="1">前端</span>
          </div>
          <div class="me-interest-btn" style="display: block;">
            <span style="display:none;">学习兴趣</span>
            <span class="icon-plus">+</span>
          </div>
        </div>
      </router-link>
        <div class="list-mod">
          <ul class="ui-list arrow-right ui-list--msg" style="display: none;">
            <li class="ui-item"> <span class="icon-msg icon"></span>
              <a class="ui-wave-border">
                <span>消息</span> <span class="ui-right red-point" style="display: none;"></span>
                <span class="ui-right red-envelope">红包</span>
              </a>
            </li>
          </ul>
          <ul class="ui-list arrow-right">
            <li class="ui-item ui-item--balance" style="display: block;">
              <span class="icon icon-balance"></span>
              <a data-name="myBalance">
                <span>我的余额</span>
                <span class="ui-right z-show">
                  <i class="icon-font i-kedian"></i>
                  <span class="ui-right-num">0</span>
                </span>
              </a>
            </li>
            <li class="ui-item">
              <span class="icon icon-manage"></span>
              <a data-name="allCourse">
                <span>订单管理</span>
                <span class="ui-right">
                  <span class="ui-right-num" q-text="orderTotal">4</span>
                <span class="ui-right-point correct-point red-point"></span>
                </span>
              </a>
            </li>
            <li class="ui-item">
              <span class="icon icon-collect"></span>
              <a data-name="myFav">
                 <span>收藏</span>
                 <span class="ui-right">0</span>
              </a>
            </li>
            <li class="ui-item">
              <span class="icon icon-coupon"></span>
              <a class="ui-wave-border"  data-name="myCoupon">
                 <span>优惠券</span>
                 <span class="ui-right">0</span>
              </a>
            </li>
          </ul>
          <ul class="ui-list arrow-right">
            <li class="ui-item" >
              <span class="icon icon-qqvip"></span>
              <a class="ui-item-qqvip" data-name="qqVIPList">
                 <span>QQ会员学习专区</span>
              </a>
            </li>
            <router-link to="/resume">
              <li class="ui-item">
                <span class="icon-phone icon"></span>
                <a class="ui-item-mycontact" data-name="myContactInfo">
                    <span>联系方式</span>
                </a>
              </li>
            </router-link>
            
            <li class="ui-item">
              <span class="icon-advice icon"></span>
              <a class="ui-item-feedback" data-name="feedback">
                 <span>意见反馈</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
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
<style scoped>
  .global{
    width: 100%;
  }
  .wrapper{
    width: 100%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
.me-mod {
    position: relative;
    box-sizing: border-box;
    padding-top: 60%;
    right: 0;
    width: 100%;
    color: #fff;
    background: url(http://9.url.cn/edu/mobilev2/pages/mine/img/mine_bg.6ea4c2a.png) no-repeat;
    background-size: 100% auto;
}
.me-name {
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    font-size: 16px;
    text-align: center;
    color: #188eee;
}
.me-face {
    overflow: hidden;
    position: absolute;
    bottom: -6%;
    left: 50%;
    border: 5px solid #dadada;
    border-radius: 50%;
    padding-top: 24%;
    width: 24%;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.me-interest-list {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #89c0eb;
}
.me-interest {
    display: inline-block;
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
    border: 1px solid #89c0eb;
    border-radius: 1.167em;
    padding: 0 .667em;
    max-width: 10em;
    height: 2.083em;
    font-size: 1em;
    line-height: 2.083em;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.me-interest-list [data-pos="0"] {
    top: 46%;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
}
.me-interest-list [data-pos="1"] {
    top: 28.44%;
    left: 62.13%;
}
.me-interest-btn {
    display: none;
    position: absolute;
    right: -17px;
    bottom: 12%;
    border: 1px solid #89c0eb;
    border-radius: 17px;
    padding: 0 16px;
    height: 34px;
    font-size: 14px;
    line-height: 34px;
    color: #89c0eb;
    background: #fff;
}
.me-interest-btn .icon-plus {
    display: inline-block;
    width: 20px;
    font-size: 18px;
    vertical-align: top;
}
.list-mod {
    margin-top: 20px;
}
.list-mod .ui-item {
    margin-left: 19px;
    line-height: 30px;
}
.ui-item {
    list-style-type: none;
    position: relative;
    margin-left: 12px;
    font-size: 17px;
    width: 100%;
    font-weight: 500;
    line-height: 20px;
    color: #000;
    text-align: left;
}
.icon-balance {
    background-position: 1px -182px;
}
.ui-item .icon-msg {
    background-position: 1px -105px;
}
.ui-item .icon-manage {
    background-position: 1px -79px;
}
.ui-item .icon-collect {
    background-position: 1px -26px;
}
.ui-item .icon-coupon {
    background-position: 1px -53px;
}
.ui-item .icon-qqvip {
    background-position: 1px -132px;
}
.ui-item .icon-phone {
    background-image: url(http://9.url.cn/edu/mobilev2/pages/mine/img/icon-phone.4c55a3d.png);
}
.ui-item .icon-advice {
    background-position: 1px -1px;
}
.ui-item .icon {
    position: absolute;
    top: 15px;
    left: 0;
    width: 26px;
    height: 26px;
    background: url(http://9.url.cn/edu/mobilev2/pages/mine/img/mine_icons.a8f4dff.png) no-repeat;
    background-size: 100% auto;
}
.ui-item .ui-wave-border {
    background: url(http://9.url.cn/edu/mobilev2/pages/mine/img/mine_border.4f93bf6.png) no-repeat;
    background-position: 0 100%;
    background-size: 100%;
}
.ui-item>a {
    display: block;
    position: relative;
    margin-left: 40px;
    padding: 11px 0 9px;
    color: #000;
}
.ui-item>a span {
    font-size: 16px;
    vertical-align: middle;
}
.ui-item--balance .ui-right.z-show {
    display: inline;
}
.list-mod .ui-right {
     color: #a6a6a6; 
}
.ui-item .ui-right {
    position: absolute;
    right: 45px;
    font-size: 14px;
    text-align: right;
}
.icon-font {
    position: relative;
    font-family: mfont;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    vertical-align: -2px;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    speak: none;
}
.i-kedian:before {
    content: "\f038";
}
.ui-item .ui-right-num {
    font-size: 14px;
}
.ui-item:after {
    position: absolute;
    top: 26px;
    right: 30px;
    margin-top: -5px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    width: 7px;
    height: 7px;
    color: #ccc;
    -webkit-transform: rotate(45deg);
    content: "";
}
</style>
