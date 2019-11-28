<template>
  <div>
    <ul class="topic-list-header">
      <li v-for="(item,index) in headerArr" :key="index" @click="handleClick(index)" :class="{active:item.isActive}">{{item.text}}</li>
    </ul>
    <div class="topic-list-contain">
      <TopicListItem v-for="(item,index) in topicsArr" :key="index" :title="item.title"/>
    </div>
  </div>
</template>
<script>
import TopicListItem from './TopicListItem'
export default {
  components:{
    TopicListItem
  },
  data(){
    return {
      headerArr:[
        {text:'全部',isActive:true},
        {text:'精华',isActive:false},
        {text:'分享',isActive:false},
        {text:'回答',isActive:false},
        {text:'招聘',isActive:false},
        {text:'客户端测试',isActive:false}],
      topicsArr:[]
    }
  },
  created(){
    this.$axios.get('https://cnodejs.org/api/v1/topics',{
      params:{
        limit:20
      }
    }).then(res=>{
      this.topicsArr = res.data.data
    }).catch(error =>{
      console.log(error)
    })
  },
  methods:{
    handleClick(index){
      this.headerArr[index].isActive = !this.headerArr[index].isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.topic-list-header{
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
}
li{
  cursor: pointer;
  color: #80bd01;
  padding: 4px;
  margin-right: 10px;
  border-radius: 4px;
  font-size: 14px;
  &.active{
    background-color: #80bd01;
    color: #fff
  }
}
</style>