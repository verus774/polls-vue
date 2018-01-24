import store from '../store'

export default response => {
  const token = response.data.data.accessToken
  if (token) {
    store.commit('setAccessToken', response.data.data.accessToken)
  }
  return response
}
