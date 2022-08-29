import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg_1.jpg";

export const Home = () => {
  let txt1 = "안녕하세요.";
  let txt2 = "다채로운웹퍼블리셔";
  let txt3 = "고다희입니다.";

  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  const [Count3, setCount3] = useState(0);

  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const txtRef1 = useRef() as React.MutableRefObject<HTMLDivElement>;
  const txtRef2 = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const intervel1 = setInterval(() => {
      setText1(Text1 + txt1[Count1]);
      setCount1(Count1 + 1);
    }, 200);
    if (Count1 === txt1.length) {
      clearInterval(intervel1);
    }
    return () => {
      clearInterval(intervel1);
    };
  }, [txt1, Count1]);

  useEffect(() => {
    if (Count1 < txt1.length) {
      return;
    }
    const intervel2 = setInterval(() => {
      if (Count2 === 4) {
        txtRef1.current.innerHTML += "<span/>";
      }
      txtRef1.current.innerHTML +=
        `<p class="_1_${Count2}">` + txt2[Count2] + "</p>";
      setCount2(Count2 + 1);
    }, 200);
    if (Count2 === txt2.length) {
      clearInterval(intervel2);
    }
    return () => {
      clearInterval(intervel2);
    };
  }, [txt2, Count1, Count2]);

  useEffect(() => {
    if (Count2 < txt2.length) {
      return;
    }
    const intervel3 = setInterval(() => {
      txtRef2.current.innerHTML +=
        `<p class="_2_${Count3}">` + txt3[Count3] + "</p>";
      setCount3(Count3 + 1);
    }, 200);
    if (Count3 === txt3.length) {
      clearInterval(intervel3);
    }
    return () => {
      clearInterval(intervel3);
    };
  }, [txt3, Count2, Count3]);
  return (
    <HomeWrap>
      <IntroTop>
        <strong className="txt1">{Text1}</strong>
        <div className="txt2" ref={txtRef1} />
        <div className="txt3" ref={txtRef2} />
        {/* <h2 className="txt2" dangerouslySetInnerHTML={{ __html: Text2 }} />
        <h2 className="txt3" dangerouslySetInnerHTML={{ __html: Text3 }} /> */}
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
  .txt2,
  .txt3 {
    display: flex;
    flex-flow: row nowrap;
    flex: 0 0 70px;
    font-weight: 400;
    font-size: 64px;
    word-break: keep-all;
    p {
      color: #230653;
      transition: color 0.4s;
      &:hover {
        color: #6b2bf2;
      }
      &._1_0,
      &._2_1 {
        color: #6b2bf2;
      }
    }
    span {
      margin-right: 15px;
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
