import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
import api from './api';
Vue.prototype.$http = api;
// End =========================

// cube-ui 配置 start =========================
// @see [cube-ui配置](https://github.com/cube-ui/cube-template/wiki)
import './plugins/cube-ui'

// Tips: 不使用这种rem方案，可以不引入
// import 'amfe-flexible'
// End =========================

// vantui 
import './plugins/vant'

// vue-lazyload
import './plugins/vue-lazyload';

// 使用路由验证
import './permission';

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
