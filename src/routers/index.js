import Vue from 'vue'
import router from 'vue-router'
import TopicDetail from '../components/TopicDetail'
import TopicList from '../components/TopicList';
Vue.use(router)

export default new router({
  routes:[
    {
      name:'TopicList',
      path:'/',
      components:{
        main:TopicList
      }
    },
    {
      name:'TopicDetail',
      path:'/TopicDetail/:id',
      components:{
        main:TopicDetail
      }
    }
  ]
  
})