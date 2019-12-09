<template>
  <div class="topic-list-item">
    <div class="topic-list-left">
      <img :src="item.author.avatar_url" alt />
      <div class="count-contain">
        <span class="topic-reply-count">{{item.reply_count}}</span>
        <span class="topic-separator">/</span>
        <span class="topic-visit-count">{{item.visit_count}}</span>
      </div>
      <span :class="[{active:isActive},'topic-tab']">{{thisTab}}</span>
      <router-link :to="{name:'TopicDetail',params:{id:item.id}}">
        <span class="topic-title">{{item.title}}</span>
      </router-link> 
    </div>
    <div class="topic-list-right">{{item.last_reply_at | formatTime}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item:Object
  },
  computed: {
    isActive(){
      return (this.item.good || this.item.top) ? true : false
    },
    thisTab() {
      let text = ''
      if(this.item.top){
        text = '置顶'
        return text
      }
      if (this.item.good) {
        text = '精华'
        return text;
      }
       switch (this.item.tab) {
        case "share":
          text = "分享";
          break;
        case "ask":
          text = "问答";
          break;
        case "job":
          text = "工作";
          break;
      }
      return text
    }
  }
};
</script>
<style lang="scss" scoped>
.topic-list-item {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #eee;
  }
}
.topic-list-left {
  display: flex;
  align-items: center;
}
.topic-list-right {
  font-size: 12px;
  color: #888;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-right: 6px;
}
.topic-separator {
  font-size: 12px;
  color: #bbb;
  margin-left: 2px;
  margin-right: 2px;
}
.topic-reply-count {
  font-size: 14px;
  color: #9e78c0;
}
.topic-visit-count {
  font-size: 12px;
  color: #aaa;
}
.topic-tab {
  flex-shrink: 0;
  color: #999;
  background-color: #e5e5e5;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
  margin-left: 4px;
  margin-right: 4px;
  &.active {
    background-color: #80bd01;
    color: #fff;
  }
}
.topic-title {
  color: #333;
  max-width: 1100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.count-contain {
  width: 70px;
}
</style>