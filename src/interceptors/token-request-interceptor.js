import store from '../store'

export default req => {
  const token = store.getters.accessToken
  if (token) {
    req.headers.common['Authorization'] = token
  }
  return req
}
