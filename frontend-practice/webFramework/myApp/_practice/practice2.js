const mongoose = require('../db');
const Cat = mongoose.model('Cat',{
    name: String
})
Cat.insertMany([
    {name: '나비'},
    {name: '부엉이'}
]).then(data=>{
    console.log('저장된 데이터')
    console.log(data)
})