import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        requireUserInfo: true
      }
    },
    {
      path: '/user-complete',
      name: 'user_complete',
      component: () => import('@/views/user_complete/user_complete.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/test.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
