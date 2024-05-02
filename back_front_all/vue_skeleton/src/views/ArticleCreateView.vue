<template>
  <div>
    <h1>작성</h1>
    <form @submit.prevent="createArticle">
      <label for="">제목 : </label>
      <input type="text" v-model ="data.title">
      <br>
      <label for="">내용 : </label>
      <textarea name="" id="" cols="30" rows="10" v-model="data.content"></textarea>
      <br>
      <button>작성하기</button>
    </form>
  </div>
</template>

<script setup>
import { useArticleStore } from '../stores/articles'; //함수를 실행시키기 위해 store에서 가져옴
import {reactive} from 'vue';
import { useRouter } from 'vue-router';

const articleStore = useArticleStore()
//form을 제출하면 createArticle 함수를 실행
const router = useRouter()

const data = reactive({
  title : '',
  content : ''
})


function createArticle(){
//store에 들어있는 createArticle 함수를 실행시킴
console.log('haha')
articleStore.createArticle(data)
router.push('/articles')
}
</script>

<style lang="scss" scoped>

</style>