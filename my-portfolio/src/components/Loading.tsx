import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <LoadingWrap>
      <div className="loadingio-spinner-ellipsis-gxizmkb41o7">
        <div className="ldio-sfdl5vudtar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @keyframes ldio-sfdl5vudtar {
    0% {
      transform: translate(12px, 80px) scale(0);
    }
    25% {
      transform: translate(12px, 80px) scale(0);
    }
    50% {
      transform: translate(12px, 80px) scale(1);
    }
    75% {
      transform: translate(80px, 80px) scale(1);
    }
    100% {
      transform: translate(148px, 80px) scale(1);
    }
  }
  @keyframes ldio-sfdl5vudtar-r {
    0% {
      transform: translate(148px, 80px) scale(1);
    }
    100% {
      transform: translate(148px, 80px) scale(0);
    }
  }
  @keyframes ldio-sfdl5vudtar-c {
    0% {
      background: rgba(255, 255, 255, 0.5);
    }
    25% {
      background: rgba(255, 255, 255, 0.5);
    }
    50% {
      background: rgba(255, 255, 255, 0.5);
    }
    75% {
      background: rgba(255, 255, 255, 0.5);
    }
    100% {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  .ldio-sfdl5vudtar div {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translate(80px, 80px) scale(1);
    background: rgba(255, 255, 255, 0.5);
    animation: ldio-sfdl5vudtar 2s infinite cubic-bezier(0, 0.5, 0.5, 1);
  }
  .ldio-sfdl5vudtar div:nth-child(1) {
    background: rgba(255, 255, 255, 0.5);
    transform: translate(148px, 80px) scale(1);
    animation: ldio-sfdl5vudtar-r 0.5s infinite cubic-bezier(0, 0.5, 0.5, 1),
      ldio-sfdl5vudtar-c 2s infinite step-start;
  }
  .ldio-sfdl5vudtar div:nth-child(2) {
    animation-delay: -0.5s;
    background: rgba(255, 255, 255, 0.5);
  }
  .ldio-sfdl5vudtar div:nth-child(3) {
    animation-delay: -1s;
    background: rgba(255, 255, 255, 0.5);
  }
  .ldio-sfdl5vudtar div:nth-child(4) {
    animation-delay: -1.5s;
    background: rgba(255, 255, 255, 0.5);
  }
  .ldio-sfdl5vudtar div:nth-child(5) {
    animation-delay: -2s;
    background: rgba(255, 255, 255, 0.5);
  }
  .loadingio-spinner-ellipsis-gxizmkb41o7 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-sfdl5vudtar {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-sfdl5vudtar div {
    box-sizing: content-box;
  }
  /* generated by https://loading.io/ */
`;
