<script setup lang="ts">

import Notify from "@/components/Notify.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

interface IProps {
  width?: string
}

const props = withDefaults(defineProps<IProps>(), {
  width: 'max-w-4xl'
})
</script>

<template>
  <NavBar/>

  <main class="mx-auto" :class="props.width">
    <Notify/>

    <slot name="content">
      default
    </slot>
  </main>

  <Footer />
</template>

<style scoped>

</style>