import React, { useState, useEffect, useRef } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import { Theme } from "./style/theme";

import "./App.css";

import { Template } from "./components/Template";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Dots from "./components/Dot";

export const App = () => {
  const outerDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const DIVIDER_HEIGHT = 5;
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };

    if (!outerDivRef.current) {
      return;
    }

    const outerDivRefCurrent = outerDivRef.current;

    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Template header={<Header />}>
        <Outer ref={outerDivRef}>
          <Dots scrollIndex={scrollIndex} />
          <Main />
          <Dvider />
          <div className="inner bg-blue">2</div>
          <Dvider />
          <div className="inner bg-pink">3</div>
          <ContactBtn />
        </Outer>
      </Template>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  /* 화면에서 스크롤바 안보이게 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContactBtn = styled.button`
  width: 60px;
  height: 60px;
  background-color: #ff0;
  border-radius: 50%;

  position: fixed;
  right: 50px;
  bottom: 50px;
`;

const Dvider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;
