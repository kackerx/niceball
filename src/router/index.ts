import { createRouter, createWebHistory } from "vue-router";
import Home                               from "../views/home/Home.vue";
import Article                            from "../views/article/Article.vue";
import About                              from "../views/about/About.vue";
import Xianchang                          from "../views/Xianchang.vue";
import Dongshi                            from "../views/Dongshi.vue";
import Jilu                               from "../views/Jilu.vue";
import Tuku                               from "../views/Tuku.vue";
import Admin                              from "../views/admin/Admin.vue";
import Category                           from "../views/admin/Category.vue";
import KaiJiang                           from "../views/admin/KaiJiang.vue";
import TukuShangChuan                     from "../views/admin/TukuShangChuan.vue";
import JiaozhuJillu                       from "../views/admin/JiaozhuJillu.vue";
import Caipiao                            from "../views/Caipiao.vue";
import FenPei                             from "../views/FenPei.vue";
import WanFa                              from "../views/WanFa.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Home,
        },
        {
            path: '/caipiaojieshao',
            name: 'caipiaojieshao',
            component: Caipiao,
        },
        {
            path: '/gongsidongshi',
            name: 'gongsidongshi',
            component: Dongshi,
        },
        {
            path: '/jiangjinfenpei',
            name: 'jiangjinfenpei',
            component: FenPei,
        },
        {
            path: '/jiaozhujilu/:year?/:pn?',
            name: 'jiaozhujilu',
            component: Jilu,
            props: (route) => {
                pn: route.params.pn || 1
                year: route.params.year || new Date().getFullYear().toString()
            }
        },
        {
            path: '/jiaozhuxianchang',
            name: 'jiaozhuxianchang',
            component: Xianchang,
        },
        {
            path: '/ziliaotuku',
            name: 'ziliaotuku',
            component: Tuku,
        },
        {
            path: '/wanfajieshao',
            name: 'wanfajieshao',
            component: WanFa,
        },
        {
            path: '/aboutme',
            name: 'aboutme',
            component: About,
        },
        {
            path: '/admin2023beire',
            name: 'admin',
            component: Admin,
            redirect: '/admin2023beire/kaijiang',
            children: [
                {
                    path: 'category',
                    name: 'category',
                    component: Category
                },
                {
                    path: 'kaijiang',
                    name: 'kaijiang',
                    component: KaiJiang
                },
                {
                    path: 'jilu',
                    name: 'jilu',
                    component: JiaozhuJillu
                },
                {
                    path: 'tukushangchuan',
                    name: 'tukushangchuan',
                    component: TukuShangChuan
                }
            ]
        }
    ]
})