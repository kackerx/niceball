<script setup lang="ts">

import Layout                                 from "@/components/Layout.vue";
import { reactive, ref, watch } from "vue";
import { getImg }                             from "@/utils/utils";
import { useRoute, useRouter }                from "vue-router";
import { getArticles }                        from "@/api/submit";
import { Pagination }                         from "vant";

const router = useRouter()
const route = useRoute()

interface ArticleData {
  diy_date: string
  diy_shengxiao: string
  diy_data: string
  diy_tema: string
  diy_qihao: string
}

let articleData = reactive<ArticleData[]>([])

let year: any = new Date().getFullYear().toString()
let pn = route.params.pn == '' ? ref(1) : ref(route.params.pn)
let pc = ref(0)

let years = ref('')

getArticles('8', route.params.year, '10', route.params.pn).then((data: any) => {
  articleData.splice(0, articleData.length, ...data.list);
  pc.value = Math.ceil(data.total / 10)
  years.value = data.year
})

watch(pn, (pn) => {
  getArticles('8', route.params.year, '10', pn).then((data: any) => {
    articleData.splice(0, articleData.length, ...data.list);
    pc.value = Math.ceil(data.total / 10)
  })
  year = route.params.year || new Date().getFullYear().toString()
  router.push(`/jiaozhujilu/${ year }/${ pn }`)
})

const handleClickJiluNav = (year: string) => {
  getArticles('8', year, '10', 1).then((data: any) => {
    articleData.splice(0, articleData.length, ...data.list);
    pc.value = Math.ceil(data.total / 10)
  })
  router.push(`/jiaozhujilu/${ year }/1`)
}

</script>

<template>
  <Layout width="max-w-6xl">
    <template #content>
      <section class="p-4 bg-white rounded-lg flex h-full mb-56">
        <div class="w-1/4">
          <span class="text-btnbg font-semibold">相关栏目</span>
          <ul class="mt-4 ml-4 space-y-2 text-text text-xs">
            <li class="cursor-pointer" v-for="(item, i) in years.split(',')" :key="i" @click="handleClickJiluNav(item)">
              {{ item }}搅珠记录
            </li>
          </ul>
        </div>
        <div class="w-3/4">
          <span class="text-xs text-gray-400">当前位置: 首页 >> 搅珠记录</span>
          <hr class="my-4"/>

          <table class="table-auto border border-slate-400">
            <thead>
            <tr>
              <th class="w-40 p-1 text-sm border border-slate-300">年数/期数</th>
              <th class="w-80 p-1 text-sm border border-slate-300">平码(六个正选号码)</th>
              <th class="w-16 p-1 text-sm border border-slate-300">特码</th>
              <th class="w-40 p-1 text-sm border border-slate-300">生肖</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, i) in articleData" :key="i">
              <td class="p-2 text-gray-500 text-sm border border-slate-300">{{ item.diy_date }} - {{
                  item.diy_qihao
                }}
              </td>
              <td class="p-2 text-gray-500 text-sm border border-slate-300 flex space-x-1">
                <img :src="getImg(item, 'gif')" alt="" v-for="(item, i) in item.diy_data.split(',')" :key="i">
              </td>
              <td class="p-2 text-gray-500 text-sm border border-slate-300">
                <img :src="getImg(item.diy_tema, 'gif')" alt="">
              </td>
              <td class="p-2 text-gray-700 text-sm border border-slate-300">
                {{ item.diy_shengxiao }}
              </td>
            </tr>
            </tbody>
          </table>

          <div class="w-full flex">
            <Pagination v-model="pn" :page-count="pc" mode="simple" class="w-40 mt-5"/>
            <!--            <div class="w-40 mt-5">-->
            <!--              <button class="w-8 h-8 rounded-full border border-slate-300" @click="pn&#45;&#45;">-</button>-->
            <!--              <span class="mx-2">{{ pn }}</span>-->
            <!--              <button class="w-8 h-8 rounded-full border border-slate-300" @click="pn++">+</button>-->
            <!--            </div>-->
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<style scoped>

</style>