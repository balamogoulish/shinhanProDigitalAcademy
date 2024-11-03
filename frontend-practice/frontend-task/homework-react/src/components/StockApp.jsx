import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function StockApp() {
  const [stocksArr, setStocksArr] = useState([]);
  useEffect(() => {
    async function BringStocks() {
      const response = await axios.get("http://localhost:5173/data/stock.json");
      const data = response.data;
      setStocksArr(data)
    }
    BringStocks();
    console.log(stocksArr)
  }, []);

  return (
    <div>
      <h1>Stocks</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>날짜</th>
              <th>종가</th>
              <th>시가</th>
              <th>고가</th>
              <th>저가</th>
              <th>거래대금</th>
            </tr>
          </thead>
          <tbody>
            
              {stocksArr.map((el, id)=>{
                return(
                <tr key={id}>
                  <td>{el.date}</td>
                  <td>{el.tradePrice}</td>
                  <td>{el.openingPrice}</td>
                  <td>{el.highPrice}</td>
                  <td>{el.lowPrice}</td>
                  <td>{el.candleAccTradePrice}</td>
                </tr>)
              })}
              
            
          </tbody>
        </Table>
      </div>
    </div>
  );
}
