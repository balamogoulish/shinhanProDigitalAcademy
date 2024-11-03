const mongoose = require('../db');
const Cat = mongoose.model('Cat',{
    name: String
})
Cat.find({name:'야옹이'}).then(data=>{
    console.log(data);
})
Cat.findById('672037cda49274a6c3badf75').then(data=>{
    console.log(data);
})
Cat.findOne({name:'부엉이'}).then(data=>{
    console.log(data);
})
Cat.deleteOne({name: '나비'}).then(data=>{
    console.log(data);
})
Cat.deleteMany({name:'meow'}).then(data=>{
    console.log(data);
})
Cat.updateOne({name: '부엉이'}, {name:'meow'}).then((data)=>{
    console.log(data);
})
Cat.updateMany({name:'부엉이'}, {name:'meow'}).then((data)=>{
    console.log(data);
})