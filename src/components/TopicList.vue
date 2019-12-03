<template>
  <div class="topic-list-contain">
    <ul class="topic-list-header">
      <li
        v-for="(item,index) in headerArr"
        :key="index"
        @click="headerListClick(index,item.text)"
        :class="{active:item.isActive}"
      >{{item.text}}</li>
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
        :isGood="item.good"
        :isTop="item.top"
      />
    </div>
  </div>
</template>
<script>
import TopicListItem from "./TopicListItem";
export default {
  components: {
    TopicListItem
  },
  data() {
    return {
      headerArr: [
        { text: "全部", isActive: true },
        { text: "精华", isActive: false },
        { text: "分享", isActive: false },
        { text: "回答", isActive: false },
        { text: "招聘", isActive: false },
        { text: "客户端测试", isActive: false }
      ],
      topicsArr: [],
      currentTab: 'all',
      isGood :false
    };
  },
  created() {
    this.$axios
      .get("https://cnodejs.org/api/v1/topics", {
        params: {
          tab: 'all',
          limit: 20
        }
      })
      .then(res => {
        this.topicsArr = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    formatTab(){
      if(this.isGood){
        this.currentTab
      }
      switch (this.currentTab) {
        case "回答":
          this.currentTab = "ask";
          break;
        case "分享":
          this.currentTab = "share";
          break;
        case "招聘":
          this.currentTab = "job";
          break;
        case "精华":
          this.currentTab = "good";
          break;
        default:
          this.currentTab = "all";
          break;
      }
    },
    headerListClick(currentIndex,tab) {
      this.currentTab = tab

      this.headerArr.forEach((item, index) => {
        index === currentIndex
          ? item.isActive = true
          : item.isActive = false;
      });

      this.formatTab()

      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            tab: this.currentTab,
            limit: 20
          }
        })
        .then(res => {
          this.topicsArr = []
          res.data.data.forEach(item => {
            this.topicsArr.push(item)
          }) 
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.topic-list-header {
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 10px 20px;
}
li {
  cursor: pointer;
  color: #80bd01;
  padding: 4px;
  margin-right: 10px;
  border-radius: 4px;
  font-size: 14px;
  &.active {
    background-color: #80bd01;
    color: #fff;
  }
}
.topic-list-contain {
  margin-top: 20px;
  border-radius: 4px;
}
</style>