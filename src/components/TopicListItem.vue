<template>
  <div class="topic-list-item">
    <div class="topic-list-left">
      <img :src="this.avatarUrl" alt />
      <div class="count-contain">
        <span class="topic-reply-count">{{replyCount}}</span>
        <span class="topic-separator">/</span>
        <span class="topic-visit-count">{{visitCount}}</span>
      </div>
      <span class="topic-tab">{{tab | changeText}}</span>
      <span class="topic-title">{{title}}</span>
    </div>
    <div class="topic-list-right">
      {{lastReplyTime | formatTime}}
    </div>
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
    lastReplyTime:{
      type: String
    }
  },
  filters: {
    changeText(value) {
      let text = "";
      switch (value) {
        case "share":
          text = "分享";
          break;
        case "ask":
          text = "问答";
          break;
        case "job":
          text = "工作";
          break;
        case "good":
          text = "精华";
          break;
      }
      return text;
    },
    formatTime(value){
      let countTime = ''
      let currentTime = new Date().valueOf()
      let lastTime = new Date(value).valueOf()
      let y = new Date(currentTime - lastTime).getFullYear()
      let m = new Date(currentTime - lastTime).getMonth()
      let d = new Date(currentTime - lastTime).getDay()
      let H = new Date(currentTime - lastTime).getHours()
      let M = new Date(currentTime - lastTime).getMinutes()
      console.log(y,m,d)
      if(d <= 30){
        countTime = d+' 天前'
      }else if(m <= 12){
        countTime = m + '月前'
      }else if(y > 1970){
        countTime = y - 1970 + ' 年前'
      }
      console.log(countTime)
      return countTime
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
.topic-list-right{
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
}
.topic-title{
  color: #333;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
}
.count-contain{
  width: 70px;
}

</style>