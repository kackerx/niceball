import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbar', {
    state: () => ({
        navs: [
            { name: '首页', path: '/index', active: true },
            { name: '彩票介绍', path: '/caipiaojieshao', active: false },
            { name: '公司董事', path: '/gongsidongshi', active: false },
            { name: '奖金分配', path: '/jiangjinfenpei', active: false },
            { name: '搅珠记录', path: '/jiaozhujilu', active: false },
            { name: '搅珠现场', path: '/jiaozhuxianchang', active: false },
            { name: '资料图库', path: '/ziliaotuku', active: false },
            { name: '玩法介绍', path: '/wanfajieshao', active: false },
            { name: '关于我们', path: '/aboutme', active: false },
        ]
    }),
    actions: {
        setActive(path: any) {
            this.navs.forEach(nav => {
                nav.active = nav.path === path;
            });
        }
    }
});