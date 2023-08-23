<script setup lang="ts">

import { reactive } from "vue";

import { Button } from 'vant';
import { submit } from '@/api/submit';
import SelectImg  from "@/components/SelectImg.vue";


const selectedShengxiao: any[] = reactive([])

const selectedNumber: any[] = reactive([])

const shengxiao = [
  { 'key': 'shu', 'name': '鼠' },
  { 'key': 'niu', 'name': '牛' },
  { 'key': 'hu', 'name': '虎' },
  { 'key': 'tu', 'name': '兔' },
  { 'key': 'long', 'name': '龙' },
  { 'key': 'she', 'name': '蛇' },
  { 'key': 'ma', 'name': '马' },
  { 'key': 'yang', 'name': '羊' },
  { 'key': 'hou', 'name': '猴' },
  { 'key': 'ji', 'name': '鸡' },
  { 'key': 'gou', 'name': '狗' },
  { 'key': 'zhu', 'name': '猪' },
]

const number = Array.from({ length: 49 }, (_, index) => ({ key: (index + 1).toString(), name: (index + 1).toString() }))

const handleClickSubmit = () => {
  const reqData = {
    qihao: '20210101',
    diy_shengxiao: selectedShengxiao.slice(0, selectedShengxiao.length - 1).map(v => v.name).join(',') + '--' + selectedShengxiao[selectedShengxiao.length - 1].name,
    diy_data: selectedNumber.slice(0, selectedNumber.length - 1).map(v => v.name).join(','),
    diy_tema: selectedNumber[selectedNumber.length - 1].name
  }
  console.log(reqData)
}
</script>

<template>

  <SelectImg :data="shengxiao" v-model="selectedShengxiao" imgType="jpg" cate="生肖"/>
  <SelectImg :data="number" v-model="selectedNumber" imgType="gif" cate="搅珠"/>


  <Button
      :loading=false
      class="self-start" type="success" @click="handleClickSubmit()">保存
  </Button>
</template>

<style scoped>

</style>