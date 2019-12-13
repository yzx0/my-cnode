<template>
  <div class="top-nav">
    <div class="top-nav-inner">
      <div class="left">
        <router-link to="/">
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" class="nav-logo">
        </router-link>
        <div class="search-input">
          <input type="text">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </div>
      </div>
      <div class="right">
        <ul >
          <li v-for="(item,index) in tab" :key="index">
            <router-link :to="item.path">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <button @click="xxx = 1">xxx</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      xxx:'xxx',
      tab:[
        {text:'首页',path:'/'},
        {text:'新手入门',path:''},
        {text:'API',path:''},
        {text:'关于',path:''},
        {text:'注册',path:'/userPage'},
        {text:'登录',path:'/login'}
      ]
    }
  },
  computed:{
    isLogin(){
      this.xxx
      this.$store.isLogin
      this.tab
      console.log(this.tab)
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-nav{
    background-color: #444;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top-nav-inner{
    width: 1400px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left{
    display: flex;
    align-items: center;
  }
  .nav-logo{
    width: 120px;
  }
  input{
    margin-left: 20px;
    border-radius: 20px;
    width: 230px;
    background: #888;
    outline: none;
    border: none;
    transition: all .3s;
    padding: 4px;
    padding-left: 25px;
    &:focus{
      background-color: #fff;
    }  
  }
  .search-input{
    position: relative;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 25px;
    font-size: 14px;
    transform: translateY(-50%);
  }
  ul{
    display: flex;
    align-items: center;
    li{
      cursor: pointer;
      color: #ccc;
      margin-left: 30px;
      font-size: 14px;
      &:hover{
        color: #eee;
      }
    }
  }
</style>