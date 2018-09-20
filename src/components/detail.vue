<template>
  <div class='content'>
    <h3>{{list.title}}</h3>
    <span>发表时间:{{list.publishDateStr | formatdate}}<p>点击1次</p></span>
    <hr>
       <!-- <vue-preview class='preview' :slides="list" @close="handleClose"></vue-preview> -->
    <div v-for='item in list.imageUrls'>
       <img :src="item" style="width:95%;height:150px;border-radius:10px;margin-left:10px;">
       <div class='info' style="margin-left:40px;">&nbsp&nbsp&nbsp&nbsp2018年7月29日，马某飞一行数人约定前往南陵县弋江镇桃园滩游泳，期间马某飞溺亡。经公安机关调查及法医检验，马某飞系生前溺水身亡。死者家属对马某..。</div>
    </div>

    <my-comment></my-comment>

  </div>

</template>

<script>
import comment from '../childcomponents/comments.vue'
export default {
       data(){
          return {
            list:''
          }
       },
       created(){
         var arr;
         this.$axios.get('/api/detail').then(res=>{
       	 	   console.log(res)
         // var arr=res.data[0].imageUrls;
         // var that=this;
         // for(var i=0;i<arr.length;i++){
         //         that.list.push(
         //            {
         //              src:arr[i],
         //              msrc:arr[i],
         //              h:400,
         //              w:400
         //            }
         //         )
         // }
         // console.log(this.list)   
            this.list=res.data[0];

       	 })
       },
       methods:{
        
     },components:{
       'my-comment':comment
     }
   }

</script>
<style scoped >
.content{
    margin-top: -30px;
}
.content h3{
  color:red;
}
.content span{
    margin-top:20px; 
    display:flex;
    justify-content:space-between;
    color:skyblue;
}
.content span p{
    color:skyblue;
}
hr{
  margin-top: 2px;
  border: 1px solid rgba(0,7,17,0.1);
}
.info{
  margin:5px 20px 5px 0;
  color: rgba(0,7,17,0.5);
 

}
/*.preview{
  position:relative;
  left: -100px;

}*/


</style>
