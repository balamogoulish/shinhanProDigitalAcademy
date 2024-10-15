function practice_105(s1, s2, s3){
    if (0<=s1 && s1<=100 && 0<=s2 && s2<=100 && 0<=s3 && s3<=100){
        if (s1>=65 && s2>=65 && s3>=65){
            console.log('합격')
        }else{
            console.log('불합격')
        }
    }
    else{
        console.log('잘못된 점수가 입력되었습니다.')
    }
}

//홀짝 판별기
function oddEven(){
    let n = prompt('정수를 입력해주세요: ');
    if (n%2==0){
        console.log(`입력하신 ${n}은 짝수입니다.`)
    }else{
        console.log(`입력하신 ${n}은 홀수입니다.`)
    } 
}

// 브라우저 판별기
function whichBrowser(browser){
    const otherBrowsers = ["Chrome", "FireFox", "Safari", "Opera"]
    if (browser==='Edge'){
        console.log("Edge를 사용하고 계시네요!");
    } else if (otherBrowsers.includes(browser)){
        console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
    } else {
        alert("현재 페이지가 괜찮아 보이길 바랍니다!")
    }
}
