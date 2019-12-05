<template>
  <div class="topic-list-contain">
    <ul class="topic-list-header">
      <li
        v-for="(item,index) in headerArr"
        :key="index"
        @click="changeTab(index,item.text)"
        :class="{active:index === currentTabIndex}"
      >{{item.text}}</li>
    </ul>
    
    <SortPage @changePage="changePage" ref="sortPage"/>
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
import SortPage from './SortPage'
export default {
  components: {
    TopicListItem,
    SortPage
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
      currentTabIndex:0,
      currentPage:1,
      isGood :false
    };
  },
  created() {
    this.getData()
  },
  methods: {
    changePage(value){
      this.currentPage = value
      this.getData()
    },
    getData(){
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page:this.currentPage,
            tab: this.currentTab,
            limit: 20
          }
        })
        .then(res => {
          this.topicsArr = res.data.data
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatTab(){
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
    changeTab(index,tab) {
      this.currentTabIndex = index
      this.currentTab = tab
      this.currentPage = 1
      this.formatTab()
      this.getData()
      this.$refs.sortPage.changePage(1)
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