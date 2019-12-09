<template>
  <div class="topic" v-if="topicData">
    <div class="topic-describe">
      <div class="topic-title">
        <div class="title-top">
          <span v-if="topicData.top" class="topic-tab">置顶</span>
          <span class="topic-title">{{topicData.title}}</span>
        </div>
        <div class="title-bottom">
          <span>发布于 {{topicData.create_at | formatTime}}</span>
          <span>作者 {{topicData.author.loginname}}</span>
          <span>{{topicData.visit_count}} 次浏览</span>
          <span>来自 {{topicData.tab | formatTab}}</span>
        </div>
      </div>
      <div class="topic-content" v-html="topicData.content" id="content"></div>
    </div>
    <div class="topic-comment panel">
      <div class="panel-title">{{topicData.reply_count}} 回复</div>
      <div class="panel-content">
        <div class="content-item" v-for="(item,index) in topicComment" :key="index">
          <div class="left">
            <img class="user-avatar" :src="item.author.avatar_url"/>
            <div class="user-and-comment">
              <div class="user-info">
                <router-link to="TopicList">{{item.author.loginname}}</router-link>
                <a :href="'#'+item.id" :id="item.id" class="inner-jump">  
                  <span>{{index + 1}}楼</span>
                  <span>{{item.create_at | formatTime}}</span>
                </a> 
                <span v-if="topicData.author.loginname === item.author.loginname" class="topic-tab">作者</span>
              </div>
              <div class="user-comment" v-html="item.content" id="content"></div>
            </div>
          </div>
          <div class="right" v-if="item.ups.length >0">
            <span title="喜欢" class="like-icon">👍</span>
            <span>{{item.ups.length}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topicData: null,
      topicComment:null
    };
  },
  created() {
    this.$axios
      .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(res => {
        this.topicData = res.data.data;
        this.topicComment = res.data.data.replies
        console.log(this.topicComment);
      })
      .catch(error => {
        console.log(error);
      });
  },
  filters: {
    formatTab(value) {
      let text = "";
      switch (value) {
        case "share":
          text = "分享";
          break;
        case "ask":
          text = "问答";
          break;
        case "job":
          text = "招聘";
          break;
        case "good":
          text = "精华";
          break;
      }
      return text;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('../assets/markdown-github.css');
@import url('../assets/commonStyle.css');

.topic-describe,.topic-comment{
  background-color: #fff;
  margin-top: 20px;
}
.inner-jump{
  color: #4183c4;
}
#content{
  font-size: 15px;
}
.topic-content{
  border-top: 1px solid #e5e5e5;
  padding: 10px 20px;  
  li{list-style: disc !important;}
}
.topic-tab {
  color: #fff;
  background-color: #80bd01;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
  margin-left: 4px;
  margin-right: 4px;
}
.topic-title{
  font-size: 20px;
  color: #333;
  font-weight: 600;
  padding: 10px;
}
.title-bottom{
  &>span{
    font-size: 12px;
    color: #aaa;
    font-weight: normal;
    &::before{
      content: '•';
      margin-left: 6px;
      margin-right: 4px;
    }
  }
}
.content-item{
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 20px 20px 30px 20px;
  border-bottom: 1px solid #e5e5e5;
  .left{
    display: flex;
  }
}
.user-avatar{
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
}
.user-info{
  font-size: 14px;
  margin-bottom: 10px;
  span{
    margin-right: 4px;
  }
  a{
    font-size: 12px;
    margin-right: 4px;
  }
  a:hover{
    color: #4183c4;
  }
}
.user-comment{
  text-indent: 1em;
}
.like-icon{
  cursor: pointer;
  margin-right: 4px;
}
</style>