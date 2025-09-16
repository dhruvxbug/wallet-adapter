import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import AirDrop from './components/RequestAirDrop';
import ShowBalance from './components/showBalance';
import SignMessage from './components/SignMessage';
import { SendToken } from './components/SendToken';
import Silk from './components/Silk';


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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Silk background */}
            <div className="absolute inset-0 -z-10 w-full h-full">
                <Silk
                  speed={10}
                  scale={1.2} // Increased scale for more height
                  color="#753ffdff"
                  noiseIntensity={5}
                  rotation={0}
                />
            </div>
            {/* Foreground content with glass card */}
            <div className="relative z-10 w-full flex flex-col items-center text-white justify-center">
                <div className="glass-card bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-100 max-w-2xl w-full px-8 py-10 rounded-2xl bg-white/10  border border-white/30 shadow-xl flex flex-col items-center">
                    <ConnectionProvider endpoint={endpoint}>
                        <WalletProvider wallets={wallets} autoConnect>
                            <WalletModalProvider>
                                <h1 className="text-4xl font-head font-bold text-black mb-8">Simple Wallet Adapter</h1>
                                <div className='flex items-center gap-4 mb-6'>
                                    <WalletMultiButton />
                                    <WalletDisconnectButton />
                                </div>
                                <AirDrop/>
                                <ShowBalance/>
                                <SignMessage/>
                                <SendToken/>
                            </WalletModalProvider>
                            <div className="mt-12">
                                <h4 className="text-lg text-black">
                                    Made by <a href="https://x.com/dhruvxbug" className="text-black hover:text-yellow-100 underline font-medium">Dhruv</a>
                                </h4>
                            </div>
                        </WalletProvider>
                    </ConnectionProvider>
                </div>
            </div>
        </div>
    );
};

export default Wallet