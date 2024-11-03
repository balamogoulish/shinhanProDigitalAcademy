import axios from "axios";
import fs from "fs";
import * as cheerio from "cheerio";

async function main() {
  let stockArr = [];
  const response = await fetch(
    "https://finance.daum.net/api/charts/A005930/weeks?limit=4&adjusted=true",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "https://finance.daum.net/quotes/A005930",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );
  const data = await response.json();
  for (let i = 0; i < 3; i++) {
    const obj = data.data[i];
    stockArr.push(obj);
  }

  writeStockFile(stockArr); // fetch가 완료된 후 출력
}

function writeStockFile(result) {
  const data = JSON.stringify(result, null, 2);
  console.log(data);
  fs.writeFile("./stock.json", data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

main();
