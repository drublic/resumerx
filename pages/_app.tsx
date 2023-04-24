import React, { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../lib/index.css";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />

      <Analytics />
    </>
  );
};

export default MyApp;
