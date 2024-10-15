function hello(n){
    for(let i=0; i<n; i++){
        console.log('안녕')
    }
}
function star1(n){
    for(let i=0; i<n; i++){
        console.log('*'.repeat(i+1))
    }
}
function star2(n){
    for(let i=n; i>0; i--){
        console.log('*'.repeat(i))
    }
}

let x = [3,6,9,20,-7,5]
for(let i=0;i<x.length;i++){
    x[i]=x[i]*10;
    console.log(x[i]);
}

let y = {'math':70, 'science':80, 'english':20};
for(let key in y){
    y[key]+=10
}
console.log(y)

let num1 = prompt('정수를 입력해주세요:')
calc1(num1)
function calc1(n){
    for(let i=1; i<10; i++){
        console.log(`${n}*${i} = ${n*i}`)
    }
}

let word = ["school", "game", "piano", "science", "hotel", "mountain"]
let word1 = [];
for(i=0;i<word.length;i++){
    if (word[i].length>=6){
        word1.push(word[i]);
    }
}
console.log(word1);

for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(`${i}*${j} = ${i*j}`)
    }
}


let num2 = prompt('정수를 입력해주세요:')
calc2(num2)
function calc2(n){
    for(let i=1; i<=n; i++){
        if(i%3==0 && i%5==0){
            console.log(`3과 5의 공배수: ${i}`)
        } else if(i%3==0){
            console.log(`3의 배수: ${i}`)
        } else if(i%5==0){
            console.log(`5의 배수: ${i}`)
        } else{
            console.log(i)
        }
    }
}

let n =0
do{
    n = prompt('100보다 큰 숫자를 입력하세요:')
}while(n<=100)


function limitCalls(func, n) {
    let count = 0;
    return function() {
        if (count < n) {
            count++;
            return func();
        }
    };
}
    
const limitedHello = limitCalls(() => 
    console.log("Hello!"), 2
);
limitedHello(); // "Hello!" 
limitedHello(); // "Hello!"
limitedHello(); // 아무일도 일어나지 않음