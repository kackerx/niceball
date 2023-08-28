<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import Notify from "@/components/Notify.vue";
import Article from "@/components/Article.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import xiangchong from "@/views/waifa/Xiangchong.vue";

const navs = [
  {
    path: 'women',
    name: '关于我们'
  },
  {
    path: 'dongtai',
    name: '公司动态'
  },
]

const navMap = {
  women: '关于我们',
  dongtai: '公司动态'
}

let currentNav = ref('women')

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
          <router-link :to="'/aboutme/'+currentNav">
            <li @click="handleClickNav(nav.path)" :class="{'active': isActive(nav.path)}" class="cursor-pointer text-sm text-[#666666] mb-4"
                v-for="(nav, i) in navs" :key="i">
              {{ nav.name }}
            </li>
          </router-link>
        </ul>
      </div>
      <div class="w-3/4">
        <span class="text-xs text-gray-400">当前位置: 首页>>&nbsp;&nbsp;{{
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