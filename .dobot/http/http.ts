import { request } from './axios'

export const demoMethod1 = (data: any) => {
  return request({
    url: 'demoMethod1',
    data
  })
}

export const demoMethod2 = (data: any) => {
  return request({
    url: 'demoMethod2',
    data
  })
}

export const demoMethod3 = (data: any) => {
  return request({
    url: 'demoMethod3',
    data
  })
}
