import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LogoIcon } from "../assets/logo";
import { AppsIcon } from "../assets/apps";

interface IProps {
  children: React.ReactElement;
}

export const Template = ({ children }: IProps) => {
  const [gnbToggle, setGnbToggle] = useState(false);
  // 마우스 커서 이벤트
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = Math.round(e.clientX + posX / 25) - 25;
      const mouseY = Math.round(e.clientY + posY / 25) - 25;
      setPosX(mouseX);
      setPosY(mouseY);
    });
    return () => {
      document.removeEventListener("mousemove", (e) => {
        const mouseX = Math.round(e.clientX + posX / 25) - 25;
        const mouseY = Math.round(e.clientY + posY / 25) - 25;
        setPosX(mouseX);
        setPosY(mouseY);
      });
    };
  }, []);
  return (
    <RootWrap>
      <Pointer style={{ top: posY, left: posX }} />
      <RightGnb className={gnbToggle ? "show" : "hide"}>
        <NavLink
          onClick={() => {
            setGnbToggle(false);
          }}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          onClick={() => {
            setGnbToggle(false);
          }}
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          onClick={() => {
            setGnbToggle(false);
          }}
          to="/works"
        >
          WORKS
        </NavLink>
        <NavLink
          onClick={() => {
            setGnbToggle(false);
          }}
          to="/contact"
        >
          CONTACT
        </NavLink>
      </RightGnb>
      <HeaderWrap>
        <h1>
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
        </h1>
        <Gnb>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/works"
          >
            WORKS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </Gnb>
        <button
          onClick={() => {
            setGnbToggle(true);
          }}
        >
          <AppsIcon />
        </button>
      </HeaderWrap>
      <ContentWrap>{children}</ContentWrap>
      {gnbToggle && (
        <BgWrap
          onClick={() => {
            setGnbToggle(false);
          }}
        />
      )}
    </RootWrap>
  );
};
const Pointer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1000;
  pointer-events: none;
  animation: colorRotate 1.5s infinite linear;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: wave 3s infinite linear;
  }
  &:before {
    background: #fff;
  }
  &:after {
    background: #fff;
    opacity: 0;
    animation: wave 3s 1.5s infinite linear;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(3.5);
      opacity: 0;
    }
  }
  @keyframes colorRotate {
    0% {
      backdrop-filter: hue-rotate(0deg) saturate(1);
    }
    20% {
      backdrop-filter: hue-rotate(60deg) saturate(1);
    }
    40% {
      backdrop-filter: hue-rotate(120deg) saturate(1);
    }
    60% {
      backdrop-filter: hue-rotate(180deg) saturate(1);
    }
    80% {
      backdrop-filter: hue-rotate(240deg) saturate(1);
    }
    100% {
      backdrop-filter: hue-rotate(300deg) saturate(1);
    }
  }
`;

const RootWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(107.56deg, #e5fbf5 0%, #fce8f9 100%);
  overflow: hidden;
  min-width: 360px;
`;

const HeaderWrap = styled.header`
  flex: 0 0 130px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 300px);
  margin: 0 150px;
  z-index: 10;
  h1 {
    flex: 0 0 70px;
    a {
      &:hover {
        svg {
          fill: #6b2bf2;
        }
      }
    }
  }
  button {
    &:hover {
      svg {
        fill: #6b2bf2;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex: 0 0 80px;
    width: calc(100% - 100px);
    margin: 0 50px;
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 50px);
    margin: 0 25px;
    h1 {
      flex: 0 0 50px;
      a {
        svg {
          width: 55px;
        }
      }
    }
    button {
      svg {
        width: 25px;
      }
    }
  }
`;

const Gnb = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 190px;
  z-index: 10;
  a {
    font-weight: 300;
    font-size: 20px;
    color: #230653;
    :not(:last-of-type) {
      margin-right: 30px;
    }
    &:hover {
      color: #6b2bf2;
      text-shadow: 0px 0px 15px rgba(107, 43, 242, 0.5);
    }
    &.active {
      color: #6b2bf2;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RightGnb = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  padding: 130px 0;
  box-sizing: border-box;
  border-top-left-radius: 140px;
  overflow: hidden;
  transition: all 0.4s;
  &.show {
    right: 0;
    animation: gnbSlideIn 0.4s;
    opacity: 1;
  }
  &.hide {
    right: -300px;
    animation: gnbSlideOut 0.4s ease;
    opacity: 0;
  }
  @keyframes gnbSlideIn {
    0% {
      right: -300px;
    }
    100% {
      right: 0;
    }
  }
  @keyframes gnbSlideOut {
    0% {
      right: 0;
    }
    100% {
      right: -300px;
    }
  }
  a {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    color: #230653;
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
    &:hover {
      color: #6b2bf2;
    }
  }
`;

const BgWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: linear-gradient(107.56deg, #e5fbf5 0%, #fce8f9 100%);
  backdrop-filter: blur(4px);
  z-index: 10;
  cursor: pointer;
`;

const ContentWrap = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow: hidden;
`;
