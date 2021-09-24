import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pagemaking'
  },
  {
    path: '/pagemaking',
    name: 'PageMaking',
    component: () => import('@/views/pageMaking/pageMaking.vue'),
    meta: {
      title: '自定义页面',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
