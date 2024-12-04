import React, { useEffect } from 'react'
import TradeBox from '../../components/hero/TradeBox'
import { useConnectWallet } from '@web3-onboard/react';
import { useNavigate } from 'react-router-dom';
import { checkRegisterUser } from '../../components/contract/contractMethod';
import { toast } from 'react-toastify';
const Home02 = ({amount, setAmount}) => {


  const navigate = useNavigate();
  const [{ wallet }] = useConnectWallet();

  
  
  useEffect(() => {
    if (wallet) {
      handleRegisterUser(wallet)
    }
    else{
      navigate('/login')
    }

  }, [wallet]);

  const handleRegisterUser=async(wallet)=>{
    let _register= await checkRegisterUser(wallet)
    if(!_register){
      navigate('/login')
      toast.error("Please register first")
    }
  }
  return (
    <>
      <TradeBox amount={amount} setAmount={setAmount}/>
    </>
  )
}

export default Home02