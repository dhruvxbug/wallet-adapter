import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import AirDrop from './components/RequestAirDrop';
import ShowBalance from './components/showBalance';
import SignMessage from './components/SignMessage';
import { SendToken } from './components/SendToken';
import Navbar from './components/Navbar';

const Wallet = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
        ], [network]
    );

    return (
    <div className="relative min-h-screen w-full flex flex-col  items-center justify-center overflow-hidden"> 
            <div className="relative z-10 w-full flex flex-col items-center text-white justify-center">
                  <ConnectionProvider endpoint={endpoint}>
                        <WalletProvider wallets={wallets} autoConnect>
                            <WalletModalProvider>
                                      <Navbar/>
                                <AirDrop/>
                                <ShowBalance/>
                                <SignMessage/>
                                <SendToken/>
                            </WalletModalProvider>
                        </WalletProvider>
                    </ConnectionProvider>
                </div>
            </div>
    );
};

export default Wallet