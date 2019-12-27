<template>
  <div>
    <div class="panel">
      <div class="panel-title">
        <router-link to="/" class="color-green">主页</router-link>
        <span>/</span>
        <span>{{$store.state.userInfo.loginname}} 收藏的话题</span>
      </div>
      <div class="panel-content">
        <TopicListItem  v-for="(item,index) in collectData" :key="index" :item="item"/>
      </div>
      <SortPage :initLength="pageLength" :total="pageLength"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import url("../assets/commonStyle.css");

</style>

<script>
import TopicListItem from '@/components/TopicListItem'
import SortPage from '@/components/SortPage'

export default {
  data(){
    return {
      collectData:[]
    }
  },
  created(){
    this.$axios.get('https://cnodejs.org/api/v1/topic_collect/'+this.$store.state.userInfo.loginname)
      .then((result) => {
        this.collectData = result.data.data
        console.log(this.collectData)
      }).catch((err) => {
        console.log(err)
      });
  },
  computed:{
    pageLength(){
      return this.collectData.length === 0 ? 1 : this.collectData.length
    }
  },
  components:{
    TopicListItem,
    SortPage
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/commonStyle.css';
  .panel-title{
    >:nth-child(2){
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>
