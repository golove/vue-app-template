
import { createRouter, createWebHashHistory } from "vue-router"

import Layout from "../layout/index.vue"

interface routeT {
  path: string,
  name: string,
  meta: { title: string }
}

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: Layout,
    meta: {
      breadcrumb: '首页',
      requireLogin: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import("../pages/home/index.vue"),
        meta: { title: "home", icon: '', requireLogin: true }
      },
      {
        path: "/about",
        name: 'about',
        component: () => import("../pages/about/index.vue"),
        meta: { title: "about", icon: '', requireLogin: true }
      },

    ]
  },
  {
    path: "/signin",
    name: 'signin',
    component: () => import("../pages/signin/index.vue"),
    meta: { title: "signin", icon: '' }
  },
  {
    path: "/register",
    name: 'register',
    component: () => import("../pages/register/index.vue"),
    meta: { title: "register", icon: '' }
  },
  {
    path: "/user",
    name: 'user',
    component: () => import("../pages/user/index.vue"),
    meta: { title: "user", icon: '' }
  },
  {
    path: "/404",
    name: '404',
    component: () => import("../pages/404page/index.vue"),
    meta: { title: "404", icon: '' }
  },
]


export default createRouter({
  history: createWebHashHistory(),
  routes,
})

