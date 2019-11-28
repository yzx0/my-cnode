<template>
  <div id="app">
    <TopNav />
    <div class="width-contain">
      <TopicList />
    </div>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import TopicList from './components/TopicList'

export default {
  name: "app",
  components: {
    TopNav,
    TopicList
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
.width-contain{
  width: 1400px;
  margin: 0 auto;
}
</style>
