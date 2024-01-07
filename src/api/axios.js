import axios from 'axios'

export const AUTH_HTTP_URL = 'https://tp-prod.onrender.com/api/v1'

// axios config for server
const $http = axios.create({
  baseURL: AUTH_HTTP_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
})

export default $http
