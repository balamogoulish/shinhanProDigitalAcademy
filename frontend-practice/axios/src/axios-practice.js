const axios = require('axios');

axios.get('https://www.naver.com').then(response=>{
    return response.data;
}).then(data=>{
    console.log(data)
})