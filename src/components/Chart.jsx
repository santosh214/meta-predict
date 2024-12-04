import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title } from 'chart.js';
import ChartAnnotation from 'chartjs-plugin-annotation'; // Import the annotation plugin
import './chart.css'
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, ChartAnnotation);



const BitcoinPriceChart = () => {
  const [priceData, setPriceData] = useState([]); // Change to number[]
  const [labels, setLabels] = useState([]);
  const [livePrice, setLivePrice] = useState(null); // Use number for live price
  const [smoothPrice, setSmoothPrice] = useState(null); // For smooth live price updates
  const chartRef = useRef(null); // Use 'any' for the chart reference

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
  
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const currentPrice = parseFloat(message.p).toFixed(2); // Get price as string with 2 decimals
      const currentPriceNum = parseFloat(currentPrice); // Convert it to a number
  
      setPriceData((prevData) => {
        const updatedData = [...prevData, currentPriceNum]; // Use number for price data
        if (updatedData.length > 50) updatedData.shift(); // Limit data points
        return updatedData;
      });
  
      setLabels((prevLabels) => {
        const updatedLabels = [...prevLabels, new Date().toLocaleTimeString()];
        if (updatedLabels.length > 50) updatedLabels.shift();
        return updatedLabels;
      });
  
      // Smooth the transition of live price
      setSmoothPrice((prevPrice) => {
        if (prevPrice !== null) { // Ensure prevPrice is not null before performing calculation
          const difference = currentPriceNum - prevPrice;
          const smoothingFactor = 0.000001; // Small factor to make the line move slowly
          return prevPrice + difference * smoothingFactor;
        } else {
          return currentPriceNum; // Initialize the smooth price on first load
        }
      });
  
      setLivePrice(currentPriceNum); // Set live price as number
    };
  
    return () => ws.close(); // Cleanup on component unmount: ChartData<'line', number[], string>
  }, [smoothPrice]); // Dependencies array
  

  const data = { // Explicitly type ChartData
    labels,
    datasets: [
      {
        label: 'Bitcoin Price (USDT)',
        data: priceData, // Use number[] for data
        borderColor: '#F4D56F', // Line color for the price data
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1, // Reduce tension for smoother line movement
        cubicInterpolationMode: 'monotone', // Use monotone interpolation for smooth curves
      },
    ],
  };

  const options= {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          // You can add annotation logic here if needed
        ],
      },
    },
    scales:{
      y:{
        display:false
      },
      x:{
        display:false
      }

    }
    // scales: {
     
    //   y: {
    //     display: true,
    //     position: 'right',
    //     grid: {
    //       borderDash: [5, 5], // Dotted line style for grid
    //     },
    //     ticks: {
    //       padding: 10, // Add space between the ticks and the chart
    //     },
    //   },
    // } as Record<string, ScaleOptions>, // Explicitly cast scales as a Record<string, ScaleOptions>
  };

  const getLastPointPosition = () => {
    if (chartRef.current) { // Access the Chart instance directly
      const chartInstance = chartRef.current;
      const lastIndex = priceData.length - 1;
      if (lastIndex >= 0) {
        const meta = chartInstance.getDatasetMeta(0); // Get dataset metadata
        const lastPoint = meta.data[lastIndex];
        if (lastPoint) {
          const position = {
            x: lastPoint.getProps(['x']).x,
            y: lastPoint.getProps(['y']).y,
          };
          return position;
        }
      }
    }
    return null;
  };

  const lastPointPosition = getLastPointPosition();

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Line ref={chartRef} data={data} options={options} />
        
        {livePrice && lastPointPosition && (
          <div
            className="price-indicator"
            style={{
              position: 'absolute',
              left: `calc(${lastPointPosition.x}px - 131px)`, // Adjust left positioning if needed
              top: `calc(${lastPointPosition.y}px - -50px)`, // Adjust top positioning if needed
              transform: 'translateY(-100%)', // Move it slightly up
              backgroundColor: 'white', // Box background color
              padding: '10px 10px', // Padding around the text
              borderRadius: '5px', // Round corners
              border: '1px solid black', // Border color for the box
              color: 'black', // Text color for the price
              fontWeight: 'bold', // Make the price text bold
              textAlign:'center',
              fontSize:'0.9rem'
            }}
          >
            <span style={{
              padding:'0px',
            }}>

            LIVE BITCOIN
            </span>
            <br />
            <span style={{
              fontWeight:600,
              fontSize:'1.3rem',
              backgroundColor:''
}}>


             ${livePrice}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BitcoinPriceChart;
