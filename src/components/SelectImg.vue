<script setup lang="ts">

import { onMounted } from "vue";
import { showToast } from "vant";

interface IProps {
  data: IImgData[]
  modelValue: IImgData[]
  imgType: string
  cate: string
}

interface IEmits {
  'update:modelValue': (value: string[]) => void
}

interface IImgData {
  key: string
  name: string
}

const props = defineProps<IProps>()
// const emits = defineEmits<IEmits>()

const getImg = (item: any, type: string) => {
  return new URL(`../assets/img/${ item }.${ type }`, import.meta.url).href;
}


function handleClickImg(item: IImgData) {
  if (props.modelValue.length === 7) {
    showToast({ message: '最多只能选择7个' })
    return
  }
  props.modelValue.push(item)
}

const handleSelectedImg = (i: number) => {
  props.modelValue.splice(i, 1)
}


</script>

<template>
  <section class="flex flex-col space-y-4 mt-5 mb-5">
    <div class="flex items-center space-x-4">
      <h2>{{ props.cate }}</h2>
      <span class="text-gray-400">点击下方图片选择</span>
    </div>
    <hr>
    <div class="flex space-x-2">
      <div class="flex flex-wrap items-center">
        <div class="rounded-full p-2 hover:opacity-70 cursor-pointer" v-for="(item, i) in props.data"
             @click="handleClickImg(item)"
             :key="i">
          <img :src="getImg(item.key, imgType)" alt="">
        </div>
      </div>
    </div>

    <div class="flex space-x-4 items-center">
      <span class="font-sans">已选</span>
      <div
          class="border border-gray-500 border-2 rounded-lg p-2 flex flex-auto space-x-4 h-[56px] items-center relative">
        <div v-for="(item, i) in props.modelValue" :key="item" @click="handleSelectedImg(i)"
             class="cursor-pointer hover:opacity-70">
          <img :src="getImg(item.key, imgType)" alt="" v-if="i < 6">
        </div>
        <span class="absolute right-10 text-red-500 font-semibold text-xs">单机左侧图标可取消选择</span>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <span>特码</span>
      <img :src="getImg(props.modelValue[6].key, imgType)" alt="" v-if="props.modelValue.length === 7">
    </div>
    <hr class="h-1 bg-btnbg">
  </section>
</template>

<style scoped>

</style>