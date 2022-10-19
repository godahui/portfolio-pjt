import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

import { About } from "./About";

export const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </Logo>
      <AbountBtn>
        <h2>ABOUT</h2>
      </AbountBtn>
      <About />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  flex: 0 0 60px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;
const Logo = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-width: 70px;
  cursor: pointer;

  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    height: 17px;
    a {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
`;
const AbountBtn = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: auto;
  height: 20px;

  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
