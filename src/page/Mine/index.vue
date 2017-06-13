<template>
  <div class="global">
    <div class="wrapper">
        <div class="me-mod">
          <h1 class="me-name">Only</h1>
          <div class="me-face" style="background-image: url(&quot;//q2.qlogo.cn/g?b=qq&amp;k=1QkflibppmQa3DsG3fHwVTQ&amp;s=140&amp;t=1483347220&quot;);"></div>
          <div class="me-interest-list" id="me-interest-list" style="font-size: 12px; display: block;"></div>
          <div class="me-interest-btn" style="display: block;">
            <span style="display:none;">学习兴趣</span>
            <span class="icon-plus">+</span>
          </div>
        </div>
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
            <li class="ui-item">
              <span class="icon-phone icon"></span>
              <a class="ui-item-mycontact" data-name="myContactInfo">
                 <span>联系方式</span>
              </a>
            </li>
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
    width: 100%;
    color: #fff;
    background: url(http://9.url.cn/edu/mobilev2/pages/mine/img/mine_bg.6ea4c2a.png) no-repeat;
    background-size: 100% auto;
}
</style>
