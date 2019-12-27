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
        <router-link to="/collect">
          <p v-if="userCollect" class="color-gray">{{userCollect.length}}个话题收藏</p>
        </router-link>
        <p class="color-gray">github: <a :href="githubLink" target="_blank">@{{userInfo.githubUsername}}</a></p>
        <p class="color-gray">注册时间 {{userInfo.create_at | formatTime}}</p>
      </div>
    </div>
    <div class="panel">
      <div class="panel-title">最近创建的话题</div>
      <div class="panel-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:null,
      userCollect:null,
      githubLink:null
    };
  },
  created() {
    this.$axios
      .get("https://cnodejs.org/api/v1/user/" + this.$store.state.userInfo.loginname)
      .then(result => {
        this.userInfo = result.data.data
        this.githubLink = 'https://github.com/'+this.userInfo.githubUsername
      })
      .catch(err => {
        console.log(err);
      });
    this.$axios
      .get("https://cnodejs.org/api/v1/topic_collect/" + this.$store.state.userInfo.loginname)
      .then(res => {
        console.log(res)
        this.userCollect = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/commonStyle.css");

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
.panel-content{
  p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.color-gray{
  color: gray;
}
</style>