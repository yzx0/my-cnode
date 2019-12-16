<template>
  <div class="panel">
    <div class="panel-title">个人信息</div>
    <div class="panel-content">
      <div class="userInfo">
        <img :src="userInfo.avatar_url" alt="">
        <span>{{userInfo.loginname}}</span>
      </div>
      <p>积分：{{score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo:null
    }
  },
  created(){
    
    this.$axios.get('https://cnodejs.org/api/v1/user/'+this.$store.state.userInfo.loginname)
    .then((result) => {
      this.userInfo = result.data.data
      console.log(this.userInfo)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style lang="scss" scoped>
.userInfo{
  display: flex;
  align-items: center;
  img{
    width: 48px;
    border-radius: 4px;
  }
  span{
    color: #666;
    font-size: 15px;
    padding-left: 10px;
  }
}
</style>