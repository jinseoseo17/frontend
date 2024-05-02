<template>
  <div>
    <input type="text" @input="onInput">
  </div>
</template>

<script setup>

const emit = defineEmits(['inputFromChild'])

const onInput = (e) => {
  emit('inputFromChild', e.target.value)
}

// const articles = [
//   {
//     title: 'Article 1',
//     content: 'This is article 1'
//   },
//   {
//     title: 'Article 2',
//     content: 'This is article 2'
//   },
//   {
//     title: 'Article 3',
//     content: 'This is article 3'
//   }
// ]
</script>

<style lang="scss" scoped>
.my-component {
  border: 1px solid black;
}
</style>