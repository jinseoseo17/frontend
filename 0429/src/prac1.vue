<template>
  <div>
    <input :value="text" @input="onInput">
    <h1 :style="`color: ${text};`">color change!</h1>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const text = ref('')

function onInput(e) {
  text.value = e.target.value
  
}
</script>

<style lang="scss" scoped>

</style>