<template>
  <div>
    <mt-swipe :auto="2000" :speed="1000">
      <mt-swipe-item>
          <a href="#">
            <img src="https://p99.pstatp.com/origin/aae9000630ff9fff9ae5">
          </a>
      </mt-swipe-item>
      <mt-swipe-item>
          <a href="#">
            <img src="https://p99.pstatp.com/origin/aae9000631fa9837a607">
          </a>
      </mt-swipe-item>
      <mt-swipe-item>
           <a href="#">
            <img src="https://p99.pstatp.com/origin/aae5001573323d6a32fe">
          </a>
      </mt-swipe-item>
      <mt-swipe-item>
           <a href="#">
            <img src="https://p9.pstatp.com/origin/aae80006db1d8b996bb6">
          </a>
      </mt-swipe-item>
   </mt-swipe>
   <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
              <router-link to='/shehui'>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
                       <div class='img1'>
                              <img src="../assets/shehui.jpg">
                       </div>
		                    <!-- <span class="mui-icon mui-icon-home"></span> -->
		                    <div class="mui-media-body">社会</div></a></li>
              </router-link>  
              <router-link to='/junshi'>  
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
		                    <div class='img1'>
                              <img src="../assets/junshi.jpg">
                        </div>
		                    <div class="mui-media-body">军事</div></a></li>
              </router-link>
              <router-link to='/yule'>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
		                    <div class='img1'>
                              <img src="../assets/yule.jpg">
                        </div>
		                    <div class="mui-media-body">娱乐</div></a></li>
              </router-link>
              <router-link to='/qiche'>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
		                    <div class='img1'>
                              <img src="../assets/qiche.jpg">
                        </div>
		                    <div class="mui-media-body">汽车</div></a></li>
              </router-link>
              <router-link to='/keji'>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
		                    <div class='img1'>
                              <img src="../assets/keji.jpg">
                        </div>
		                    <div class="mui-media-body">科技</div></a></li>
              </router-link>
              <router-link to='/nba'>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    
		                    <div class='img1'>
                              <img src="../assets/nba.jpg">
                        </div>
		                    <div class="mui-media-body">NBA</div></a></li>
              </router-link>
              <transition name='trans'>
                        <router-view></router-view>
              </transition>
		           <!--  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <div class='img1'>
                              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
                            </div>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <div class='img1'>
                              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
                            </div>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <div class='img1'>
                              <img src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
                            </div>
		                    <div class="mui-media-body">more</div></a></li> -->
		        </ul> 
		</div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
.mint-swipe{
  height: 200px;
}
.mint-swipe img{
  height: 260px;
}
.img1{
	height: 50px;
	width: 50px;
    margin-left: 20px;


}
.img1 img {
     height: 50px;
	 width: 50px;
	 border-radius:50%;

}
</style>
