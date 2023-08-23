<script setup lang="ts">
import { useTransition } from "@/use/useTransition";
import { getImg }        from "@/utils/utils";

interface IProps {
  len: number
  array: any[]
  type: string
}

const props = defineProps<IProps>()


const { shows } = useTransition(props.len)

</script>

<template>
    <transition v-for="(item, index) in props.array" :key="index">
      <!--        <span v-show="shows[index]">{{ item }}</span>-->
      <img v-show="shows[index]" class="" :src="getImg(item, props.type)" alt="">
    </transition>
</template>

<style lang="scss" scoped>

.v-enter-from {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity 3s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  // 可省略 opacity: 1;
}

.v-leave-to {
  opacity: 0;
}

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

</style>