import axios from 'axios'
import { Message } from 'element-ui'

export function request (config) {
  const options = {
    baseURL: '//mall.xuanwonainiu.com',
    timeout: 5000
  }
  const instance = axios.create(options)

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    if (res.status !== 200) {
      Message.error('网络异常，请稍后')
      return;
    }
    if (res.data.status !== 1) {
      Message.error(res.data.msg)
    }
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
