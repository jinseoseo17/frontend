<template>
  <div>
    <a href="https://www.naver.com/">naver</a>
    <br>
    <a href="https://www.google.com/">google</a>
    <br>
    <a href="https://github.com/">github</a>
    <br>
    <a href="https://ko.vuejs.org/">vue</a>

    <div v-for="url in urls"></div>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const urls = [
  { name: 'naver', url: 'https://www.naver.com/' },
  { name: 'google', url: 'https://www.google.com/' },
  { name: 'github', url: 'https://github.com/'},
  { name: 'vue', url: 'https://ko.vuejs.org/'},
]

function showmessage(){
  clickValue.value = !clickValue.value
}

</script>

<style lang="scss" scoped>

</style>