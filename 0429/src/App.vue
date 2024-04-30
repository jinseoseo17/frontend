<template>
  <div>
    <form @submit.prevent="onInput">
      <input v-model="todo">
      <input type="submit" value="제출" >
    </form>
    <ul>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

let todo = ref('')

const todos = reactive([
  { text: 'Hello' },
  { text: 'World' },
  { text: 'and Vue!' }
])

function onInput(e) {
  // todo.value = e.target.value
  // todos.push(todo.value)
  console.log(todo.value)
  todos.push({text : todo.value}) //딕셔너리 형태로 넣어줘야 제대로 보임 
  todo = ref('') //작성 후 텍스트 필드 비우기
}

</script>

<style lang="scss" scoped>
</style>
