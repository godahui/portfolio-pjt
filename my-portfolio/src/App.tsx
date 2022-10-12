import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Theme } from "./style/theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./components/Main";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
