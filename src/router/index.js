import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/',
      redirect: 'dashboard',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          component: () => import('@/view/dashboard'),
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
        }
      ]
    }
  ]
})
