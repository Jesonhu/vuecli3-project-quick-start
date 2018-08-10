import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import host from './config/host'

Vue.config.productionTip = false

// FastClcik 功能 start =========================
import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  });
}
// End =========================

// vue-awesome-swiper 使用 start =========================
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
// End =========================

// VeeValidate 使用 start =========================
// @version ^2.0.5
// @desc 提示语言设为中文
// @desc 增加手机电话号码验证'phone'
// @desc 增加车牌号验证'license'
// @see [官方文档](https://baianat.github.io/vee-validate/guide/#features)
import VeeValidate, {Validator} from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN';
VeeValidate.Validator.localize('zh_CN');
// 配置默认错误提示
const dictionary = {
  zh_CN: {
    messages: {
      required: () => '不能为空',
      email: () => '邮箱格式不正确'
    }
  }
}
// Validator.updateDictionary(dictionary);
VeeValidate.Validator.localize(dictionary);
// 自定义规则
Validator.extend('phoneNumber', {
  getMessage: () => '手机号码格式不正确',
  validate: value => {
		// return new Promise((resolve) => {
		// 	resolve(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value));
		// });
		return /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
	}
});
const License_reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}-[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1,2}$/u;
Validator.extend('license', {
  getMessage: () => '车牌号码格式不正确',
  validate: value => License_reg.test(value)
});
const card_reg = /^[1-9]{1}[0-9]{15}$/;
Validator.extend('card', {
  getMessage: () => '会员卡号格式不正确',
  validate: value => card_reg.test(value)
});

Vue.use(VeeValidate, {
  locale: 'zh_CN'
});

// End =========================

// axios 配置 start =========================
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = host.baseURL;
Vue.prototype.$http = axios;
// End =========================

// cube-ui 配置 start =========================
// @see [cube-ui配置](https://github.com/cube-ui/cube-template/wiki)
import './util/cube-ui'
import 'amfe-flexible'
// End =========================

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
