// import readline from readline // esm (es module)7
const readline = require('readline');  // common.js

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let scores=" 90:30:80 ";
let [math, english, science] = scores.trim().split(":");

let average = Math.round((parseInt(math)+parseInt(english)+parseInt(science))/3 * 100)/100;

console.log(`평균 점수는 ${average}입니다.`)


function ask1(agree, yes, no){
    let a = agree()
    if (a){
        yes();
    } else { no();}   
}