import styled from "styled-components";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { onToggle } from "../store/modalSlice";
import profile from "../assets/profile-img.png";

export const About = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.modal.toggle);
  return (
    <>
      <ModalWrap
        initial={{ translateY: -200, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: 0, opacity: 1 }}
        transition={{ stiffness: 100 }}
      >
        <h3>About Me</h3>
        <CloseBtn
          onClick={() => {
            dispatch(onToggle(!toggle));
          }}
        />
        <AboutList>
          <ImageWrap>
            <img src={profile} alt="프로필 이미지" />
            <p>안녕하세요</p>
            <p>✨다채로운 웹퍼블리셔✨</p>
            <p>고다희입니다</p>
          </ImageWrap>
          <ProfileWrap>
            <ul>
              <li>
                <h4>PROFILE</h4>
                <p>고다희 GO DA HUI</p>
                <p>1994. 10. 04</p>
              </li>
              <li>
                <h4>SKILLS</h4>
                <div className="">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>Photoshop</span>
                  <span>Illustrator</span>
                  <span>React</span>
                  <span>Git</span>
                  <span>JQuery</span>
                  <span>Figma</span>
                  <span>Responsive Web</span>
                </div>
              </li>
              <li>
                <h4>EXPERIENCE</h4>
                <p>아크라인소프트</p>
                <p>2021.01 ~ 2022.10</p>
              </li>
              <li>
                <h4>EDUCATION</h4>
                <p>동양미래 대학교 시각디자인과 졸업</p>
                <p>그린컴퓨터아카데미 웹디자이너, 퍼블리셔 과정 수료</p>
              </li>
            </ul>
          </ProfileWrap>
        </AboutList>
      </ModalWrap>
      <BgWrap
        onClick={() => {
          dispatch(onToggle(!toggle));
        }}
      />
    </>
  );
};
const ModalWrap = styled(motion.div)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);
  border-bottom-left-radius: 93px;
  border-bottom-right-radius: 93px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  > h3 {
    flex: 0 0 auto;
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0 15px 18px;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
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

const AboutList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 auto;
  padding: 28px;
  justify-content: center;
  li {
    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;
const ImageWrap = styled.li`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: center;
  margin-right: 64px;
  img {
    width: 320px;
    height: auto;
    margin-bottom: 10px;
    filter: grayscale(1);
    transition: all 0.3s;
  }
  p {
    line-height: 22px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const ProfileWrap = styled.li`
  display: flex;
  flex-flow: row nowrap;
  ul {
    display: flex;
    flex-flow: row wrap;
    max-width: 700px;
    li {
      flex: 0 0 49%;
      h4 {
        font-size: 28px;
        font-weight: 600;
        color: #230653;
        margin-bottom: 30px;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        color: #230653;
        line-height: 29px;
      }
      span {
        display: inline-block;
        font-weight: 400;
        font-size: 14px;
        color: #fff;
        background-color: #6b2bf2;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 30px;
        padding: 10px 15px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex: 1 1 auto;
    justify-content: center;
    ul {
      width: 100%;
      li {
        flex: 0 0 50%;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      li {
        flex: 1 1 auto;
        width: 100%;
        h4 {
          font-size: 20px;
          margin-bottom: 15px;
        }
      }
    }
  }
`;
