<template>
  <div id="app">
    <TopNav />
    <div class="flex-contain">
      <Main class="main-contain"/>
      <Aside class="aside-contain"/>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import Aside from "@/components/Aside"
import Main from "@/components/Main"

export default {
  name: "app",
  components: {
    TopNav,
    Aside,
    Main
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
a{
  color: inherit;
  text-decoration: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body{
  background-color: #e1e1e1;
}
.flex-contain{
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
}
.main-contain{
  padding-top: 20px;
  flex-grow: 1;
  margin-right: 20px;
}
.aside-contain{
  flex-shrink: 0;
  margin-top: 20px;
  width: 290px;
}
</style>
