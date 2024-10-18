import axios from 'axios'
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer'

const baseUrl = `https://www.wadiz.kr/web/wreward/main`

async function main() {
    //puppeteer 동적 크롤링
    const browser = await puppeteer.launch(); //크로미움으로 브라우저 엶
    const page = await browser.newPage(); //페이지 열기
    await page.goto(baseUrl); //링크 이동
    const content = await page.content(); //html 정보 가져옴
    await page.close(); //page 닫기
    await browser.close(); //browser 닫기

    const $ = cheerio.load(content);
    const items = $('.TableLayout_container__1_Ap4').find('.HomeHorizontalCard_info__2MokD').map((idx, elem)=>{
        const name = $(elem).find('.Title_title__3kHxQ').text();
        const makerName = $(elem).find('.MakerWrapper_makerName__131I-').text();
        const achievePercent = $(elem).find('.InfoStringWrapper_infoString__2HtEW HomeHorizontalCard_infoStringWrapper__3e4Mw').text();
        const rewardBadge = $(elem).find('.LabelBadge_badge__O5qDI').text().split('+');
        const cost = rewardBadge[0];
        const leftDate = rewardBadge[1];

        return {
            name,
            makerName,
            achievePercent,
            cost,
            leftDate
        }
    }).get();
    console.log(items);
}
main()