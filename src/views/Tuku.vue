<script setup lang="ts">

import Layout from "@/components/Layout.vue";
import { fetchTuku }          from "@/api/submit";
import { reactive, Ref, ref } from "vue";

interface ImgData {
  title: string
  id: string
  img_url: string
}

const data: Ref<ImgData[]> = ref([])

fetchTuku().then((res: any) => {
  data.value = reactive(res)
}).catch((err: any) => {
  console.log(err)
})

</script>

<template>
<Layout width="max-w-6xl">
  <template #content>
    <section class="h-full bg-white flex flex-col rounded-lg p-4">
      <span class="text-2xl text-center text-btnbg font-semibold mb-8">资料图库</span>
      <div class="grid grid-cols-4 gap-x-20 gap-y-10">
        <div class="" v-for="item in data" :key="item.id">
          <img :src="item.img_url" alt="">
          <div class="text-center mt-2 text-gray-400">{{ item.title }}</div>
        </div>
      </div>
    </section>
  </template>
</Layout>
</template>

<style scoped>
img {
  width: 100%;
}
</style>