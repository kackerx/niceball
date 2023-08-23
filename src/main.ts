import { createApp }   from 'vue'
import './style.css'
import App             from './App.vue'
import router          from "./router";
import { createPinia } from "pinia";

import 'vant/lib/index.css';
import { checkLogin }  from "./api/submit";
import { showDialog }  from "vant";

router.beforeEach((to, from, next) => {
    if (to.path.includes('admin')) {
        const token = localStorage.getItem('token')
        if (token === null) {
            next('/login')
            return
        }

        checkLogin(token).then(res => {
            next()
        }).catch(err => {
            showDialog({ message: '请先进行登录!' }).then(R => {
                next('/login')
            })
        })
    } else {
        next()
    }
})


const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
