<template>
  <div>
      <hr>
      <h3>发表评论</h3>
      <textarea placeholder='请输入要评论的内容' v-model='text' maxlength='120'></textarea>
      <mt-button size="large" type="primary" @click='pickup'>提交</mt-button>
      <div v-for='item in list'>
         <div class='info'>发表内容:<p class='content'>{{item.txt}}</p>发布时间:<p class='time'>{{item.time | formatdate}}</p></div>
      </div>
       <mt-button size="large" type="primary" style='background-color:transparent;border:1px solid red;color:black'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
       data(){
          return {
            text:'',
            date:new Date(),
            list:[]
          }
       },
       methods:{
        pickup(){
          
           var arr={
             txt:this.text,
             time:this.date
           }
           this.list.unshift(arr)
           this.text=''
           this.date=new Date()
           console.log(this.list)
        }
    }   
}
</script>

<style scoped>
hr{
  margin-top: 5px;
  border: 1px solid rgba(0,7,17,0.2);
}
textarea{
  height: 100px;
}
.info{
  line-height: 40px;
  display:flex;
  justify-content:space-between;
  height: 40px;
  width: 100%;
  margin-bottom: 2px;
  background-color: rgba(0,7,17,0.2)
}
.info .content{
  color:skyblue;
}
.info .time{
  color: red;
}
</style>
