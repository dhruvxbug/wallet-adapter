import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <nav className="fixed top-4 z-50 mx-auto min-w-md left-1/2 -translate-x-1/2 rounded-full border border-slate-700/60 bg-black px-6 py-2 shadow-xl backdrop-blur-md">
      <div className="flex items-center space-between justify-between gap-6">
        <div className=" flex item-center text-xl  font-semibold text-white">
          NoobWallet
        </div>

       <div className="flex items-center gap-4 mx-auto">
         <ul className=" flex gap-4 text-s font-medium text-slate-200">
          <li>
            <a href="#projects" className="hover:text-sky-300 transition-colors">
              Swap
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-300 transition-colors">
              Create
            </a>
          </li>
          <li>
            <a href="#Airdrop" className="hover:text-sky-300 transition-colors">
              Airdrop
            </a>
          </li>
        </ul>
       </div>

       <div className='flex gap-1'>
        <WalletMultiButton />
       </div>
      </div>
    </nav>
  );
};

export default Navbar;