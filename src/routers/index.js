import Vue from 'vue'
import router from 'vue-router'
import TopicDetail from '@/components/TopicDetail'
import TopicList from '@/components/TopicList'
import Login from '@/components/Login'
import UserPage from '@/components/UserPage'
import About from '@/components/About'
import Unlogin from '@/components/Unlogin'
import UserInfo from '@/components/UserInfo'
Vue.use(router)

export default new router({
  routes:[
    {
      name:'TopicList',
      path:'/',
      components:{
        TopicList,
        Unlogin,
        UserInfo
      }
    },
    {
      name:'TopicDetail',
      path:'/topicDetail/:id',
      components:{
        TopicDetail
      }
    },
    {
      name:'Login',
      path:'/login',
      components:{
        Login,
        About
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