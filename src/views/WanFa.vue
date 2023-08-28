<script setup lang="ts">

import NavBar            from "@/components/NavBar.vue";
import Notify            from "@/components/Notify.vue";
import Article           from "@/components/Article.vue";
import JiaoBallXianChang from "@/components/JiaoBallXianChang.vue";
import Footer            from "@/components/Footer.vue";
import { ref }           from "vue";


const navs = [
  {
    path: 'waihao',
    name: '生肖外號'
  },
  {
    path: 'mabiao',
    name: '生肖衝日碼表'
  },
  {
    path: 'pailie',
    name: '生肖號碼排列'
  },
  {
    path: 'xiangchong',
    name: '五行相冲'
  }
]

const navMap = {
  waihao: '生肖外號',
  shengxiao: '生肖衝日碼表',
  pailie: '生肖號碼排列',
  xiangchong: '五行相冲'
}

let currentNav = ref('waihao')

const isActive = (path: string) => {
  return path == currentNav.value
}

const handleClickNav = (cate: string) => {
  currentNav.value = cate
}


</script>

<template>
  <NavBar/>
  <main class="max-w-6xl mx-auto h-full">
    <Notify/>
    <section class="pt-4 pl-4 pb-20 pr-16 bg-white rounded-lg flex h-full mb-20">
      <div class="w-1/4">
        <span class="text-btnbg font-semibold">相关栏目</span>
        <ul class="mt-4 ml-4">
          <router-link :to="'/wanfajieshao/'+currentNav">
            <li @click="handleClickNav(nav.path)" :class="{'active': isActive(nav.path)}" class="cursor-pointer text-sm text-[#666666] mb-4"
                v-for="(nav, i) in navs" :key="i">
              {{ nav.name }}
            </li>
          </router-link>
        </ul>
      </div>
      <div class="w-3/4">
        <span class="text-xs text-gray-400">当前位置: 首页>>&nbsp;&nbsp;玩法介绍>>&nbsp;&nbsp;{{
            navMap[currentNav]
          }}</span>
        <hr class="my-4"/>
        <router-view/>
      </div>
    </section>
  </main>

  <Footer/>
</template>

<style scoped>
.active {
  color: #7563C6;
}
</style>