import axios from 'axios'
import * as cheerio from 'cheerio'
import iconv from 'iconv-lite'
async function main() {
    let result = [];
    for (let pageNum = 1; pageNum <= 3; pageNum++) {
        const baseUrl = `https://finance.naver.com/item/news_notice.naver?code=005930&page=${pageNum}`
        const headers = {
            'User-Agent': 'Mozilla/5.0'
        }
        const rep = await axios({
            method:'get',
            url:baseUrl,
            responseType:'arraybuffer',
            headers:headers
        });
        const decodedData = iconv.decode(Buffer.from(rep.data), 'euc-kr');

        const $ = cheerio.load(decodedData);
        const resultArr = $('tbody').children('tr').map((idx, elem)=>{
            const title = $(elem).find('.title').text();
            const info = $(elem).find('.info').text();
            const date = $(elem).find('.date').text();
            if (title==null){
                return null
            } else{
                return {
                    title,
                    info,
                    date
                }
            }
        }).get()
        result.push(resultArr);
    }
    console.log(result);
}
main()