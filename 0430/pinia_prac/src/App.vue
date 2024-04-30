<script setup>
import MyComponent from './components/MyComponent.vue';
//import {useCounterStore} from './stores/counter';
import {useTextStore} from './stores/text';

const textStore = useTextStore();

</script>

<template>

  <div>
    <h1>my App</h1>
    <div>text : {{ textStore.showtxt }}</div>
    <MyComponent />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
