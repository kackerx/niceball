<script setup lang="ts">

import { Button, showDialog }              from 'vant';
import { ref, watch }                      from "vue";
import { fetchArticleContent, updateCate } from "@/api/submit";

const value = ref('caipiao');
const option1 = [
  { text: '彩票介绍', value: 'caipiao' },
  { text: '公司董事', value: 'dongshi' },
  { text: '奖金分配', value: 'jiangjin' },
  { text: '玩法介绍', value: 'wanfa' },
  { text: '关于我们', value: 'guanyu' },
];

// watch(value, (nv) => {
//   console.log(nv)
// })

let content = ref('')

fetchArticleContent(value.value).then((res: any) => {
  content.value = res.content
})

watch(value, (nv) => {
  fetchArticleContent(nv).then((res: any) => {
    content.value = res.content
  })
})

const handleClickBtn = () => {
  updateCate(value.value, content.value).then((res: any) => {
    showDialog({
      title: '提示',
      message: '保存成功',
    })
  }).catch((err: any) => {
    showDialog({
      title: '提示',
      message: '保存失败',
    })
  })
}

</script>

<template>
  <div class="flex flex-col space-y-4 h-96">
    <select class="border border-solid rounded-lg p-2" v-model="value">
      <option v-for="(item, i) in option1" :key="i" :value=item.value>{{ item.text }}</option>
    </select>

    <textarea placeholder="请输入栏目内容并提交..." v-model="content"
              class="border p-4 rounded-lg h-full text-slate-500"/>

    <Button type="success" @click="handleClickBtn">保存</Button>
  </div>
</template>

<style scoped>

</style>