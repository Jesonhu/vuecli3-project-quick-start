import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

// @see [github](https://github.com/hilongjw/vue-lazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './img/404.jpg',
  loading: './img/loading.gif',
  attempt: 1
});