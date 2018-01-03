import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://polls2.herokuapp.com/api/v1/'
})
