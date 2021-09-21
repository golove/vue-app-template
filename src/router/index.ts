// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHashHistory } from "vue-router"

import Layout from "../App.vue"
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
      {
        path:'/',
        name:'home',
        component: () => import("../pages/home/index.vue"),
      },
      {
        path: "/about",
        name: 'about',
        component: () => import("../pages/about/index.vue"),
        meta: { title: "about", icon: '' }
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
   

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

