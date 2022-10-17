import React, { useState, useEffect, useRef } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { Theme } from "./style/theme";

import "./App.css";

import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import Dots from "./components/Dot";

import { useScroll } from "./components/Scroll.hook";

export const App = () => {
  const { scrollIndex, outerDivRef } = useScroll();

  return (
    <ThemeProvider theme={Theme}>
      <Template header={<Header />} footer={<Footer />}>
        <Outer ref={outerDivRef}>
          <Dots scrollIndex={scrollIndex} />
          <Main />
          <div className="inner bg-blue">2</div>
          <div className="inner bg-pink">3</div>
        </Outer>
      </Template>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;

  background: linear-gradient(
    90deg,
    #f9eaed 0%,
    #ece3ec 20.91%,
    #c5cfea 84.35%
  );

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  /* 화면에서 스크롤바 안보이게 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
