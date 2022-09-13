import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import Loader from "../components/elements/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
  }, []);

  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", () => {
    console.log("routeChangeError");
  });

  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
