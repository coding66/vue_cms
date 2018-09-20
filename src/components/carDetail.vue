<template>
  <div class='content'>
    <h3>汽车俱乐部</h3>
    <span>发表时间:{{list.publishDateStr | formatdate}}<p>点击1次</p></span>
    <hr>
    <ul  class='imgs' >
        <li class='box' v-for='item in list'> <img :src="item" preview="5" preview-text="描述文字" width='100px' height='100px'>
        </li>
    </ul>
    <div class='detail'>
        &nbsp&nbsp&nbsp&nbsp世界十大名车 [1]  包括劳斯莱斯(Rolls-Royce)、宾利(Bentley)、迈巴赫（maybach）、法拉利(Ferrari)、兰博基尼(Lamborghini)、迈凯轮（迈凯轮）、阿斯顿马丁(Aston Martin)、布加迪(Bugatti)BUGATTI、帕加尼(Pagani)pagani zonda、柯尼赛格(Koenigsegg)Koenigsegg。
    </div>
    <my-comment></my-comment>

  </div>

</template>

<script>
import comment from '../childcomponents/comments.vue'
export default {
       data(){
          return {
            list:[
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
     //     var arr;
     //     this.$axios.get('/api/detail').then(res=>{
     //   	 	   console.log(res)
     //        this.list=res.data[0];

     //   	 })
     //   },
     //   methods:{
      },
        components:{
       'my-comment':comment
     }
   }

</script>
<style scoped >
.content{
    margin-top: -30px;
}
.content h3{
  color:block;
  text-align: center;
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
.imgs{
  width: 100%;
  height: 350px;
  
  display: flex;
  padding: 10px 0 0 20px;
  flex-wrap:wrap;
}
.box{
  list-style: none;
  flex-direction:row;
  margin-left: 5px;
}
.detail{
  width: 100%;
  height: 150px;
  font-weight: 200;
  font-size: 16px;
  padding: 10px 0 0 10px;
  color: rgba(7,17,27,0.6);
}
</style>
