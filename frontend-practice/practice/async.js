// function run(){
//     console.log('3초 후 실행')
// }
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝')

// const { reject } = require("async");

// function fastFunction(err, data, done){
//     setTimeout(function(){
//         done(undefined, data*2);
//     }, 10)
// }
// function slowFunction(err, data, done){
//     setTimeout(function(){
//         done(undefined, data+10);
//     }, 20)
// }
// function runTasks(callback){
//     fastFunction(undefined, 10, (err, data)=>{
//         if(err) return callback(err);
//         console.log('fast', data);
        
//         slowFunction(undefined, data,(err, data)=>{
//             if (err) return callback(err);
//             console.log('slow', data);
//         })
//     })
// }
// runTasks(err=>{
//     console.error(err);
// })



// function fastFunction(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             const result =data*2;
//             console.log('fast', result);
//             resolve(result);
//         }, 1000)
//     })
// }
// function slowFunction(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             const result =data+10;
//             console.log('slow', result);
//             resolve(result);
//         }, 3000)
//     })
// }
// async function runTasks(){
//     return fastFunction(10)
//     .then((data)=>{
//         return slowFunction(data);
//     }).then(data=>{
//         console.log('완료')
//     }).catch(err=>{
//         console.error(err);
//     })
// }
// runTasks();





// fastFunction data*2 (1초)
// slowFunction data+10 (3초)
// initialData가 주어졌을 때, fastFunction -> slowFunction 
// slowFunction(fastFunction(initialData))
function fastFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data * 2
        console.log("fast", result);
        callbackFn(result)
    }, 1000)
}
function slowFunction(data, callbackFn){
    return setTimeout(()=>{
        const result = data + 10;
        console.log("slow", result);
        callbackFn(result);
    }, 3000)
}
fastFunction(10, (data)=>{
    const fastFunctionResult = data;
    slowFunction(fastFunctionResult, data=>{
        const slowFunctionResult = data;
        console.log('fast->slow', slowFunctionResult);
    })
})