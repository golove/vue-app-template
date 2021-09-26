import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from './router'
import i18n from './locales'
import './element-variables.scss'


router.beforeEach((to, from, next) => {
    if (typeof (to.meta.title) == 'string') { // 路由发生变化修改页面title
        // document.title as string 
        document.title = to.meta.title
        if (to.name == 'user' && !store.state.user.username) next({ name: 'signin' })
        else next()
    } else next({ name: '404' })

})

const app = createApp(App)
app.use(i18n)
app.use(store, key)
app.use(router)
app.mount('#app')