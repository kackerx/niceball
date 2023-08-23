<script setup lang="ts">

</script>

<template>
  <section class="my-4 flex space-x-4 text-xs">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-text">
      <path
          d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z"/>
    </svg>

    <div class="overflow-hidden flex-auto">
      <transition-group name="slide" tag="div" class="scroll-container">
    <span key="announcement"
          class="announcement ml-16">新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩新加坡天天彩</span>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.scroll-container {
  display: flex;
  animation: scroll 20s linear infinite;
}

.announcement {
  flex-shrink: 0;
//margin-right: 20px; //padding: 10px; //background-color: #f0f0f0;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>