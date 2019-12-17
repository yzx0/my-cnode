<template>
  <div class="panel">
    <div class="panel-title">关于</div>
    <div class="panel-content">
      <p>CNode：Node.js专业中文社区</p>
      <p>在这里你可以：</p>
      <ul>
        <li>向别人提出你遇到的问题</li>
        <li>帮助遇到问题的人</li>
        <li>分享自己的知识</li>
        <li>和其它人一起进步</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .panel-content{
    &>:nth-child(1),&>:nth-child(2){margin-top: 10px;margin-bottom: 10px;}
  }
  ul{
    text-indent: 1em;
    li{list-style: disc;list-style-position:inside;line-height: 2em;}
  }
</style>