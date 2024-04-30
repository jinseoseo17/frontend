import { defineStore } from 'pinia' //스토어를 만듦
import { ref } from 'vue' //반응형

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0)
  
  function increment() {
    count.value++
  }

  return { count, increment }
})