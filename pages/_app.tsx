import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider, coinbaseConfig, embeddedWalletConfig, metamaskConfig, rainbowConfig, walletConnectConfig, zerionConfig } from "thirdweb/react";

const client = createThirdwebClient({
  clientId: "cf8eb300bba906c5f7325405d00452a0",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider client={client} wallets={[
      metamaskConfig(),
      coinbaseConfig(),
      walletConnectConfig(),
      rainbowConfig(),
      zerionConfig(),
      embeddedWalletConfig()
    ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
