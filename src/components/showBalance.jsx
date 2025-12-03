import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from "react"

export default function ShowBalance(){

    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML= balance / LAMPORTS_PER_SOL;
        }
    }
 
    useEffect(()=>{
        if(wallet.publicKey){
              getBalance(wallet.publicKey); }
        },[wallet.publicKey] )
    
    return (
        <div className="mb-8 text-black">
          <p className="text-1xl font-normal text-black" > SOL Balance: </p> <div id="balance"> </div>
        </div>
    )
}
