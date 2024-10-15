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



// // fastFunction data*2 (1초)
// // slowFunction data+10 (3초)
// // initialData가 주어졌을 때, fastFunction -> slowFunction 
// slowFunction(fastFunction(initialData))
// function fastFunction(data, callbackFn){
//     return setTimeout(()=>{
//         const result = data * 2
//         console.log("fast", result);
//         callbackFn(result)
//     }, 1000)
// }
// function slowFunction(data, callbackFn){
//     return setTimeout(()=>{
//         const result = data + 10;
//         console.log("slow", result);
//         callbackFn(result);
//     }, 3000)
// }
// fastFunction(10, (data)=>{
//     const fastFunctionResult = data;
//     slowFunction(fastFunctionResult, data=>{
//         const slowFunctionResult = data;
//         console.log('fast->slow', slowFunctionResult);
//     })
// })



// //Promise 형태
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



// //다른 표현 방법
// function fastFunction(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             const result = data*2;
//             console.log('fast!!', result);
//             resolve(result)
//         },1000)
//     })
// }
// function normalFunction(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             const result = data/2;
//             console.log('normal', result);
//             resolve(result);
//         }, 2000)
//     })
// }
// function slowFunction(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             const result = data+10;
//             console.log('slow..', result);
//             resolve(result)
//         },3000)
//     })
// }
// // fastFunction -> slowFunction
// const initialData = 10
// fastFunction(initialData).then(data=>{
//     // resole
//     console.log("then1:", data);
//     return slowFunction(data)
// }).then(data=>{
//     console.log('then2',data)
// })
// // slow->fast->fast->slow
// slowFunction(initialData).then(data=>{
//     console.log("then1:", data);
//     return fastFunction(data);
// }).then(data=>{
//     console.log("then2:", data);
//     return fastFunction(data);
// }).then(data=>{
//     console.log("then3:", data);
//     return slowFunction(data);
// }).then(data=>{
//     console.log("then4:", data);
// })
// slow->normal->fast
// const initialData = 100
// slowFunction(initialData).then(data=>{
//     console.log("then1:", data);
//     return normalFunction(data);
// }).then(data=>{
//     console.log("then2:", data);
//     return fastFunction(data);
// }).then(data=>{
//     console.log("then3:", data);
// })



// 가장 최근 방식
// async function은 Promise 객체이고, await는 Promise가 처리되기를 기다리는 키워드다.
// Promise.all() => 비동기 함수를 병렬적으로 모아서 작업하고 하나라도 reject 시 전체 reject
// Promise.race() => 하나라도 reject or resolve 시 종료
// Promise.allSettled() => 모든 비동기 함수의 reject 혹은 resolve를 기다림
// Promise.any() => 하나라도 성공할 때까지 기다림
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
async function fastFunction(data){
    await delay(1000);
    const result = data*2;
    console.log("fastFunction Done", result);
    return result
}
async function normalFunction(data){
    await delay(2000);
    const result = data/2;
    console.log("normalFunction Done", result);
    return result;
}
async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    console.log("slowFunction Done", result);
    return result;
}
async function runTasks(){
    let result = await fastFunction(100);
    result = await normalFunction(result);
    result = await slowFunction(result);
    result = await fastFunction(result);
    console.log("작업완료", result);
}
const result = runTasks()
console.log("runTask return", result);  
// normalFunction (2초 후 2로 나누는)을 async function 정의
// fast -> normal -> slow -> fast 결과 출력