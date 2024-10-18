import axios from 'axios'

async function main() {
    let items = []

    const response = await axios.post("https://service.wadiz.kr/api/search/funding",
        {
            "limit": 100,
            "order": "recommend"
        },
        {
            "accept": "*/*",
            "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://www.wadiz.kr/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
        
    )
    const list = (response.data.data.list);
    for(let i=0; i<list.length; i++){
        const title = list[i].title;
        const nickName = list[i].nickName;
        const achievementRate = list[i].achievementRate;
        const totalBackedAmount = list[i].totalBackedAmount;
        const remainingDay = list[i].remainingDay;
        const badgeUrls = list[i].badgeUrls;

        items.push({
            title,
            nickName,
            achievementRate,
            totalBackedAmount,
            remainingDay,
            badgeUrls
        })
    }
    console.log(items)

}
main()