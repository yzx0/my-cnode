import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create()

new Vue({
  render: h => h(App),
}).$mount('#app')
