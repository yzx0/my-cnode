<template>
  <div class="panel">
    <div class="panel-title">
      <router-link to="/"> 主页</router-link>
      <span>/</span>
      <span>登录</span>
    </div>
    <div class="panel-content">
      <label>accessToken:<input placeholder="请输入accessToken..." v-model="accesstoken"></label>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      accesstoken:null
    }
  },
  methods:{
    login(){
      this.$axios.post('https://cnodejs.org/api/v1/accesstoken',{
        accesstoken:this.accesstoken
      })
      .then(res => {
        console.log(res)
        this.$stroe.comit('markLogin',true)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .panel{
    margin-top: 20px;
  }
  .panel-title{
    &>:nth-child(1){
      color: #80bd01;
    }
    &>:nth-child(2){
      color: #aaa;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
  .panel-content{
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fff;
    text-align: center;
  }
  input{
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 10px;
    transition: all .3s;
    width: 300px;
    &:focus{
      outline: none;
      border-color: #80bd01;
    }
  }
  button{
    cursor: pointer;
    margin: 0 auto;
    display: block;
    padding: 10px 30px;
    background-color: #80bd01;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
    &:active{background-color: #76ad00;}
  }
</style>