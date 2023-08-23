import { createApp } from 'vue'
import './style.css'
import App           from './App.vue'
import router        from "./router";
import { createPinia } from "pinia";

import 'vant/lib/index.css';

router.beforeEach((to, from, next) => {
    if (to.path.includes('admin')) {
        const token = localStorage.getItem('token')
        console.log(token)
        return
    }

    next()
})


const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
