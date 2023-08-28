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
        新加坡天天彩彩公司于每晚八点零分开奖,搅珠结果当晚将在电台与本网站公布。（若有大彩池或假期需更改开奖日期，到时另行通知）本公司中文网站业务主要为海外华人提供博彩咨询，特此声明。阁下须留意所处地区法律，在任何情況下引致触犯所处地区之法律，其一切后果本站恕不负责，未成年人不宜浏览本网站。
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
      <strong class="bg-btnbg px-4 py-1 rounded-lg text-white text-[18px]">公司介绍</strong>
      <p class="text-gray-500 text-sm">本规例由新加坡天天彩彩券奖券有限公司公司局根据其章程大纲制定,
        藉以规管所有奖券活动本规例可随时由新加坡天天彩彩券奖券有限公司董事局局修订, 修订后的规例将于公布后立即生效</p>
      <span class="text-sm text-btnbg font-semibold text-[19px]">开奖时间为每晚8点05分</span>

    </section>

    <section class="flex space-x-4 my-4">
      <section class="w-1/2 bg-white rounded-lg p-4 flex space-x-2">
        <div class="w-3/5">
          <strong class="bg-btnbg px-4 py-2 rounded-lg text-white text-[18px]">奖金分配</strong>
          <p class="text-gray-500 mt-4 text-[13px] leading-[26px]">
            本彩票的销售总额分配方式：52%作为奖金返还；15%為发行彩票的政府税收入，用於社会各公共事业；26%通过彩票協会赞助社会公共事业，取之于民，用之于民。余下的7%用于彩票销售者以及办理中奖的手续费，彩票的运作、印制、宣传等成本费用。</p>
        </div>
        <div class="w-2/5 flex items-center">
          <img src="@/assets/img/jjfp.png" alt="">
        </div>
      </section>

      <section class="w-1/2 bg-white rounded-lg p-4 flex items-start">
        <div class="w-1/3">
          <strong class="bg-btnbg px-4 py-2 rounded-lg text-white text-[18px]">综合信息</strong>
        </div>
        <div class="w-2/3">
          <img src="@/assets/img/zhxx.png" alt="">
        </div>
      </section>
    </section>

    <section class="flex bg-white p-4 rounded-lg space-x-4 mb-16">
      <div class="flex-1">
        <strong class="bg-btnbg px-4 py-2 rounded-lg text-white text-[18px]">公司介绍</strong>
        <p class="text-gray-500 text-[15px] mt-4">新加坡天天彩公司為依據新加坡法律唯一獲新加坡獎券管理局委託代辦天天彩獎券的機構。本公司位於新加坡宏茂桥路2--4號，擁有員工1026人，註冊資金54.2億新加坡幣。新加坡天天彩信息網是天天彩公司唯一指定授權的天天彩官方網站。新加坡天天彩的攪珠結果為開獎日在新加坡特別行政區公證處監督下，以不偏不倚、公正公平的原則下進行公開搖獎。《新加坡天天彩券有限公司发行》</p>
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