import Axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/marketpage.css";

function DataBottom() {
  // Setting up the initial states using
  // react hook 'useState'
  const [crypto, setCrypto] = useState([]);

  var list = {};
  var specifiedArr = [];
  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=false"
    )
      .then((res) => {
        setCrypto(res.data);
        for (var i in res.data) {
          list = {
            cryptName: res.data[i].name,
            cryptPerc: res.data[i].market_cap_change_percentage_24h,
          };
          specifiedArr.push(list);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(crypto.slice(0, 9));
  var tempCrypArr = [];
  var top10Arr = [];
  var btm10Arr = [];
  for (var i in crypto) {
    tempCrypArr.push(crypto[i].market_cap_change_percentage_24h);
  }
  tempCrypArr.sort(function (a, b) {
    return a - b;
  });
  btm10Arr = tempCrypArr.slice(0, 9);
  top10Arr = tempCrypArr.reverse().slice(0, 9);

  console.log(top10Arr);
  console.log(btm10Arr);

  var top10 = [];

  for (var i in btm10Arr) {
    let listTop10 = {};
    for (var j in crypto) {
      if (crypto[j].market_cap_change_percentage_24h === btm10Arr[i]) {
        console.log(crypto[j].name);
        listTop10["image"] = crypto[j].image;
        listTop10["name"] = crypto[j].name;
        listTop10["percentage"] = btm10Arr[i];
        listTop10["price"] = crypto[i].current_price;
        top10.push(listTop10);
      }
    }
  }
  return (
    <div className="market">
      <table>
        <thead className="table-header">
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Percentage</td>
          </tr>
        </thead>
        {/* Mapping all the cryptos */}
        <tbody className="t-body">
          {/* Filtering to check for the searched crypto */}
          {top10.map((val, id) => {
            var color = "";
            if (val.percentage > 0) {
              color = "green";
            } else {
              color = "red";
            }

            // var nf3 = new Intl.NumberFormat();
            // var circulating_supply = nf3.format(val.circulating_supply);
            return (
              <>
                <tr id={id}>
                  <td className="logo">
                    <img className="image" src={val.image} alt="" />
                    <p>{val.name}</p>
                  </td>
                  <td>${val.price}</td>
                  <td style={{ color: color }}>{val.percentage.toFixed(2)}%</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DataBottom;
