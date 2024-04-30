<template>
  <div>
    <button @click="showmessage">toggle</button>

    <div v-if="clickValue">보일까 안보일까??</div>
    <div v-else></div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const clickValue = ref(true)

function showmessage(){
  clickValue.value = !clickValue.value
}

</script>

<style lang="scss" scoped>

</style>