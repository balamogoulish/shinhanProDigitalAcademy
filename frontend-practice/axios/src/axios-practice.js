import axios from 'axios';
import * as cheerio from 'cheerio';

//방법1
// axios.get('https://www.naver.com').then(response=>{
//     return response.data;
// }).then(data=>{
//     console.log(data)
// })

//방법2 => async await 사용
(async ()=>{
    const res = await axios.get('https://www.naver.com');
    const data = res.data;
    // console.log(data);

    const $ = cheerio.load(data);
    const $h1 = $('h1');
    console.log($h1,text());
    const $pTags = $('div').children('p');
    console.log($pTags.text());
    const url = $('a').prop('href');
    console.log('url')
})()