export default response => {
  const token = response.data.data.accessToken
  if (token) {
    localStorage.setItem('access_token', response.data.data.accessToken)
  }
  return response
}
