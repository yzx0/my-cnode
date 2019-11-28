<template>
  <div class="top-nav">
    <div class="top-nav-inner">
      <div class="left">
        <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" class="nav-logo">
        <div class="search-input">
          <input type="text">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </div>
      </div>
      <div class="right">
        <ul>
          <li>首页</li>
          <li>新手入门</li>
          <li>API</li>
          <li>关于</li>
          <li>注册</li>
          <li>登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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