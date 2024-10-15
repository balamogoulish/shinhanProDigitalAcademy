let sample = [1,2,3,'a','b','c'];
// let sample1 = sample.forEach(function(item, index, array){
//     console.log(item)
//     console.log(index)
//     console.log(array)
//     console.log("------------------------")
// })

let sample2 = sample.map(function(item, index, array){
    //map 함수는 인자를 함수로 받고 return값을 모아 새로운 배열을 반환한다.
    return item*10;
})

let sample3 = sample.filter(function(item, index, array){
    if(item>1){return true;}
    else {return false;}
})

let sample4 = sample.concat(6, 7, 8)
console.log(sample4);