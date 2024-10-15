const KEY = "SAMPLE";
let johnProfile = {
    name:"John",
    sayHi: function(){
        console.log(this.name, ": 안녕!!"
        )
    },
    [KEY]: "sampleValue",
}
console.log(johnProfile.name);
johnProfile.sayHi();
console.log(johnProfile["sayHi"]);
console.log(johnProfile.SAMPLE)


// let jsonData = '{"key":"value"}'
let jsonData = "{'key'}"
try {
    const data = JSON.parse(jsonData);
    console.log(data);
    console.log(data.key);
} catch (error) {
    // console.error(error);
    if(error instanceof SyntaxError){
        console.log('syntaxError');
    } else if(error instanceof RangeError){
        console.log('RangeError');
    }
}
