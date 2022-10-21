import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Theme } from "./style/theme";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Web } from "./components/Web";
import { Works } from "./components/Works";
import { Ui } from "./components/Ui";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <ThemeProvider theme={Theme}>
          <BrowserRouter>
            <Template header={<Header />} footer={<Footer />}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="web" element={<Web />} />
                <Route path="works" element={<Works />} />
                <Route path="ui" element={<Ui />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Template>
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </AnimatePresence>
    </Provider>
  );
};
