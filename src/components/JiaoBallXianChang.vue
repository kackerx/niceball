<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getImg }                   from "@/utils/utils";
import { fetchToday }               from "@/api/submit";
import { showToast }                from "vant";
import { data }                     from "autoprefixer";

// interface IProps {
//   len: number
//   array: any[]
//   type: string
// }
//
// const props = defineProps<IProps>()

const shengxiaoMap: { [key: string]: any } =
    {
      '鼠': 'shu',
      '牛': 'niu',
      '虎': 'hu',
      '兔': 'tu',
      '龙': 'long',
      '蛇': 'she',
      '马': 'ma',
      '羊': 'yang',
      '猴': 'hou',
      '鸡': 'ji',
      '狗': 'gou'
    }

let nums = reactive<string[]>([])
const xiaos = reactive(['she', 'zhu', 'long', 'hou', 'niu', 'shu', 'ma'])

let index = 0

let isAnimate = true

const divNumsRef = ref()
const divXiaosRef = ref()


// let classObj = reactive({
//   'opacity_zero': true
// })

const noAnimate = () => {
  const div = divNumsRef.value
  const div2 = divXiaosRef.value

  // console.log('noan', div)
  for (let i = 0; i < 7; i++) {
    div.children[i].classList.add('opacity-100')
    div2.children[i].classList.add('opacity-100')
  }

  // div.children.forEach((child: any) => {
  //   child.classList.add('opacity-100')
  // })
}

let intervalId = setInterval(() => {
  console.log('noan')
  if (!isAnimate) {
    noAnimate()
  }
}, 300)

onMounted(() => {
  const div = divNumsRef.value
  const div2 = divXiaosRef.value


  // if (!isAnimate) {
  //   // div.children.forEach((child: any) => {
  //   //   child.classList.add('opacity-100')
  //   // })
  //   console.log('onm')
  //   setTimeout(() => {
  //     let c = div.children[index]
  //     console.log(c)
  //   }, 200)
  // }

  // let intervalId = setInterval(() => {
  //   console.log('noan')
  //   if (!isAnimate) {
  //     noAnimate()
  //   }
  // }, 300)

  const id = setInterval(() => {
    let child = div.children[index]
    let child2 = div2.children[index]

    if (index == nums.length || !isAnimate) {
      console.log('clear')
      clearInterval(id)
      return
    }

    child.classList.add('animation')
    child.addEventListener('animationend', () => {
      child.classList.add('opacity-100')
    })

    child2.classList.add('animation')
    child2.addEventListener('animationend', () => {
      child2.classList.add('opacity-100')
    })

    index++
  }, 5000)
})

const t = new Date()
const today = `${ t.getFullYear() }-${ t.getMonth() + 1 }-${ t.getDate() }`
const tomorrow = `${ t.getFullYear() }-${ t.getMonth() + 1 }-${ t.getDate() + 1 }`

fetchToday().then((res: any) => {
  isAnimate = res.isTrans
  // isAnimate = true
  setTimeout(() => {
    clearInterval(intervalId)
  }, 5000)

  let data: [] = res.data.diy_data.split(',')
  let tema: string = res.data.diy_tema
  nums.splice(0, nums.length, ...data, tema)

  let shengxiao = res.data.diy_shengxiao.replace('--', ',').split(',').map((item: string, _: string) => {
    return shengxiaoMap[item]
  })

  xiaos.splice(0, xiaos.length, ...shengxiao)


}).catch((err) => {
  showToast({ message: err.message })
})

// const animationEnd = () => {
//   alert('end')
// }

</script>

<template>
  <!--  <section class="py-4 px-16 bg-white rounded-lg flex flex-col space-y-6 items-center">-->
  <div class="flex flex-col space-y-4 items-center font">
    <div class="flex text-xl text-text justify-between space-x-16">
      <span>新加坡天天彩</span>
      <span>第<span class="text-red-500 font-semibold font-bold">207</span>期</span>
      <span>本期开奖时间:
      <span class="text-red-500 font-semibold">{{ today }} 20:05:00</span>
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
      <span class="text-red-500 font-semibold">{{ tomorrow }} 20:05:00</span>
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

.opacity_zero {
  opacity: 0;
}

.font {
  font-family: 'Microsoft YaHei', "Hack Nerd Font Mono", sans-serif;
}
</style>