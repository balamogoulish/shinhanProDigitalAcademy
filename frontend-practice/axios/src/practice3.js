import axios from 'axios';
import fs from 'fs';
import * as cheerio from 'cheerio';
const url = 'https://search.daum.net/search?w=news&nil_search=btn&DA=PGD&enc=utf8&cluster=y&cluster_page=2&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4&p=';

async function bringNewsDetail(){
    const response = await axios.get(`${url}1`);
    const $ = cheerio.load(response.data);
    const $news = $('.c-list-basic').children('li')[1]
    const detailUrl = $($news).find('.item-title a').prop('href');
        
    const detailRes = await axios.get(detailUrl);
    const $detail = cheerio.load(detailRes.data);
    writeNewsDetailFile($detail.html());
}
function writeNewsDetailFile(result){
    const data = result
    fs.writeFile('newsDetailFile.html', data, (err)=>{
        if(err){
            console.error(err);
        }
    })
}

bringNewsDetail();