const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fastFunction(data){
    await delay(1000);
    return data * 2;
}
async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    return result;
}
async function normalFunction(data){
    await delay(2000);
    return data / 2;
}
async function runTaskAll(){ //모두 resolve 시 반환
    const result = Promise.all(
        [slowFunction(10), normalFunction(20)]
    ).then(([result1, result2])=>{
        console.log("작업완료1", result1)
        console.log("작업완료2", result2)
    })
}
async function runTaskRace(){ //먼저 resolve 시 반환
    const result = Promise.race(
        [slowFunction(10), normalFunction(10)]
    ).then((result1)=>{
        console.log("작업완료", result1)
    })
}
async function runTaskAllSettled(){ //모두 resolve or reject 시 반환
    const result = Promise.allSettled(
        [slowFunction(10), normalFunction(10)]
    ).then((results)=>{
        console.log("작업완료", results)
    })
}
async function runTaskAny(){ //모두 resolve or reject 시 반환
    const result = Promise.any(
        [slowFunction(10), normalFunction(10)]
    ).then((result)=>{
        console.log("작업완료", result)
    })
}


// fastFunction(10).then(data=>{
//     console.log("1-1번째 수행")
//     return slowFunction(data);
// }).then(result=>{
//     console.log("1-2번째 수행")
// })

// fastFunction(10).then(data=>{
//     console.log("2-1번째 수행")
//     return slowFunction(data);
// }).then(result=>{
//     console.log("2-2번째 수행")
// })