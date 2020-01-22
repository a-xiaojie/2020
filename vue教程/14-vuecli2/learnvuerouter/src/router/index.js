import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建Router对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/Home'),
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/',
      //   redirect: 'news',
      // },
      {
        path: 'news',
        component: () => import('../components/HomeNews')
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../components/About'),
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: () => import('../components/User'),
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: () => import('../components/Profile'),
    meta: {
      title: '档案'
    },
  }
]
const router = new Router({
  // 3.配置路由和组件之间的应用关系
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 从from跳转到to
  console.log(to)
  document.title = to.matched[0].meta.title
  next()
})

// 4.将router对象传入到Vue实例
export default router
