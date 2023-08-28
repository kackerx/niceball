<script setup lang="ts">

import { reactive, ref, watch }       from "vue";
import { getImg }                     from "@/utils/utils";
import { useRoute, useRouter }        from "vue-router";
import { deleteArticle, getArticles } from "@/api/submit";
import { Pagination, showToast }      from "vant";
import { options }                    from "axios";

const router = useRouter()
const route = useRoute()

interface ArticleData {
  id: string
  diy_date: string
  diy_shengxiao: string
  diy_data: string
  diy_tema: string
  diy_qihao: string
}

let articleData = reactive<ArticleData[]>([])

let year: any = ref(new Date().getFullYear().toString())
let pn = ref(1)
let pc = ref(0)

let years = ref('')

getArticles('8', year.value, '10', pn.value, 1).then((data: any) => {
  articleData.splice(0, articleData.length, ...data.list);
  pc.value = Math.ceil(data.total / 10)
  years.value = data.year
})

watch(pn, (pn) => {
  getArticles('8', year.value, '10', pn, 1).then((data: any) => {
    articleData.splice(0, articleData.length, ...data.list);
    pc.value = Math.ceil(data.total / 10)
  })
})

watch(year, (nv) => {
  getArticles('8', year.value, '10', 1, 1).then((data: any) => {
    articleData.splice(0, articleData.length, ...data.list);
    pn.value = 1
    pc.value = Math.ceil(data.total / 10)
  })
})

const handleClickDel = (id: string) => {
  deleteArticle(id.toString()).then((res) => {
    showToast({ message: '删除成功' })
    articleData.forEach((item, index) => {
      if (item.id === id) {
        articleData.splice(index, 1)
        return
      }
    })
  }).catch((err) => {
    showToast({ message: `删除失败: ${ err.message }` })
  })
}
</script>

<template>
  <select class="border border-solid rounded-lg p-2" v-model="year">
    <option v-for="(item, i) in years.split(',')" :key="i" :value=item>{{ item }}</option>
  </select>
  <section class="p-4 bg-white rounded-lg flex h-full mb-56">


    <div class="w-full">
      <table class="table-auto border border-slate-400">
        <thead>
        <tr>
          <th class="w-40 p-1 text-sm border border-slate-300">年数/期数</th>
          <th class="w-80 p-1 text-sm border border-slate-300">平码(六个正选号码)</th>
          <th class="w-16 p-1 text-sm border border-slate-300">特码</th>
          <th class="w-50 p-1 text-sm border border-slate-300">生肖</th>
          <th class="w-20 p-1 text-sm border border-slate-300">操作</th>
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
          <td class="p-2 text-gray-700 text-sm border border-slate-300">
            <span class="text-sky-700 font-semibold cursor-pointer" @click="handleClickDel(item.id)">删除</span>
          </td>
        </tr>
        </tbody>
      </table>

      <div class="w-full flex">
        <Pagination v-model="pn" :page-count="pc" mode="simple" class="w-40 mt-5"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>