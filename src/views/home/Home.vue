<script setup lang="ts">

import NavBar       from "@/components/NavBar.vue";
import Footer       from "@/components/Footer.vue";
import { reactive } from "vue";
import JiaoBallXianChang from "@/components/JiaoBallXianChang.vue";
import Notify from "@/components/Notify.vue";


</script>

<template>
  <NavBar/>

  <main class="max-w-6xl mx-auto">

    <Notify />

    <section class="py-4 px-16 bg-white rounded-lg flex flex-col space-y-6 items-center">

      <JiaoBallXianChang />

      <div class="text-center text-gray-500 text-xs">
        新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩
      </div>

      <div class="flex space-x-2">
        <img src="@/assets/img/1.png" alt="">
        <img src="@/assets/img/2.png" alt="">
        <img src="@/assets/img/3.png" alt="">
        <img src="@/assets/img/4.png" alt="">
        <img src="@/assets/img/5.png" alt="">
        <img src="@/assets/img/6.png" alt="">
        <img src="@/assets/img/7.png" alt="">
        <img src="@/assets/img/8.png" alt="">
        <img src="@/assets/img/9.png" alt="">
        <img src="@/assets/img/10.png" alt="">
        <img src="@/assets/img/11.png" alt="">
        <img src="@/assets/img/12.png" alt="">
      </div>
    </section>

    <section class="bg-white my-4 px-4 py-4 pl-4  pr-32 flex flex-col items-start space-y-2 rounded-lg">
      <span class="bg-btnbg px-4 py-1 rounded-lg text-white text-sm">公司介绍</span>
      <p class="text-gray-500 text-xs">本规例由新加坡天天彩彩券奖券有限公司公司局根据其章程大纲制定,
        藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订, 修订后的规例将于公布后立即生效</p>
      <span class="text-sm text-btnbg font-semibold">开奖时间为每晚8点05分</span>

    </section>

    <section class="flex space-x-4 my-4">
      <section class="w-1/2 bg-white rounded-lg p-4 flex space-x-2">
        <div class="w-2/3">
          <span class="bg-btnbg px-4 py-1 rounded-lg text-white text-sm">奖金分配</span>
          <p class="text-gray-500 text-xs mt-4">
            新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩</p>
        </div>
        <div class="w-1/3 flex items-center">
          <img src="@/assets/img/jjfp.png" alt="">
        </div>
      </section>

      <section class="w-1/2 bg-white rounded-lg p-4 flex items-start">
        <div class="w-1/3">
          <span class="bg-btnbg px-4 py-1 rounded-lg text-white text-sm">综合信息</span>
        </div>
        <div class="w-2/3">
          <img src="@/assets/img/zhxx.png" alt="">
        </div>
      </section>
    </section>

    <section class="flex bg-white p-4 rounded-lg space-x-4 mb-16">
      <div class="flex-1">
        <span class="bg-btnbg px-4 py-1 rounded-lg text-white text-sm">公司介绍</span>
        <p class="text-gray-500 text-xs mt-4">藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订,
          修订后的规例将于公布后立即生效, 藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订, ,
          藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订, ,
          藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订, </p>
      </div>
      <div class="w-1/3">
        <img src="@/assets/img/gsjj.png" alt="">
      </div>
    </section>
  </main>

  <Footer/>
</template>

<style scoped>
.nums div:nth-last-child(2), .xiaos div:nth-last-child(2) {
  position: relative;
}

.nums div:nth-last-child(2)::after, .xiaos div:nth-last-child(2)::after{
  content: '+';
  font-size: 20px;
  position: absolute;
  top: 10%;
  right: -40%;
}
</style>