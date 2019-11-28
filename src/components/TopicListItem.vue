<template>
  <div class="topic-list-item">
    <div class="left">
      <img src="" alt="">
      <span></span>
      <span></span>
      <span></span>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    }
  }
}
</script>