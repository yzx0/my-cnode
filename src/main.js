import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import './assets/iconfont/iconfont'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create()

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
