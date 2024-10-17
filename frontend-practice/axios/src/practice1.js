//연습문제 1
import axios from 'axios';
import fs from 'fs';
import * as cheerio from 'cheerio';

async function bringQuotes(){
    let page=1;
    let resultArr = []
    const baseUrl = 'https://quotes.toscrape.com';
    while(true){
        const resp = await axios.get(`${baseUrl}/page/${page}`);
        const $ = cheerio.load(resp.data);

        if($('.col-md-8').text().includes('No quotes found!')){
            console.log('-------------end------------')
            break;
        }
        
        const $quoteTexts = $('.quote .text');
        const $authors = $('.quote .author');
        const $tags = $('.quote .tags');
    
        for (let i=0; i<$quoteTexts.length; i++){
            const quoteText = $($quoteTexts[i]).text();
            const author = $($authors[i]).text();
            const tags = $($tags[i]).find('.tag').map((i, elem)=>{
                return $(elem).text();
            }).get();
    
            resultArr.push({
                quote: quoteText,
                authorName: author,
                tags
            });
        }
        page+=1;
    }
    writeQuoteFile(resultArr);
    
}
function writeQuoteFile(result){
    const data = JSON.stringify(result);
    fs.writeFile('quotesFile', data, (err)=>{
        if(err){
            console.error(err);
        }
    })
}

bringQuotes();
