import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to,from,next) => {
        if(to.params.name){
          next()
        }else{
          next({name:"Welcome"})
        }

      }
    }
  ]
})
