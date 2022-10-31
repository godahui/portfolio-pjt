import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { onMenuToggle, onCursor } from "../store/slice";
import { Link } from "react-router-dom";

const Menu = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.modal.menuToggle);
  const cursorOn = () => {
    dispatch(onCursor(true));
  };
  const cursorOff = () => {
    dispatch(onCursor(false));
  };
  return (
    <>
      <ModalWrap
        initial={{ translateX: 200, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: 0, opacity: 1 }}
        transition={{ stiffness: 100 }}
      >
        <h3>Menu</h3>
        <CloseBtn
          onClick={() => {
            dispatch(onMenuToggle(!toggle));
          }}
          onMouseOver={cursorOn}
          onMouseLeave={cursorOff}
        />
        <ul>
          <li
            onClick={() => {
              dispatch(onMenuToggle(!toggle));
            }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li
            onClick={() => {
              dispatch(onMenuToggle(!toggle));
            }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li
            onClick={() => {
              dispatch(onMenuToggle(!toggle));
            }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link to="/web">
              <p>Web Projects</p>
            </Link>
          </li>
          <li
            onClick={() => {
              dispatch(onMenuToggle(!toggle));
            }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link to="/works">
              <p>Design Works</p>
            </Link>
          </li>
          <li
            onClick={() => {
              dispatch(onMenuToggle(!toggle));
            }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </ModalWrap>
      <BgWrap
        onClick={() => {
          dispatch(onMenuToggle(!toggle));
        }}
      />
    </>
  );
};

export default Menu;

const ModalWrap = styled(motion.div)`
  width: 400px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);
  border-bottom-left-radius: 93px;
  border-top-left-radius: 93px;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  > h3 {
    flex: 0 0 auto;
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 68px 0 15px 38px;
    max-width: 100%;
  }

  > ul {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;
    margin-top: 20px;
    > li {
      width: 100%;
      flex: 0 0 40px;
      padding: 10px 38px;
      position: relative;
      > a {
        display: block;
        width: 100%;
        height: 100%;
        > p {
          color: #361e5c;
          font-weight: 400;
          font-size: 20px;
        }
      }
      &::before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 0;
        background-color: #6b2bf2;
        transition: height 0.2s;
      }
      &:hover {
        p {
          color: #6b2bf2;
        }
        &::before {
          height: 100%;
        }
      }
      &:active {
        p {
          color: #5824c8;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    overflow: hidden auto;
  }
`;

const BgWrap = styled.button`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 100;

  width: 28px;
  height: 28px;

  &::after,
  &::before {
    display: block;
    content: "";

    position: absolute;
    top: 0;
    right: 50%;

    width: 1px;
    height: 30px;
    border-radius: 10px;
    background-color: #361e5c;
    transform: rotate(45deg) translateX(-50%);
  }
  &::before {
    transform: rotate(-45deg) translateX(-50%);
  }

  &:hover {
    &::after,
    &::before {
      background-color: #6b2bf2;
    }
  }
  &:active {
    &::after,
    &::before {
      background-color: #5824c8;
    }
  }
`;
