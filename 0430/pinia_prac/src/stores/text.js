import { defineStore } from 'pinia' //스토어를 만듦
import { ref } from 'vue' //반응형

export const useTextStore = defineStore('text', () => {

  const showtxt = ref('')
  
  function onInput(e) {
    // console.log(e)
    showtxt.value = e.target.value
    //showtxt.value = newtxt
    console.log(showtxt)
  }

  return { showtxt, onInput }
})