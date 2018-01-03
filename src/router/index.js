import Vue from 'vue'
import Router from 'vue-router'
import RoomList from '../components/room/RoomList'
import PollList from '../components/poll/PollList'
import Login from '../components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RoomList',
      component: RoomList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/polls',
      name: 'Polls',
      component: PollList
    }
  ]
})
