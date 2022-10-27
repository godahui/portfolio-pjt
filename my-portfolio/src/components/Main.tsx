import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import bg1 from "../assets/main-1.png";
import bg2 from "../assets/main-2.png";
import bg3 from "../assets/main-3.png";
import bg4 from "../assets/main-4.png";
import bg5 from "../assets/main-5.png";
import bg6 from "../assets/main-6.png";

const Main = () => {
  const imgArr = [bg1, bg2, bg3, bg4, bg5, bg6];
  const length = imgArr.length;
  const [img, setImg] = useState(0);

  useEffect(() => {
    if (img === length) {
      setImg(0);
    }
    const intervelImg = setInterval(() => {
      setImg(img + 1);
    }, 1000);

    return () => clearInterval(intervelImg);
  }, [img, length]);

  return (
    <MainWrap
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BgWrap>
        <motion.img
          initial={{ translateY: -200 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          src={imgArr[img] || imgArr[0]}
          alt=""
        />
        <TitleWrap
          initial={{ translateY: -200, translateX: "-50%" }}
          animate={{ translateY: 0, translateX: "-50%" }}
          exit={{ translateY: 0, translateX: "-50%" }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          <h3>고다희</h3>
          <p>Web Publisher</p>
          <p>Frontend Developer</p>
        </TitleWrap>
        <MenuWrap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Menu to="/about" className="top-left">
            <p>About</p>
          </Menu>
          <Menu to="/web" className="top-right">
            <p>Web Projects</p>
          </Menu>
          <Menu to="/works" className="bottom-left">
            <p>Design Works</p>
          </Menu>
          <Menu to="/contact" className="bottom-right">
            <p>Contact</p>
          </Menu>
        </MenuWrap>
      </BgWrap>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  min-width: 320px;
`;

const BgWrap = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 10px;
  text-align: center;
  position: relative;
  img {
    border-radius: 50%;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

const TitleWrap = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;

  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0);

  > h3 {
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0;
    max-width: 100%;
  }
  > p {
    font-size: 16px;
    line-height: 17px;
    color: #5100d6;
  }
`;

const MenuWrap = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 900px;

  @media screen and (max-width: 900px) {
    width: 110%;
    padding: 0 10px;
    justify-content: center;
  }
`;

const Menu = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 calc(50% - 50px);
  cursor: pointer;

  width: 100%;
  max-width: 600px;
  height: 120px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: -10px -10px 5px rgba(255, 255, 255, 0.2),
    -2px 10px 30px rgba(191, 187, 210, 0.32);
  backdrop-filter: blur(16px);

  @media screen and (max-width: 900px) {
    flex: 1 1 calc(100% - 20px);
    height: 60px;
    padding: 0 10px;
  }

  @media screen and (max-width: 610px) {
    flex: 0 0 auto;
    width: 60%;
  }

  > p {
    font-weight: 300;
    font-size: 32px;
    color: #a28ea9;
    margin: auto;

    @media screen and (max-width: 900px) {
      font-weight: 300;
      font-size: 20px;
    }
  }

  &.top-left {
    border-radius: 93px 0px;
    margin-right: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 900px) {
      border-radius: 93px;
      margin-right: 0;
    }
  }
  &.top-right {
    border-radius: 93px 0px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-bottom: 10px;
    > p {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    @media screen and (max-width: 900px) {
      border-radius: 93px;
    }
  }
  &.bottom-left {
    border-radius: 93px 0px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-right: 10px;
    > p {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    @media screen and (max-width: 900px) {
      border-radius: 93px;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  &.bottom-right {
    border-radius: 93px 0px;
    @media screen and (max-width: 900px) {
      border-radius: 93px;
    }
  }

  &:hover {
    transition: all 0.4s;
    > p {
      color: #411d4e;
    }
  }

  @media screen and (min-width: 900px) {
    &:hover {
      &.top-left {
        transform: translate(-20px, -20px);
      }
      &.top-right {
        transform: translate(20px, -20px) matrix(-1, 0, 0, 1, 0, 0);
      }
      &.bottom-left {
        transform: translate(-20px, 20px) matrix(-1, 0, 0, 1, 0, 0);
      }
      &.bottom-right {
        transform: translate(20px, 20px);
      }
    }
  }
`;
