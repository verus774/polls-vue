export default req => {
  const token = localStorage.getItem('access_token')
  if (token) {
    req.headers.common['Authorization'] = token
  }
  return req
}
