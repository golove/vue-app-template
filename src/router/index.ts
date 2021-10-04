
import { createRouter, createWebHashHistory } from "vue-router"

import Layout from "../layout/index.vue"
import Excel from '../pages/excel/index.vue'
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
      {
        path: '/excel',
        component: Excel,
        redirect: '/excel/export-excel',
        meta: {
          title: 'excel',
          icon: '#iconexcel'
        },
        children: [
          {
            path: 'export-excel',
            component: () => import(/* webpackChunkName: "export-excel" */ '../pages/excel/ExportExcel.vue'),
            name: 'ExportExcel',
            meta: { title: 'exportExcel' }
          },
          {
            path: 'export-selected-excel',
            component: () => import(/* webpackChunkName: "select-excel" */ '../pages/excel/SelectExcel.vue'),
            name: 'SelectExcel',
            meta: { title: 'selectExcel' }
          },
          {
            path: 'export-merge-header',
            component: () => import(/* webpackChunkName: "merge-header" */ '../pages/excel/MergeHeader.vue'),
            name: 'MergeHeader',
            meta: { title: 'mergeHeader' }
          },
          {
            path: 'upload-excel',
            component: () => import(/* webpackChunkName: "upload-excel" */ '../pages/excel/UploadExcel.vue'),
            name: 'UploadExcel',
            meta: { title: 'uploadExcel' }
          }
        ]
      },
      {
        path: "/person",
        name: 'person',
        component: () => import("../pages/personal/index.vue"),
        meta: { title: "person", icon: '', requireLogin: true }
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

