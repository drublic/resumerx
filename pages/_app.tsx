import React, { FunctionComponent } from "react";
import "../lib/index.css";

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
