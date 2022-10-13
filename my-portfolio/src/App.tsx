import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Theme } from "./style/theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Template } from "./components/Template";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Template>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
