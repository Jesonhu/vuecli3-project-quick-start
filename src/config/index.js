//============================================
// 项目全局配置项.
//
// @update 2019/01/16
// @Jesonhu(github)
// @email jesonhu_web@163.com
//============================================

// 项目域相关 start =========================
/** 开发环境基础域 */
const devUrl = '';
/** 生产环境基础域 */
const proUrl = '';
let useUrl = '';

// why can use process.env.NODE_ENV === 'production'.
// please see https://cli.vuejs.org/zh/guide/mode-and-env.html#模式
if (process.env.NODE_ENV === 'production') {
  useUrl = devUrl;
} else {
  useUrl = proUrl;
}
// 项目域相关 end =========================

// axios配置 start =========================
const axios = {
  baseURL: useUrl,
  // 自定义的请求头
  headers: {
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    common: {
      'Accept': 'application/json, text/plain, */*'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  },
  timeout: 10000
}
// axios配置 end =========================

// 弹层功能相关 start =========================
/** 
 * 弹层持续时间配置:
 * @see `toast` 持续时间
 */
const duration = {
  SHORT: 1500,
  NORMAL: 3000,
  WARNING: 5000,
  LONG: 6000
}
// 弹层功能相关 end =========================

const config = {
  /** 弹层持续时间 */
  DURATION: duration,

  /** 基础域 */
  BASE_URL: useUrl,

  axios: axios
}

export default config;

