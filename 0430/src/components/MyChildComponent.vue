<template>
  <div class="my-child-component">
    this is my child component
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
  </div>
</template>

<script setup>
defineProps({
  article:  Object
})

</script>

<style lang="scss" scoped>
.my-child-component {
  border: 2px solid blueviolet;
  margin: 1rem;
}
</style>