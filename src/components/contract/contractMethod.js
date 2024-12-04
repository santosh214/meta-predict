import { affiliate } from "./affiliate";

export const checkRegisterUser=async(wallet)=>{
    try {
        const contractInst = await affiliate(wallet?.provider);
        let tx = await contractInst.isRegistered(wallet?.accounts[0].address);
        // console.log("🚀 ~ checkRegisterUser ~ tx:", tx)
        return tx
    } catch (error) {
        console.log("🚀 ~ checkRegisterUser ~ error:", error)
        return false
    }
}   

