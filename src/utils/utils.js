import { ethers } from "ethers";

export const shortddres = (address) => {
  if (!address) {
    return '-'
  }
  return address.slice(0, 5) + "..." + address.slice(-5);
};

export const convertTowei = (amount) => {
    try {
      if(!amount){
        return 0
      }
      // Ensure the input is a string
      const amountStr = typeof amount === "string" ? amount : amount.toString();
  
      return parseFloat(ethers.utils.formatEther(amountStr)).toFixed(1);
    } catch (error) {
      console.log("🚀 ~ convertToWei ~ error:", error);
      return 0;
    }
  };

  export const convertToBigInt = (amount) => {
    try {
      return BigInt(amount);

    } catch (error) {
      console.error("🚀 ~ convertTowei ~ error:", error);
      return BigInt(0);
    }
  };

  export function ellipsizeMiddleText(text, maxLength = 30) {
    if (text.length <= maxLength) return text;
    const start = text.slice(0, maxLength / 2 - 2);
    const end = text.slice(-maxLength / 2 + 2);
    return `${start}...${end}`;
  }
  

  export const convertTotalAmount = (amount) => {
    try {
      if (!amount) {
        return 0;
      }
  
      // Convert the amount to a BigNumber instance
      const amountBigNumber = ethers.utils.parseEther(amount.toString());
  
      // Format the BigNumber to Ether and return as a string with 3 decimals
      return parseFloat(ethers.utils.formatEther(amountBigNumber)).toFixed(4);
    } catch (error) {
      console.log("🚀 ~ convertToWei ~ error:", error);
      return 0;
    }
  };