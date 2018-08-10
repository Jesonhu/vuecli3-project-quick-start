import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  // @see [Vuex module](https://vuex.vuejs.org/zh/guide/modules.html)
  modules: {
    user
  }
});