import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import store from './store/store.js'
import './assets/iconfont/iconfont'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create()

Vue.filter('formatTime',function(value){
  let time = new Date().getTime() - new Date(value).getTime();
  if (time / (1000 * 60) < 60) {
    time = parseInt(time / (1000 * 60), 10) + " 分钟前";
  } else if (time / (1000 * 60 * 60) < 24) {
    time = parseInt(time / (1000 * 60 * 60), 10) + " 小时前";
  } else if (time / (1000 * 60 * 60 * 24) < 30) {
    time = parseInt(time / (1000 * 60 * 60 * 24), 10) + " 天前";
  } else if (time / (1000 * 60 * 60 * 24 * 30) < 12) {
    time = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10) + " 月前";
  } else if (time / (1000 * 60 * 60 * 24 * 30 * 12) < 365) {
    time = parseInt(time / (1000 * 60 * 60 * 24 * 30 * 12), 10) + " 年前";
  }
  return time;
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
