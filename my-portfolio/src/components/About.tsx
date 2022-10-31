import { motion } from "framer-motion";
import styled from "styled-components";
import profile from "../assets/profile-img.png";
import { useAppDispatch } from "../store/hooks";
import { onCursor } from "../store/slice";

const About = () => {
  const dispatch = useAppDispatch();
  const cursorOn = () => {
    dispatch(onCursor(true));
  };
  const cursorOff = () => {
    dispatch(onCursor(false));
  };
  return (
    <RootWrap
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <ComponentWrap>
        <h3
          onClick={() => window.history.back()}
          onMouseOver={cursorOn}
          onMouseLeave={cursorOff}
        >
          About
        </h3>
        <AboutList>
          <ImageWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={profile} alt="프로필 이미지" />
            <p>안녕하세요</p>
            <p>✨다채로운 웹퍼블리셔✨</p>
            <p>고다희입니다</p>
          </ImageWrap>
          <ProfileWrap>
            <ul>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4>PROFILE</h4>
                <p>고다희 GO DA HUI</p>
                <p>1994. 10. 04</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
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
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4>EXPERIENCE</h4>
                <p>아크라인소프트</p>
                <p>2021.01 ~ 2022.10</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h4>EDUCATION</h4>
                <p>동양미래 대학교 시각디자인과 졸업</p>
                <p>그린컴퓨터아카데미 웹디자이너, 퍼블리셔 과정 수료</p>
              </motion.li>
            </ul>
          </ProfileWrap>
        </AboutList>
      </ComponentWrap>
    </RootWrap>
  );
};

export default About;

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;
const ComponentWrap = styled.section`
  width: 100%;
  height: auto;
  max-width: 1024px;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;

  margin-top: 100px;

  > h3 {
    display: inline-block;
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0 20px;
    max-width: 100%;
    cursor: pointer;
  }

  > div {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -10px -10px 5px rgba(255, 255, 255, 0.2),
      -2px 10px 30px rgba(191, 187, 210, 0.32);
    backdrop-filter: blur(16px);
    border-radius: 93px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 18px;
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
const ImageWrap = styled(motion.li)`
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
      margin-bottom: 20px;
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
