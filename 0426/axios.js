const axios = require('axios')                       // 1

const URL = 'https://jsonplaceholder.typicode.com/todos/1'
axios(//axios에 오브젝트 전달
  {
    method: 'get',
    url: URL
  }
)                                                   // 2.
  .then(response => console.log(response.data)) //axios와 한묶음이라는 얘기     // 3. 
