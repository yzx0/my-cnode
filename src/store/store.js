import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(vuex)

export default new vuex.Store({
  state:{
    isLogin:false,
    userInfo:null
  },
  mutations:{
    markLogin(state,mark){
      state.isLogin = mark
    },
    saveUserInfo(state,userInfo){
      state.userInfo = userInfo
    }
  },
  plugins: [createPersistedState()]
})