import axios from 'axios'
import responseInterceptor from '../interceptors/token-response-interceptor'

export const HTTP = axios.create({
  baseURL: 'https://polls2.herokuapp.com/auth/'
})

HTTP.interceptors.response.use(responseInterceptor)
