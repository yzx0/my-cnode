<template>
  <div class="panel" :style="style">
    <div class="panel-title">个人信息</div>
    <div class="panel-content" v-if="userInfo">
      <router-link to="/userPage">
        <div class="userInfo">
          <img :src="userInfo.avatar_url" alt="">
          <span>{{userInfo.loginname}}</span>
        </div>
      </router-link>
      <p class="score">积分：{{userInfo.score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    bottomDistance:Number
  },
  data(){
    return {
      userInfo:null,
      style:{
        'margin-bottom':this.bottom + 'px'
      }
    }
  },
  computed:{
    bottom(){
      return this.bottomDistance
    }
  },
  created(){
    this.$axios.get('https://cnodejs.org/api/v1/user/'+this.$store.state.userInfo.loginname)
    .then((result) => {
      this.userInfo = result.data.data
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
.score{
  margin-top: 15px;
}
</style>