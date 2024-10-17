import axios from 'axios';
import fs from 'fs';
import * as cheerio from 'cheerio';
const url = 'https://search.daum.net/search?w=news&nil_search=btn&DA=PGD&enc=utf8&cluster=y&cluster_page=2&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4&p=';

async function bringNews(){
    let newses = [];

    // for(let page=1; page<4; page++){
        // const response = await axios.get(`${url}${page}`);
        const response = await axios.get(`${url}1`);
        const $ = cheerio.load(response.data);
        const resultArr1 = $('.c-list-basic').children('li').map((i, elem)=>{
            const newspaper = $(elem).find('.c-tit-doc .tit_item').text();
            const $title = $(elem).find('.tit-g');
            const url = $('a', $title).prop('href');
            const desc = $(elem).find('.conts-desc').text();
            const date = $(elem).find('.gem-subinfo .txt_info').text();
            const imageUrl = $(elem).find('.c-item-content .thumb_bf img').attr('data-original-src');
            if (url==null) return null
            return{
                newspaper,
                'title': $title.text(),
                url,
                desc,
                date,
                imageUrl
            }    
            
        }).get();
        newses.push(resultArr1);
    // }
    console.log(newses)
    writeNewsFile(newses)
}
function writeNewsFile(result){
    const data = JSON.stringify(result);
    fs.writeFile('newsFile', data, (err)=>{
        if(err){
            console.error(err);
        }
    })
}

bringNews();