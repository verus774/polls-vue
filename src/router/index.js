import Vue from 'vue'
import Router from 'vue-router'
import RoomList from '../components/room/RoomList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RoomList',
      component: RoomList
    }
  ]
})
