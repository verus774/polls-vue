export default response => {
  const token = response.data.data.token
  if (token) {
    localStorage.setItem('access_token', response.data.data.token)
  }
  return response
}
