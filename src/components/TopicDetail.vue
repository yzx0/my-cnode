<template>
  <div class="topic">
    <div class="topic-title">
      <div class="title-top">
        <span v-if="topicData.top">置顶</span>
        <span>{{topicData.title}}</span>
      </div>
      <div class="title-bottom">
        <span>发布于{{topicData.create_at | formatTime}}</span>
        <span>作者 {{topicData.author.loginname}}</span>
        <span>{{topicData.visit_count}}次浏览</span>
        <span>来自{{topicData.tab | formatTab}}</span>
      </div>
    </div>
    <div class="topic-content" v-html="content"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  data() {
    return {
      topicData: null,
      content:null
    };
  },
  mounted() {
    this.$axios
      .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(res => {
        this.topicData = res.data.data;
        this.content = marked(this.topicData.content)
        console.log(this.topicData);
      })
      .catch(error => {
        console.log(error);
      });
  },
  filters: {
    formatTime(value) {
      let time = new Date().getTime() - new Date(value).getTime();
      if (time / (1000 * 60) < 60) {
        time = parseInt(time / (1000 * 60), 10) + " 分钟前";
      } else if (time / (1000 * 60 * 60) < 24) {
        time = parseInt(time / (1000 * 60 * 60), 10) + " 小时前";
      } else if (time / (1000 * 60 * 60 * 24) < 30) {
        time = parseInt(time / (1000 * 60 * 60 * 24), 10) + " 天前";
      } else if (time / (1000 * 60 * 60 * 24 * 30) < 12) {
        time = parseInt(time / (1000 * 60 * 60 * 30), 10) + " 月前";
      } else if (time / (1000 * 60 * 60 * 24 * 30 * 12) < 365) {
        time = parseInt(time / (1000 * 60 * 60 * 30 * 12), 10) + " 年前";
      }
      return time;
    },
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
.topic {
  background-color: #fff;
}
</style>