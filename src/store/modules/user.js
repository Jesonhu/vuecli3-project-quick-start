import cTools from '../../util/cTools';
/* 本地存储功能 */
const { localStorage } = cTools.Win;

/**
 * 用户相关状态管理.
 * 
 * @attr {Object} `localUserInfo`, 本地存储的key为 `USER_INFO` 的本地存储保存着用户的信息
 *                空对象说明没有用户信息。
 * @attr {string} `isLogin` 本地存储的key`IS_LOGIN` 保存着用户之前是否登录过
 *                字符串类型的布尔值。`0`没登录过，`1`登录过
 */
const state = {
  localUserInfo: localStorage.getLocal('USER_INFO') || {},
  isLogin: localStorage.getLocal('IS_LOGIN') || 0
}

// @see [Vuex 图解](https://vuex.vuejs.org/zh/)
// @see [Action](https://vuex.vuejs.org/zh/guide/actions.html)
const actions = {
  /**
   * 设置用户信息.
   * 
   * @param {object} {commit} 提交的消息
   * @param {object} `userInfo` 用户信息构成的对象
   */
  setUserInfo({commit}, userInfo) {
    localStorage.setLocal('USER_INFO', userInfo);
    localStorage.setLocal('IS_LOGIN', 1);
    commit('SET_USER', userInfo);
  },
  removeUserInfo({commit}) {
    localStorage.removeLocal('USER_INFO');
    localStorage.setLocal('IS_LOGIN', 0);
    commit('REMOVE_USER');
  }
}

const getters = {}

const mutations = {
  /**
   * 设置用户信息.
   * 
   * 设置`localUserInfo`的值，将登陆状态`isLogin`设置为`1`
   * 
   * @param {object} state 状态管理对象
   * @param {object} payload 用户信息的内容
   */
  SET_USER (state, payload) {
    state.localUserInfo = payload;
    state.isLogin = 1;
  },
  /**
   * 删除用户信息.
   * 
   * 删除`localUserInfo`的值，将登陆状态`isLogin`设置为`0`
   * 
   * @param {vuex} state 状态管理对象
   */
  REMOVE_USER (state) {
    state.localUserInfo = {};
    state.isLogin = 0;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
