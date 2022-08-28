import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg_1.jpg";

export const Home = () => {
  return (
    <HomeWrap>
      <IntroTop>
        <strong>안녕하세요.</strong>
        <h2>
          <em>다</em>채로운 웹퍼블리셔
        </h2>
        <h2>
          고<em>다</em>희입니다.
        </h2>
      </IntroTop>
      <IntroBottom>
        <span>
          Web Publisher
          <br />
          UI &amp; Markup Developer
        </span>
      </IntroBottom>
      <BgObject>
        <img src={bg} />
      </BgObject>
    </HomeWrap>
  );
};

const HomeWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
`;
const IntroTop = styled.article`
  flex: 0 0 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding: 0 150px;
  z-index: 1;
  h2 {
    flex: 0 0 70px;
    font-weight: 400;
    font-size: 64px;
    color: #230653;
    word-break: keep-all;
    em {
      color: #6b2bf2;
    }
  }
  strong {
    flex: 0 0 100px;
    font-weight: 300;
    font-size: 36px;
    color: #230653;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 50px;
    flex: 0 0 300px;
    h2 {
      flex: 0 0 50px;
      font-size: 48px;
    }
    strong {
      flex: 0 0 80px;
      font-size: 32px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 441px) {
    justify-content: flex-start;
    h2 {
      flex: 0 0 35px;
      font-size: 32px;
    }
    strong {
      margin-top: 50px;
      flex: 0 0 80px;
      font-size: 24px;
    }
  }
`;
const IntroBottom = styled.article`
  flex: 1 1 auto;
  position: relative;
  padding-bottom: 50px;
  span {
    position: absolute;
    bottom: 200px;
    right: 100px;
    padding: 40px 100px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -10px -10px 5px rgba(255, 255, 255, 0.2),
      -2px 10px 30px rgba(191, 187, 210, 0.32);
    backdrop-filter: blur(32px);
    border-radius: 93px 0px;
    font-weight: 200;
    font-size: 36px;
    line-height: 40px;
    color: #b2b2c7;
    z-index: 1;
  }
`;
const BgObject = styled.div`
  width: 75%;
  height: 800px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 450px 0px 0px 0px;
  overflow: hidden;
  z-index: 0;
  opacity: 0.96;
  box-shadow: -10px -10px 5px rgba(255, 255, 255, 0.2),
    -2px 10px 30px rgba(191, 187, 210, 0.32);
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    border-radius: 250px 0px 0px 0px;
  }
`;
