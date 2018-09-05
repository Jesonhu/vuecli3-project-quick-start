import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import host from './config/host'

Vue.config.productionTip = false

// FastClcik 功能 start =========================
import './plugins/fastclick';
// End =========================

// vue-awesome-swiper 使用 start =========================
import './plugins/vue-awesome-swiper';
// End =========================

// VeeValidate 使用 start =========================
import './plugins/vee-validate';
// End =========================

// axios 配置 start =========================
import './api';
// End =========================

// cube-ui 配置 start =========================
// @see [cube-ui配置](https://github.com/cube-ui/cube-template/wiki)
import './plugins/cube-ui'
import 'amfe-flexible'
// End =========================

// vantui 
import './plugins/vant'

// vue-lazyload
import './plugins/vue-lazyload';

/**
 * 前端`路由验证`.
 * 
 * @see [全局导航守卫中检查元字段](https://router.vuejs.org/zh/guide/advanced/meta.html#路由元信息)
 */
// router.beforeEach((to, from, next) => {
//   // `meta.requireUserInfo` 路由定义的时候设置的自定义字段
//   // 需要验证的路由
//   if (to.matched.some(record => record.meta.requireUserInfo)) {
//     // 用户没有登录过
// 		if (!store.state.user.isLogin) {
//       // 定向到 `/user-complete`
//       next({
// 				path: '/user-complete',
// 				query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
// 	} else {
// 		next();
// 	}
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 另一种写法
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>',
// });
