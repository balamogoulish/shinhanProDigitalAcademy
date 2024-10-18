import axios from "axios";
import * as cheerio from 'cheerio'

async function main(){
    let result = []
    for (let i=1; i<=20; i+=10){
        const response = await axios.get(`https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=1000&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80&start=${i}`)
        
        const $ = cheerio.load(response.data);
        const $newsList = $('.list_news');
        
        $newsList.children('li').map((idx,elem)=>{
            const title = $(elem).find('.news_area .news_tit').text();
            const newspaper = $(elem).find('.info_group .info.press').text();
            const description = $(elem).find('.news_dsc').text();
            const imageUrl = $(elem).find('.news_contents .dsc_thumb img').attr('data-lazysrc');
            // console.log($(elem).find('.news_contents').html())

            result.push({
                title,
                newspaper,
                description,
                imageUrl
            })

        })
    }
    console.log(result)
}
main();