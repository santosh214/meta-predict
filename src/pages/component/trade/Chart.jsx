import React, { useEffect, useState } from "react";
import "./chart.css";

export default function Chart({ poolStatus }) {
  // console.log("🚀 ~ Chart ~ poolStatus:", poolStatus);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [lastFinalPrice, setLastFinalPrice] = useState(0);
  const [startPrice, setStartPrice] = useState(0);
  const [resultClass, setResultClass] = useState('')
  const [result, setResult] = useState('');
  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const price = parseFloat(message.p).toFixed(2); // Get price as string with 2 decimals
      setCurrentPrice(price); // Update current price state
    };

    return () => ws.close(); // Cleanup the WebSocket on component unmount
  }, []);

  const initialPrice = parseFloat(poolStatus?.initialPrice) || 0; // Fallback to 0 if undefined
  const currentPriceNum = parseFloat(currentPrice) || 0; // Fallback to 0 if undefined

  // Determine CSS class based on price comparison
  const currentPriceClass = currentPriceNum < initialPrice
    ? "price-red"
    : "price-green";





  useEffect(() => {
    if (poolStatus.status === "Betting Started") {
      if (startPrice > lastFinalPrice) {
        setResult("Down wins"); // Price decreased, so "Down wins"
        setResultClass("result-down");
      } else if (startPrice < lastFinalPrice) {
        setResult("Up wins"); // Price increased, so "Up wins"
        setResultClass("result-up");
      } else {
        setResult("No wins"); // Prices are the same
        setResultClass("result-neutral");
      }
    }
    if (poolStatus?.status === "Observing Price") {
      setLastFinalPrice(poolStatus?.finalPrice)
      setStartPrice(poolStatus?.initialPrice)
    }

    return () => {

    }
  }, [poolStatus])


  return (
    <section className="mychart">
      <div className="container-fluid mt-0 mt-md-5 py-0">
        <div className="row text-center">
          {/* Initial Price */}
          <div className="col-md-12  col-lg-3 col-sm-12">
            <h4 className="myfont">INITIAL PRICE</h4>
            <p className="price-display">{`$${initialPrice}`}</p>
          </div>

          {/* Current Price */}
          <div className="col-md-12 col-lg-6 col-sm-12">
            <h2 className="myfont">CURRENT PRICE</h2>
            <p
              className={`digital-clock ${currentPriceClass}`}
              style={{ border: "2px dashed" }}
            >
              {currentPrice ? `$${currentPrice}` : "Fetching..."}
            </p>
            {poolStatus.status === "Betting Started" ?(
              <div className={`result-box ${resultClass}`}>
                <p className="m-0">{result}</p>
              </div>
            ):(
              <div className={`result-box2 `}>
                {/* <p>{result}</p> */}
              </div>
            )
          
          }
          </div>

          {/* Final Price */}
          <div className="col-md-12 col-lg-3 col-sm-12">
            <h4 className="myfont">FINAL PRICE</h4>
            <p className="price-display">{`$${poolStatus.finalPrice}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
