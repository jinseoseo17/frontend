import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([]) //데이터를 채워서 보여주는데 html을 이용해서 보여줘야 하므로 반응형으로 변수 생성해줌

  function fetchArticles(){
    //django 서버에서 article들을 가져옴 = 함수를 실행시켰을 때 url에 요청을 보냄
    axios({
      url : 'http://127.0.0.1:8000/articles/'
    })
    .then(response => {
      console.log(response)
      articles.value = response.data // 응답을 articles에 넣어줘야 함
    })
  }

  function createArticle(data){
    axios({
      url : 'http://127.0.0.1:8000/articles/',
      method : 'POST',
      data : data
    })
  }
  
  return { articles, fetchArticles, createArticle }
})
