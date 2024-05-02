<script setup>
import {ref} from 'vue'
//import MyComponent from './components/MyComponent.vue';

import NavBar from './components/navBar.vue';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
const valueFromChild = ref('')

function onInput(value){
  valueFromChild.value = value
}
</script>

<template>
  <div>
  <!-- <nav class="border">네브</nav> -->
    <NavBar/>
    <div class="flex">
    <!-- <aside class="border">어사이드</aside> -->
      <Aside/>
        <Main/>
    </div>
    <!-- <main class="border p-1 row">
      메인 -->
      <!-- <div class="row">
        <article class="border col-4">아티클</article>
        <article class="border col-4">아티클</article>
        <article class="border col-4">아티클</article>
        <article class="border col-4">아티클</article>
        <article class="border col-4">아티클</article>
        <article class="border col-4">아티클</article>
      </div> -->
  </div>
</template> -->

<style lang="scss" scoped>

.flex{
    display: flex;
  }

</style>
