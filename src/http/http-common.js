import axios from 'axios'
import requestInterceptor from '../interceptors/token-request-interceptor'
import responseInterceptor from '../interceptors/token-response-interceptor'

export const HTTP = axios.create({
  baseURL: 'https://polls2.herokuapp.com/api/v1/'
})

HTTP.interceptors.request.use(requestInterceptor)
HTTP.interceptors.response.use(responseInterceptor)
