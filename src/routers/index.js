import Vue from 'vue'
import router from 'vue-router'
import TopicDetail from '../components/TopicDetail'
import TopicList from '../components/TopicList'
import Login from '../components/Login'
import UserPage from '../components/UserPage'
import Unlogin from '../components/Unlogin'
import About from '../components/About'
Vue.use(router)

export default new router({
  routes:[
    {
      name:'TopicList',
      path:'/',
      components:{
        main:TopicList,
        aside:Unlogin
      }
    },
    {
      name:'TopicDetail',
      path:'/topicDetail/:id',
      components:{
        main:TopicDetail
      }
    },
    {
      name:'Login',
      path:'/login',
      components:{
        main:Login,
        aside:About
      }
    },
    {
      name:'UserPage',
      path:'/userPage',
      components:{
        main:UserPage
      }
    }
  ]  
})