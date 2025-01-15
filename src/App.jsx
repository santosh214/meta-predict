import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import LeftBox from './components/leftbox/LeftBox'
import RightBox from './components/rightbox/RightBox'
import { SidebarProvider } from './components/sidebar/SidebarContext'
import SidebarMenu from './components/sidebar/SidebarMenu'
import { Routes, Route } from 'react-router-dom';
import routes from './pages'
import './App.css'
import injectedModule from '@web3-onboard/injected-wallets'

import Home02 from './pages/views/Home02'
import Wallet from './components/walletpopup/Wallet'
import { init, Web3OnboardProvider } from '@web3-onboard/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";

const apiKey = "1730eff0-9d50-4382-a3fe-89f0d34a2070";
const injected = injectedModule();
const web3Onboard = init({
  apiKey,
  wallets: [injected],
  chains: [

    {
      id: "1131",
      token: "OZO",
      label: "Ozone",
      rpcUrl: "https://chain.ozonescan.com/",
    },
    {
      id: "0x1234",
      token: "OZO",
      label: "Ozone Testnet",
      rpcUrl: "https://aws.testnet.ozonescan.org/rpc",
    },
    {
      id: "0x460",
      token: "OZO",
      label: "Ozone Testnet",
      rpcUrl: "https://ozonescan.org/rpc",
    },
    // {
    //   id: "0x460",
    //   token: "OZO",
    //   label: "OZONE MAINNET 2.0",
    //   rpcUrl: "https://ozonescan.org/rpc",
    // },
  ],
  appMetadata: {
    name: 'Meta Predict',
    // icon: '<svg>Your SVG Icon</svg>', // Replace with your SVG icon
    description: 'Meta Ozone'
  }
});

function App() {
  const [amount, setAmount] = useState(0.1)

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
      delay:450
    });
  }, []);
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ToastContainer />
      <div className="main_section">
        <div className="trade_page">
          <Routes>
            {
              routes.map((data, idx) => (
                <Route key={idx} path={data.path} exact element={<data.component />} />
              ))
            }
          </Routes>
          <SidebarProvider>
            <Routes>
              <Route path='/game' element={
                <>
                <Header />
                  <Wallet />
                  <SidebarMenu />
                  <div className="contents">
                    <LeftBox amount={amount} setAmount={setAmount} />
                    <Home02 amount={amount} setAmount={setAmount} />
                    <RightBox amount={amount} setAmount={setAmount} />
                  </div>
                </>
              } />
            </Routes>
          </SidebarProvider>
        </div>
      </div>
    </Web3OnboardProvider>
  )
}

export default App
