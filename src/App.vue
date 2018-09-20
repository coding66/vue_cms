<template>
  <div id='app' class='content'>
    <mt-header fixed title="图文信息"></mt-header>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to='/home'>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/vip'>
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/carshop'>
        <span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to='/serach'>
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <transition name='trans'>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.mint-header{
  z-index: 99;
}
.trans-enter,
{
  opacity: 0;
  transform:translateX(100%);
 
}
.trans-leave-to{

  transform:translateX(-100%);
 /* 这等于。trans-enter向右平移两倍*/
   position: absolute;
}
.trans-enter-active,
.trans-leave-active
{
   transition:all 0.2s ease;
}
.content{
  padding-top:40px;
  padding-bottom: 48px;
  overflow-x:hidden; 
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
} 
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1.mui-active[data-v-7ba5bd90] {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
