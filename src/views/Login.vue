<script setup lang="ts">
import { Button } from "vant";
import { ref }    from "vue";
import { login }  from "@/api/submit";
import { useRouter } from "vue-router";

let username = ref('')
let password = ref('')

const router = useRouter()

const handleClickSubmit = () => {
  login(username.value, password.value).then((res: any) => {
    if (res.accessToken) {
      localStorage.setItem('token', res.accessToken)
      // localStorage.setItem('token', '123')
      router.push('/admin2023beire/kaijiang')
    }
  })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-img">
    <div class="h-96 w-1/3 bg-white flex flex-col items-center space-y-4 rounded-2xl p-10 opacity-90">
      <h1 class="font-semibold text-btnbg mb-4">后台管理</h1>
      <div class="w-96">
        <div class="flex items-center space-x-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
          </svg>
          <label for="username" class="mr-4 font-semibold text-gray-400">用户名</label>
        </div>
        <input type="text" id="username" class="border rounded-lg p-2 w-full" v-model="username"/>
      </div>
      <div class="w-96">
        <div class="flex items-center space-x-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"/>
          </svg>
          <label for="password" class="mr-4 font-semibold text-gray-400">密码</label>
        </div>
        <input type="password" id="password" class="border rounded-lg p-2 w-full" v-model="password"/>
      </div>
      <div>
        <Button
            :loading=false
            color="#8669d3"
            class="self-start bg-white" type="success" @click="handleClickSubmit()">登录
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
}
</style>