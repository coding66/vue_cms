<template>
  <div>
      <ul class="mui-table-view" v-for="(item,index) in newlist" :key='item.index'>
				<li class="mui-table-view-cell mui-media">
					<!-- 详情页面  to-->
          <!-- <router-link :to="'/detail/'+item.id"> -->
          <router-link to="/detail">
            <img class="mui-media-object mui-pull-left" :src='item.imageUrls'>

            <div class="mui-media-body">
              <!-- 这里使用flex经典布局 -->
              {{item.posterScreenName}}
              <p class='mui-ellipsis'><span>{{item.title}}</span></p>
              <p class='reporttime'><span>发布时间:{{item.publishDateStr | formatdate}}</span></p>
            </div>
          </router-link>
				</li>
	</ul>
  </div>
</template>

<script>
export default {
       data(){
          return {
            newlist:[],
           
          }
       },
       created(){
        var tempdata;
         this.$axios.get('/api/junshi').then(res=>{
          this.newlist=res.data;
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].imageUrls){
               var tempdata=res.data[i].imageUrls.slice(0,1).join()//将数组转字符串
               res.data[i].imageUrls=tempdata;
               this.newlist=res.data;
            }
          }
           console.log(this.newlist)
          
         })
       }
   
}
</script>

<style scoped >
.mui-ellipsis{
  display:flex;
  justify-content:space-between;
  font-size: 15px;
}
.reporttime{
  font-size: 10px;
  text-align: right;
  margin-top: 10px;
}

</style>
