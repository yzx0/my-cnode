<template>
  <div>
    <div class="panel">
      <div class="panel-title panel-title-link">
          <router-link to="/"> 主页</router-link>
          <span>/</span>
      </div>
      <div class="panel-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$axios.get('')
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/commonStyle.css');

</style>