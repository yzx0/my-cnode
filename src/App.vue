<template>
  <div id="app">
    <TopNav />
    <main>
      <div class="list-contain">
        <Main/>
      </div>
      <aside>
        <Aside/>
      </aside>
    </main>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
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
main{
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
}
.list-contain{
  flex-grow: 1;
  margin-right: 20px;
}
aside{
  flex-shrink: 0;
  margin-top: 20px;
  width: 290px;
}
</style>
