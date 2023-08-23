<script setup lang="ts">
import { showConfirmDialog, showDialog, showToast, Uploader } from "vant";
import { upload }                                             from "@/api/submit";


const afterRead = (file: any) => {
  upload(file.file, title).then(res => {
    console.log(res)
    showToast('上传成功')
  })
}

const beforeRead = (file: any) => {
  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    showToast('请上传 jpg 格式图片');
    return false;
  }

  if (file.size > 2 * 1024 * 1024) {
    showToast('图片大小不能超过 2MB');
    return false;
  }

  if (title === '') {
    showDialog({
      message: '请输入图片标题',
    })
    return false;
  }

  return true;
}

let title = ''


</script>

<template>
  <div class="flex space-x-4 items-center mb-10">
    <span>图片标题</span>
    <input type="text" v-model="title">
  </div>

  <div class="flex space-x-4 items-center">
    <span>点击上传图片</span>
    <Uploader icon="plus" type="primary" :after-read="afterRead" :before-read="beforeRead"/>
  </div>

  <!--  <van-uploader v-model="fileList" preview-size="5rem"/>-->

</template>

<style scoped>

</style>