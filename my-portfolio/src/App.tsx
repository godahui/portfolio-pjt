import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Theme } from "./style/theme";

import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Template header={<Header />} footer={<Footer />}>
        <Main />
      </Template>
      <GlobalStyle />
    </ThemeProvider>
  );
};
