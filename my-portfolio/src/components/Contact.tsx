import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { BiCopy } from "react-icons/bi";
import styled from "styled-components";

export const Contact = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 1000], [45, -45]);
  const rotateY = useTransform(x, [0, 1000], [-45, 45]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const doCopy = (text: string) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }

    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.position = "fixed";

    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <RootWrap
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouse}
    >
      <ContactWrap
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <div>
          <h3>Contact</h3>
          <strong>끝까지 봐주셔서 감사합니다!😁</strong>
          <button
            title="Email copy"
            onClick={() => doCopy("ekgml0676@naver.com")}
          >
            <span>Email</span>
            <p>- ekgml0676@naver.com</p>
            <BiCopy />
          </button>
          <button title="KakaoTalk ID copy" onClick={() => doCopy("gggp999")}>
            <span>KakaoTalk ID</span>
            <p>- gggp999</p>
            <BiCopy />
          </button>
        </div>
      </ContactWrap>
    </RootWrap>
  );
};

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ContactWrap = styled(motion.section)`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -10px -10px 5px rgba(255, 255, 255, 0.2),
      -2px 10px 30px rgba(191, 187, 210, 0.32);
    backdrop-filter: blur(16px);
    border-radius: 93px;
    margin-bottom: 48px;

    > h3 {
      color: #361e5c;
      font-weight: 600;
      font-size: 34px;
      margin: 15px 0;
      max-width: 100%;
    }

    > strong {
      color: #361e5c;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 20px;
    }

    > button {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: #ebe0f0;
        > svg {
          display: inline-block;
        }
      }
      &:active {
        background-color: #dfd3e4;
        > svg {
          fill: #6b2bf2;
        }
      }
      > span {
        margin-right: 6px;
        font-weight: 300;
        font-size: 18px;
        color: #5824c8;
      }
      > p {
        font-weight: 300;
        font-size: 18px;
        color: #6b2bf2;
      }
      > svg {
        margin-left: 5px;
        fill: #918c9a;
        display: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
