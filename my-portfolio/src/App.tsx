import React, { Suspense, lazy } from "react";

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
import { Loading } from "./components/Loading";

const Main = lazy(() => import("./components/Main"));
const Web = lazy(() => import("./components/Web"));
const Works = lazy(() => import("./components/Works"));
const WorksDetail = lazy(() => import("./components/WorksDetail"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

export const App = () => {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <ThemeProvider theme={Theme}>
          <BrowserRouter>
            <Template header={<Header />} footer={<Footer />}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="web" element={<Web />} />
                  <Route path="works" element={<Works />} />
                  <Route path="works/:id" element={<WorksDetail />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </Template>
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </AnimatePresence>
    </Provider>
  );
};
