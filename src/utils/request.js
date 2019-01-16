//============================================
// axios 请求方式封装(Get Post).
//
// @update 2019/01/16
// @Jesonhu(github)
// @email jesonhu_web@163.com
//============================================

import axios from 'axios';
// Tips: 由于使用了默认导出，这里改了名字
import CONFIG from '../config';
import qs from 'qs';

const config = CONFIG.axios;
const service = axios.create(config);

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
  // Notice: 
  // post 应该使用 data: data
  // get  使用 params: data 会将参数添加到url中
  post(url, data) {
    return service({
      method: 'post',
      data: data,
      url
    });
  },

  get(url, data = {}) {
    return service({
      method: 'get',
      params: data,
      url
    })
  },
}


export default request;

