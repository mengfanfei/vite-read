import { BaseResponse } from '@/@type'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from './auth'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 10000
})

// request 拦截器
service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use((res) => {
  return res.data
})

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return service.request(config)
}

export default request