import axios from 'axios';
import host from './host';
import { Toast } from 'cube-ui';
import { toast } from './index';
import qs from 'qs';

const service = axios.create({
  // baseURL: host.baseUrl,
  baseURL: 'https://www.baidu.com/api',
  timeout: 10000
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.method === 'post') config.data = qs.stringify(config.data);
    return config;
  },
  error => Promise.reject(error)
);

// response interceptor
service.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

// @see [命名规范参考](https://github.com/easy-mock/easy-mock/blob/dev/views/api/index.js)
// 封装了两种方式的请求 `get` `post`
// also can named createAPI
const request = {
  // Notice: post 应该使用
  // data: data
  // params: data 会将参数添加到url中
  post(url, data) {
    return service({
      method: 'post',
      url,
      data: data
    });
  },

  get(url, data) {
    return service({
      method: 'get',
      url,
      params: data
    })
  }
}


export default request;

