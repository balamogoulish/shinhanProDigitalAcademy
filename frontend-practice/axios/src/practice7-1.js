import axios from "axios";
import * as cheerio from 'cheerio'

async function main(){
    let result = []
    
    for(let i=1;i<100;i+=10){
        const baseUrl = `https://s.search.naver.com/p/newssearch/search.naver?start=${i}&cluster_rank=25&de=&ds=&eid=&field=0&force_original=&is_dts=0&is_sug_officeid=0&mynews=0&news_office_checked=&nlu_query=&nqx_theme=%7B%22theme%22%3A%7B%22main%22%3A%7B%22name%22%3A%22finance%22%7D%2C%22sub%22%3A%5B%7B%22name%22%3A%22encyclopedia%22%7D%5D%7D%7D&nso=%26nso%3Dso%3Ar%2Cp%3Aall%2Ca%3Aall&nx_and_query=&nx_search_hlquery=&nx_search_query=&nx_sub_query=&office_category=0&office_section_code=0&office_type=0&pd=0&photo=0&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80&query_original=&service_area=0&sort=0&spq=0&where=news_tab_api&nso=so:r,p:all,a:all&_callback=jQuery112409933262157381983_1729228665301&_=1729228665302`
        const response = await axios.get(baseUrl);
        
        const objString = response.data.slice("jQuery112409933262157381983_1729228665301".length+1, -2);
        const obj = JSON.parse(objString);
        const contents = obj.contents;

        for(let item of contents){
            const $ = cheerio.load(item);
            const title = $('.news_tit').text();
            const url = $('.news_tit').prop('href');
            const desc = $('.news_dsc').text();
            result.push({
                title,
                url,
                desc
            })  
        }
    }
    console.log(result)
}
main();