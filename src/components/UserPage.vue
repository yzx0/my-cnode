<template>
  <div>
    <div class="panel">
      <div class="panel-title panel-title-link">
        <router-link to="/">主页</router-link>
        <span>/</span>
      </div>
       <div class="panel-content" v-if="userInfo">
        <div class="userInfo">
          <img :src="userInfo.avatar_url" :title="userInfo.avatar_url" />
          <span>{{userInfo.loginname}}</span>
        </div>
        <p class="score">积分：{{userInfo.score}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:null,
      userCollect:null
    };
  },
  created() {
    this.$axios
      .get("https://cnodejs.org/api/v1/user/" + this.$store.state.userInfo.loginname)
      .then(result => {
        this.userInfo = result.data.data
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("https://cnodejs.org/api/v1/topic_collect/" + this.$store.state.userInfo.loginname)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/commonStyle.css");
.panel {
  margin-top: 20px;
}
.userInfo {
  display: flex;
  align-items: center;
  img {
    width: 40px;
    border-radius: 4px;
  }
  span {
    color: #666;
    font-size: 15px;
    padding-left: 10px;
  }
}
</style>