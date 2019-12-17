<template>
  <div class="unlogin">
    <p>CNode：Node.js专业中文社区</p>
    <router-link to="/Login">
      <button>登录</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .unlogin{
    background-color: #fff;
    padding: 10px 20px;
  }
  button{
    outline: none;
    border: none;
    background-color: #80bd01;
    color: #fff;
    font-size: 14px;
    padding: 6px 20px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  p{
    font-size: 14px;
    color: #666;
  }
</style>