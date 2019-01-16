import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        requireUserInfo: true
      }
    },
    {
      path: '/user-complete',
      name: 'UserComplete',
      component: () => import('@/views/user-complete/index.vue')
    },
    {
      path: '/vee-validate',
      name: 'VeeValidate',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/vee-validate/index.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
