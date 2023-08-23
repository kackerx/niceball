<script setup lang="ts">
import { reactive }            from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNavbarStore }      from "../store/navbar";

// const navs = reactive([
//   { name: '首页', path: 'home', active: true },
//   { name: '守夜', path: 'article', active: false },
//   { name: '首页', path: 'about', active: false },
// ])

const router = useRouter()

const navbarStore = useNavbarStore();

const navs = navbarStore.navs;


const handleNavClick = (item: any) => {
  navbarStore.setActive(item.path);
  // navs.forEach((nav: any) => {
  //   nav.active = nav.path === item.path;
  // })
  //
  router.push(item.path)
}

const isActive = (path: string) => {
  return useRoute().path === path
}

</script>

<template>
  <header>
    <div class=" p-4 max-w-6xl mx-auto">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <nav class="nav bg-[#4f3a93]">
      <ul class="max-w-6xl mx-auto flex text-white text-sm">
        <button :class="{'active': isActive(item.path)}" class="px-8 py-3 hover:opacity-70 active:bg-[#3d2583]"
                v-for="(item, i) in navs" :key="i"
                @click="handleNavClick(item)"
        >
          <li>{{ item.name }}</li>
        </button>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.active {
  background-color: #3d2583;
}
</style>