import Vue from 'vue';
import request from '@/utils/request';

const api = {
  /** 获取banner */
  getBanner(params = {id: 13}) {
    return request.get('/getBanner', params);
  },

  /** 店铺列表 */
  getShopList(params = {id: 0}) {
    return request.get('/shopList', params);
  },

  /** 店铺详情 */
  getShopDetail(params) {
    return request.get('/shopDetail', params);
  },

  getStaticShopDetail(params) {
    const url = `/menuid/${params.id}/shopStaticDetai.html`;
    return request.get(url);
  }
}

Vue.prototype.$http = api;

export default api;


