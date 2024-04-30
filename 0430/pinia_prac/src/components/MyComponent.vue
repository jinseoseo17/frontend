<template>
  <div>
    <h2>my Component</h2>
    <!-- <button @click="counterStore.increment">1 더하기!</button> -->
    <input @input="TextStore.onInput">
  </div>
</template>

<script setup>
import {useTextStore} from '/src/stores/text'

const TextStore = useTextStore();

// function onInput(e){
//   const newtxt = e.target.value
//   TextStore.setTxt(newtxt)
// }
</script>

<style lang="scss" scoped>

</style>