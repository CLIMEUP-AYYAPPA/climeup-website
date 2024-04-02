import "../styles/globals.css";
import "../styles/hideScrollbar.css"
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";
import { initGA, logPageView } from "../utils/analytics";
import React from "react";
import Router from "next/router";
import useIsMobile from "../hooks/useIsMobile";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      initGA();
      logPageView();
      Router.events.on("routeChangeComplete", logPageView);
    }
  }, []);
  const isMobile = useIsMobile();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} isMobile={isMobile} />
    </ThemeProvider>
  );
}

export default MyApp;
