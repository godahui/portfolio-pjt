import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { onMenuToggle, onCursor } from "../store/slice";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.modal.menuToggle);
  const cursorOn = () => {
    dispatch(onCursor(true));
  };
  const cursorOff = () => {
    dispatch(onCursor(false));
  };
  return (
    <HeaderWrap>
      <Logo onMouseOver={cursorOn} onMouseLeave={cursorOff}>
        <Link to="/" title="메인으로 돌아가기">
          <img src={logo} alt="로고" />
        </Link>
      </Logo>
      <AbountBtn
        onClick={() => {
          dispatch(onMenuToggle(!toggle));
        }}
        title="About Me"
        onMouseOver={cursorOn}
        onMouseLeave={cursorOff}
      >
        <BiMenu />
      </AbountBtn>
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

  z-index: 10;
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

  > svg {
    width: 34px;
    height: 34px;
    fill: #230653;
    &:hover {
      fill: #6b2bf2;
    }
    &:active {
      fill: #5824c8;
    }
  }
`;
