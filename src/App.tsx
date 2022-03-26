import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import Home from "./Home"
import StakeButton from "./StakeButton"
import Landing from "./components/Landing"
import About from "./components/About"
import Roadmap from "./components/Roadmap"
import Creators from "./components/Creators"
import Footer from "./components/Footer"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );
  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <div className='gradient2'>
            <Landing />
            <Home
              candyMachineId={candyMachineId}
              connection={connection}
              startDate={startDateSeed}
              txTimeout={txTimeoutInMilliseconds}
              rpcHost={rpcHost}
            />
						<div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
							<CrossmintPayButton
								collectionTitle="FUNGUYZ"
								collectionDescription="3,000 happy-go-lucky mushrooms born on the Solana blockchain. Come join the 'Fun Fam' with the best mushrooms in the Metaverse!"
								collectionPhoto=""
								clientId="fc4781f3-15f3-4003-adb7-ebcad2786c2d"
							/>
						</div>
						<StakeButton />	
            <About />
            <Roadmap />
            <Creators />
            <Footer />
            </div> 
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;