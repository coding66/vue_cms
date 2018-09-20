<template>
  <div>
      <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						  全部
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						   商务车
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							轿车
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							越野车
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							跑车
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							SUV
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							MPV
						</a>
					</div>
				</div>

		</div>
        <ul class='photo-list'>
            <router-link to='/CarDetail'>
			  <li v-for="item in list">
			    <img v-lazy="item" >
			  </li>
			</router-link>  
        </ul>
  </div>
</template>

<script>
import mui from '../lib/js/mui.min.js'

export default {
      data(){

      	return {
             list: [
		          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537272845282&di=76f8aa5805fde37e73cdcbee3a107aa7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F59cc5e1359e0f.jpg%3Fdown',
		          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537272899179&di=da73d911d3f533d84ffc2c687d2bfd8e&imgtype=0&src=http%3A%2F%2Fold.bz55.com%2Fuploads%2Fallimg%2F150429%2F139-150429110916.jpg',
		          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537272916382&di=6187b9661ac244a9991ca25f1c6e227a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F570725dfc6eff.jpg',
		          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2942538702,927991971&fm=26&gp=0.jpg',
		          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537867667&di=d5ae92f501a602dfceb969c4a3ce80f3&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.deskier.com%2Fuploads%2Fallimg%2F161020%2F1-161020160922.jpg',
		          'http://img4.imgtn.bdimg.com/it/u=2833007937,660521713&fm=27&gp=0.jpg',
		          'http://img2.imgtn.bdimg.com/it/u=253546680,2484741182&fm=27&gp=0.jpg',
		          'http://pic1.win4000.com/wallpaper/8/58a27b82e56a5.jpg'

                  ]
      	}
      },
      created(){
      	this.getListarr();
      },
      mounted(){
      	mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      },
      methods:{
      	getListarr(){
      		this.$axios.get('/api/listarr').then(res=>{
      			console.log("hello");
      		})
      	}
      }
      
}
</script>

<style scoped >
*{ touch-action: none; }
.photo-list{
    padding: 10px 0 0 10px;
}
.photo-list li{
	list-style: none;
	margin-top: 10px;
  
    image[lazy=loading] {
    width: 40px;
    height: 40px;
    margin: auto;
	}	
}
.photo-list li img{
	width: 340px;
	height: 200px;
	border-radius: 10px;
	box-shadow: 3px 8px 5px gray ;

}
	
</style>
