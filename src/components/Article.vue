<script setup lang="ts">
import Layout                  from "@/components/Layout.vue";
import { fetchArticleContent } from "@/api/submit";
import { ref }                 from "vue";

interface IProps {
  cate: string
}

const props = defineProps<IProps>()

let content = ref('')

fetchArticleContent(props.cate).then(res => {
  content.value = res.content
})
</script>


<template>
  <layout>
    <template #content>
      <section class="bg-white rounded-lg h-full p-8 flex space-x-8 justify-between">
        <div class="relative w-2/3">
          <p class="text-gray-500 text-sm indent-4
              before:-translate-x-6 before:-translate-y-4 before:content-['\201C'] before:font-serif
              before:text-6xl before:opacity-25 before:absolute before:top-0 before:left-0
              after:content-['\201D'] after:font-serif after:text-6xl after:opacity-25
              after:absolute after:bottom-0 after:right-0 after:translate-y-10 after:translate-x-2
                ">
            {{ content }}
          </p>
        </div>
        <div class="">
          <img src="@/assets/img/gsjj.png" alt="">
        </div>
      </section>
    </template>
  </layout>
</template>

<style scoped>

</style>

