//============================================
// 前端路由验证.
//
// @update 2019/01/16
// @Jesonhu(github)
// @email jesonhu_web@163.com
//============================================

import router from './router';
import store from './store';

/** 验证失败处理的页面地址 */
const checkHandleUrl = '/vee-validate'
/**
 * 前端路由验证
 * @desc 1 需要router meta对象中添加验证字段
 *       2 router.beforeEach 注册一个全局前置守卫
 *       3 如果会员手机号码、车牌号码、会员卡号。没有完善，跳转到 `/register` 完善资料
 *       4 完善后跳转到上一个页面
 * @desc 参考文档：
 *       + [router.beforeEach](https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)
 */
router.beforeEach((to, from, next) => {
  console.log('路由验证');
  if (to.matched.some(record => record.meta.requireUserInfo)) { // 需要验证的路由
		if (store.state.user.isLogin) {
      next();
    } else {
      next({
				path: checkHandleUrl,
				query: { redirect: to.fullPath }
      });
    }
	} else {
		next();
	}
});