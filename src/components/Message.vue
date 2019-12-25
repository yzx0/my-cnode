<template>
  <div>
    <div class="panel">
      <div class="panel-title">
        <router-link to="/">主页</router-link>
        <span>/</span>
        <span>新消息</span>
      </div>
      <div class="panel-content" v-if="notReadMsg.length !== 0">
        <div v-for="(item,index) in notReadMsg" :key="index"></div>
      </div>
      <div class="panel-content" v-else>
        无消息
      </div>
    </div>
    <div class="panel">
      <div class="panel-title">过往消息</div>
      <div class="panel-content" v-if="readMsg.length !== 0">
        <div v-for="(item,index) in readMsg" :key="index"></div>
      </div>
      <div class="panel-content" v-else>
        无消息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      readMsg:[],
      notReadMsg:[]
    }
  },
  created(){
    this.$axios
      .get('https://cnodejs.org/api/v1/messages',{params:{accesstoken:this.$store.state.accesstoken}})
      .then((result) => {
        console.log(result)
        this.readMsg = result.data.data.has_read_messages
        this.notReadMsg = result.data.data.hasnot_read_messages
      }).catch((err) => {
        console.log(err)
      });
  }
}
</script>

<style lang="scss" scoped>

</style>