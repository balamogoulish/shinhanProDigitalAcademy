import axios from "axios";
import fs from "fs";
import * as cheerio from "cheerio";

async function main() {
  let resultObj = {};
  const dateArr = [
    ["20241007000000", "20241011235959"],
    ["20241014000000", "20241018235959"],
    ["20241021000000", "20241025235959"],
  ];

  for (let date of dateArr) {
    const response = await axios.get(
      `https://search.daum.net/search?w=news&cluster=y&q=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90&sd=${date[0]}&ed=${date[1]}&period=u&DA=STC`
    );
    const $ = cheerio.load(response.data);
    const $newsArr = $(".c-list-basic");
    const result = $newsArr
      .children("li")
      .map((id, el) => {
        const title = $(el).find(".item-bundle-mid .item-title a").text();
        const url = $(el).find(".item-bundle-mid .item-title a").attr("href");
        if (title == "") {
          return null;
        } else {
          return { title, url };
        }
      })
      .get();
    const key = date[1];
    resultObj[key.slice(0, 4) + "-" + key.slice(4, 6) + "-" + key.slice(6, 8)] =
      result;
  }
  writeNewsFile(resultObj);
}

function writeNewsFile(result) {
  const data = JSON.stringify(result, null, 2);
  console.log(data);
  fs.writeFile("./news.json", data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

main();
