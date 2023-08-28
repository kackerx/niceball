<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getImg }                   from "@/utils/utils";
import JiaoBallXianChang            from "@/components/JiaoBallXianChang.vue";
import NavBar                       from "@/components/NavBar.vue";
import Notify                       from "@/components/Notify.vue";
import Footer                       from "@/components/Footer.vue";
import { getArticles }              from "@/api/submit";
import router                       from "@/router";

let years = ref('')

getArticles('8', 2023, '10', 1).then((data: any) => {
  years.value = data.year
})

const handleClickJiluNav = (year: string) => {
  router.push(`/jiaozhujilu/${ year }/1`)
}
</script>

<template>
  <NavBar/>
  <main class="max-w-6xl mx-auto">
    <Notify/>
    <section class="pt-4 pl-4 pb-4 pr-16 bg-white rounded-lg flex h-96">
      <div class="w-1/4">
        <span class="text-btnbg font-semibold">相关栏目</span>
        <ul class="mt-4 ml-4 space-y-2 text-text text-xs">
          <li class="cursor-pointer" v-for="(item, i) in years.split(',')" :key="i" @click="handleClickJiluNav(item)">
            {{ item }}搅珠记录
          </li>
        </ul>
      </div>
      <div class="w-3/4">
        <span class="text-xs text-gray-400">当前位置: 首页 >> 搅珠现场</span>
        <hr class="my-4"/>
        <JiaoBallXianChang/>
      </div>
    </section>
  </main>

  <Footer/>
</template>

<style scoped>
</style>