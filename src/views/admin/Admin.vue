<script setup lang="ts">

import { ref } from "vue";

let currentNav = ref('kaijiang')

const isActive = (cate: string) => {
  return currentNav.value === cate
}

const handleClickNav = (cate: string) => {
  currentNav.value = cate
}

const handleClickLogout = () => {
  localStorage.removeItem('token')
}

</script>

<template>

  <header class="bg-[#f5f7fb]">
    <div class="p-4 max-w-6xl mx-auto font-serif font-semibold">DASHBOARD</div>
  </header>

  <hr class="h-10 bg-gray-900 mb-5">

  <main class="max-w-6xl mx-auto flex space-x-10 mb-4">
    <nav class="w-1/5 bg-[#5da67c] p-2 rounded-2xl">
      <div class="flex mb-4 justify-center">
        <img src="@/assets/img/1.png" alt="">
        <img src="@/assets/img/2.png" alt="">
        <img src="@/assets/img/3.png" alt="">
      </div>

      <hr class="h-2">
      <ul class="p-4">
        <router-link to="/admin2023beire/kaijiang" @click="handleClickNav('kaijiang')">
          <li class="p-2 text-center text-white flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
                 :class="{'active': isActive('kaijiang')}">
              <path fill-rule="evenodd"
                    d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                    clip-rule="evenodd"/>
            </svg>
            <span :class="{'active': isActive('kaijiang')}">明日开奖</span>
          </li>
        </router-link>
        <router-link to="/admin2023beire/jilu" @click="handleClickNav('jiaozhujilu')">
          <li class="p-2 text-center text-white flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
                 :class="{'active': isActive('jiaozhujilu')}">>
              <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"/>
              <path
                  d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"/>
              <path
                  d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"/>
              <path
                  d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"/>
            </svg>
            <span :class="{'active': isActive('jiaozhujilu')}">搅珠记录</span>
          </li>
        </router-link>
        <router-link to="/admin2023beire/tukushangchuan" @click="handleClickNav('tukushangchuan')">
          <li class="p-2 text-center text-white flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
                 :class="{'active': isActive('ziliaotuku')}">>
              <path fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span :class="{'active': isActive('tukushangchuan')}">图库上传</span>
          </li>
        </router-link>
        <router-link to="/admin2023beire/category" @click="handleClickNav('category')">
          <li class="p-2 text-center text-white flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"
                 :class="{'active': isActive('category')}">
              <path
                  d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"/>
            </svg>
            <span :class="{'active': isActive('category')}">导航文章</span>
          </li>
        </router-link>
        <router-link to="/login">
          <li class="p-2 text-center text-white flex space-x-2 items-center" @click="handleClickLogout">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span>退出登录</span>
          </li>
        </router-link>
      </ul>
    </nav>

    <section class="bg-white rounded-2xl w-full h-full p-4">
      <router-view></router-view>
      <router-view name="aboutme"></router-view>
    </section>
  </main>

</template>

<style scoped>
.active {
  color: rgb(134 105 211 / 1);
}
</style>