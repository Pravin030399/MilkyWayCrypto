// import './App.css'
import Axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/marketpage.css";

function Marketpage() {
  // Setting up the initial states using
  // react hook 'useState'
  const [text, setText] = useState("");
  const [crypto, setCrypto] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [markets, setMarkets] = useState([]);

  var list = {};
  var specifiedArr = [];
  var top3 = [];
  var low3 = [];
  // Fetching crypto data from the API only
  // once when the component is mounted
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=25&page=1&sparkline=false"
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

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1")
      .then((res) => {
        setMarkets(res.data);
        // for (var i in res.data) {
        //   list = {
        //     cryptName: res.data[i].name,
        //     cryptPerc: res.data[i].market_cap_change_percentage_24h,
        //   }
        //   specifiedArr.push(list)
        // }
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = crypto.filter((crypto) => {
        const regex = new RegExp(`${text}`, "gi");
        return crypto.name.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestion(matches);
    setText(text);
  };

  return (
    <div className="market">
      <h1>All Cryptocurrencies</h1>
      <input
        type="text"
        className="search"
        placeholder="Search By Name"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
        // onBlur={(e) => {
        //   setTimeout(() => {
        //     setSuggestion([])
        //   }, 100)
        // }}
      />
      {suggestion &&
        suggestion.map((suggestion, i) => (
          <div
            key={i}
            className="suggestion"
            onClick={() => onSuggestHandler(suggestion.name)}
          >
            {suggestion.name}
          </div>
        ))}
      <table>
        <thead className="table-header">
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Circulating Supply</td>
            <td>Volume(24hrs)</td>
            <td>24h %</td>
          </tr>
        </thead>
        {/* Mapping all the cryptos */}
        <tbody className="t-body">
          {/* Filtering to check for the searched crypto */}
          {crypto.map((val, id) => {
            var color = "";
            if (val.market_cap_change_percentage_24h > 0) {
              color = "green";
            } else {
              color = "red";
            }

            var nf1 = new Intl.NumberFormat();
            var marketCap = nf1.format(val.market_cap);

            var nf2 = new Intl.NumberFormat();
            var total_volume = nf2.format(val.total_volume);

            var nf3 = new Intl.NumberFormat();
            var circulating_supply = nf3.format(val.circulating_supply);

            return (
              <>
                <tr id={id}>
                  <td className="rank">{val.market_cap_rank}</td>
                  <td className="logo">
                    <img className="image" src={val.image}></img>
                    <p>{val.name}</p>
                  </td>
                  <td className="symbol">{val.symbol.toUpperCase()}</td>
                  <td>${marketCap}</td>

                  <td>${val.current_price}</td>
                  <td>{circulating_supply}</td>
                  <td>{total_volume}</td>
                  <td style={{ color: color }}>
                    {val.market_cap_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <h1 className="markets-header">Available Markets</h1>

      <table className="market-table">
        <thead className="table-header1">
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Image</td>
            <td>Trade Volume 24h</td>
            <td>Trust Score</td>
            <td>URL</td>
          </tr>
        </thead>

        <tbody className="t-body1">
          {/* Filtering to check for the searched crypto */}
          {markets.map((inp, id) => {
            // var color = ''
            // if (val.market_cap_change_percentage_24h > 0) {
            //   color = 'green'
            // } else {
            //   color = 'red'
            // }

            // var nf1 = new Intl.NumberFormat()
            // var marketCap = nf1.format(val.market_cap)

            // var nf2 = new Intl.NumberFormat()
            // var total_volume = nf2.format(val.total_volume)

            // var nf3 = new Intl.NumberFormat()
            // var circulating_supply = nf3.format(val.circulating_supply)

            return (
              <>
                <tr id={id}>
                  <td className="rank">{inp.trust_score_rank}</td>
                  <td className="logo">
                    <p>{inp.name}</p>
                  </td>
                  <td>
                    <img className="image" src={inp.image}></img>
                  </td>
                  <td className="symbol">{inp.trade_volume_24h_btc}</td>
                  <td>{inp.trust_score}</td>
                  <td>{inp.url}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function getMinMax() {}
export default Marketpage;
