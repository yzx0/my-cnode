<template>
  <div class="topic-list-item">
    <div class="topic-list-left">
      <img :src="this.avatarUrl" alt />
      <div class="count-contain">
        <span class="topic-reply-count">{{replyCount}}</span>
        <span class="topic-separator">/</span>
        <span class="topic-visit-count">{{visitCount}}</span>
      </div>
      <span :class="[{active:isActive},'topic-tab']">{{thisTab}}</span>
      <router-link :to="{name:'TopicDetail',params:{id}}">
        <span class="topic-title">{{title}}</span>
      </router-link> 
    </div>
    <div class="topic-list-right">{{lastReplyTime | formatTime}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    avatarUrl: {
      type: String
    },
    visitCount: {
      type: Number
    },
    replyCount: {
      type: Number
    },
    tab: {
      type: String
    },
    lastReplyTime: {
      type: String
    },
    isGood: {
      type: Boolean
    },
    isTop:{
      type: Boolean
    },
    id:{
      type:String
    }
  },
  computed: {
    isActive(){
      return (this.isGood || this.isTop) ? true : false
    },
    thisTab() {
      let text = ''
      if(this.isTop){
        text = '置顶'
        return text
      }
      if (this.isGood) {
        text = '精华'
        return text;
      }
       switch (this.tab) {
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
  &:last-child {
    border: none;
  }
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