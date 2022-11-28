import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/Main";
import TabletMain from "./pages/Tablet/TabletMain";
import MobileMain from "./pages/Mobile/MobileMain";
import GlobalStyles from "./styles/GlobalStyles";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Desktop>
      <Main />
    </Desktop>
    <Tablet>
      <TabletMain />
    </Tablet>
    <Mobile>
      <MobileMain />
    </Mobile>
  </ThemeProvider>
);
