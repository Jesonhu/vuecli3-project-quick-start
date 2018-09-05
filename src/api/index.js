/**
 * Axios--Ajax请求控制[A0004]
 */
import host from '../config/host';
import Vue from 'vue';
import request from '@/config/request'

const api = {
  /** 获取banner */
  getBanner(params = {id: 13}) {
    return request.get('/getBanner', params);
  },

  /** 楼层分类 */
  getFloorType() {
    return request.get('/floor');
  },

  /** 店铺列表 */
  getShopList(params = {id: 0}) {
    return request.get('/shopList', params);
  },

  /** 店铺详情 */
  getShopDetail(params) {
    return request.get('/shopDetail', params);
  },

  /** 店铺搜索 */
  shopSearch(params) {
    return request.post('/search', params);
  }
}

Vue.prototype.$http = api;

export default api;


