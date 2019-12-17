<template>
  <div>    
    <router-view name="UserInfo" v-if="isLogin"></router-view>
    <router-view name="Unlogin" v-else></router-view>
    <router-view name="About"></router-view>
  </div>
</template>

<script>

export default {
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  }
}
</script>