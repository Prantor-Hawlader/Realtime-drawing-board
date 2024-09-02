import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { LiveblocksProvider } from "@liveblocks/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <LiveblocksProvider throttle={16} authEndpoint="/api/liveblocks-auth">
        <Component {...pageProps} />
      </LiveblocksProvider>
    </React.StrictMode>
  );
}
export default App;
