import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
Vue.use(Router)


export const routerMap = [
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
    },{
        path:'/test',
        component:Layout,
        redirect: '/test/index',
        meta:{title:'test',icon:'lock'},
        children:[
            {
                path:'index',
                component:()=>import('@/view/test'),
                name:'test',
                meta:{title:'test', icon: 'example', noCache: true }
            },{
                path:'example',
                component:()=>import('@/view/test/example'),
                name:'example',
                meta:{title:'example',icon:'404'}
            }
        ]
    }
]


export default new Router({
  routes: routerMap
})
