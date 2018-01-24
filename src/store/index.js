import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '.././http/http-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token') || null
  },
  mutations: {
    setAccessToken (state, payload) {
      state.accessToken = payload
      localStorage.setItem('access_token', payload)
    },
    clearToken (state) {
      state.accessToken = null
      localStorage.removeItem('access_token')
    }
  },
  actions: {
    login ({commit}, payload) {
      return HTTP.post('login', {username: payload.username, password: payload.password})
        .catch(() => commit('logout'))
    },
    logout ({commit}) {
      commit('clearToken')
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.accessToken
    },
    accessToken (state) {
      return state.accessToken
    }
  }
})
