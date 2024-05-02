<script setup>
import {ref} from 'vue'
import MyComponent from './components/MyComponent.vue';

const valueFromChild = ref('')

function onInput(value){
  valueFromChild.value = value
}
</script>

<template>
  <div>value from child : {{ valueFromChild }}</div>
  <MyComponent :text="myText" :num="myNum" @inputFromChild="onInput"/>
   
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
