import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 10000
})

service.interceptors.request.use(config => {
  return config
})
export default service