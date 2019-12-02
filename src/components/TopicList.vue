<template>
  <div class="topic-list-contain">
    <ul class="topic-list-header">
      <li v-for="(item,index) in headerArr" :key="index" @click="headerListClick(index)" :class="{active:item.isActive}">{{item.text}}</li>
    </ul>
    <div class="topic-list">
      <TopicListItem 
        v-for="(item,index) in topicsArr" 
        :key="index" 
        :title="item.title" 
        :avatarUrl="item.author.avatar_url"
        :visitCount="item.visit_count"
        :replyCount="item.reply_count"
        :tab="item.tab"
        :lastReplyTime="item.last_reply_at"
      />
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
        {text:'客户端测试',isActive:false}
        ],
      topicsArr:[]
    }
  },
  created(){
     this.$axios.get('https://cnodejs.org/api/v1/topics',{
      params:{
        limit:20
      }
    }).then(res=>{
      console.log(res)
      this.topicsArr = res.data.data
    }).catch(error =>{
      console.log(error)
    })
  },
  methods:{
    headerListClick(currentIndex){
      this.headerArr.forEach((item,index)=>{
        index === currentIndex ? item.isActive = true : item.isActive = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.topic-list-header{
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 10px 20px;
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
.topic-list-contain{
  margin-top: 20px;
  border-radius: 4px;
}
</style>