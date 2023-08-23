<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getImg }                   from "@/utils/utils";

// interface IProps {
//   len: number
//   array: any[]
//   type: string
// }
//
// const props = defineProps<IProps>()

const nums = reactive([1, 2, 3, 4, 5, 6, 7])
const xiaos = reactive(['she', 'zhu', 'long', 'hou', 'niu', 'shu', 'ma'])

let index = 0

const isAnimate = false

const divNumsRef = ref()
const divXiaosRef = ref()

onMounted(() => {
  const div = divNumsRef.value
  const div2 = divXiaosRef.value

  const id = setInterval(() => {
    if (index == nums.length || isAnimate) {
      clearInterval(id)
      return
    }
    div.children[index].classList = ['animation']
    div2.children[index].classList = ['animation']
    index++
  }, 5000)
})

</script>

<template>
<!--  <section class="py-4 px-16 bg-white rounded-lg flex flex-col space-y-6 items-center">-->
  <div class="flex flex-col space-y-4 items-center">
    <div class="flex text-xl text-text justify-between space-x-16">
      <span>新加坡天天彩</span>
      <span>第<span class="text-red-500 font-semibold">207</span>期</span>
      <span>本期开奖时间:
      <span class="text-red-500 font-semibold">2023-07-26 20:00:00</span>
    </span>
    </div>

    <div class="nums flex items-center justify-center space-x-10">
      <span>平码</span>
      <div ref="divNumsRef" class="flex space-x-10">
        <div v-for="(item, index) in nums" :key="index" class="opacity-0">
          <img :src="getImg(item, 'gif')" alt="">
        </div>
      </div>
    </div>

    <div class="xiaos flex items-center justify-center space-x-10">
      <span>平肖</span>
      <div ref="divXiaosRef" class="flex space-x-10">
        <div v-for="(item, index) in xiaos" :key="index" class="opacity-0">
          <img :src="getImg(item, 'jpg')" alt="">
        </div>
      </div>
    </div>

    <div>
      下期开奖时间:
      <span class="text-red-500 font-semibold">2023-07-26 20:00:00</span>
    </div>
  </div>
<!--  </section>-->
</template>

<style scoped>
.nums div:nth-last-child(2), .xiaos div:nth-last-child(2) {
  position: relative;
}

.nums div:nth-last-child(2)::after, .xiaos div:nth-last-child(2)::after {
  content: '+';
  font-size: 20px;
  position: absolute;
  top: 10%;
  right: -40%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

.animation {
  animation: fadeIn 10s;
}
</style>