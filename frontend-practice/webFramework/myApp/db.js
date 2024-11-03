const mongoose = require('mongoose');
const MONGO_HOST = 'mongodb+srv://seongeun:091625@cluster0.ibqch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_HOST, {
    retryWrites: true,
    w: 'majority'
}).then(db=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
});
module.exports = mongoose;