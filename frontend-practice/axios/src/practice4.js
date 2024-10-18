import axios from 'axios'
import * as cheerio from 'cheerio'

async function main() {
    let result = []
    for (let pageNum = 1; pageNum <= 1; pageNum++) {
        const baseUrl = `https://finance.naver.com/item/sise_day.naver?code=005930&page=${pageNum}`
        const headers = {
            'User-Agent': 'Mozilla/5.0'
        }
        const rep = await axios({
            method:'get',
            url:baseUrl,
            responseType:'arraybuffer',
            headers:headers
        });
        const $ = cheerio.load(rep.data);
        const resultArr = $('tbody').children('tr').map((id_row, row)=>{
            if($(row).find('td .tah').text()==''){
                return null;
            }
            else{
                let cost = [];
                const $value = $(row).find('td .tah').map((idx_col, col)=>{
                    cost.push($(col).text().trim());
                })
                return {
                    '날짜':cost[0],
                    '종가':cost[1],
                    '전일비':cost[2],
                    '시가':cost[3],
                    '고가':cost[4],
                    '저가':cost[5],
                    '거래량':cost[6]
                }
            }
        }).get();
        result.push(resultArr);
    }
    console.log(result)
}
main()