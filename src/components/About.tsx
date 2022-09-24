import styled from "styled-components";
import { motion } from "framer-motion";
import profile from "../assets/profile-img.png";

export const About = () => {
  return (
    <AboutWrap
      as={motion.section}
      initial={{ x: -1320 }}
      animate={{ x: 0 }}
      exit={{ x: -1320 }}
    >
      <TopTitle>
        About <em>Me</em>
      </TopTitle>
      <BottomContent>
        <ProfileImg>
          <img src={profile} />
        </ProfileImg>
        <ProfileInfo>
          <section>
            <h3>Profile</h3>
            <p>고다희 (Go DaHui)</p>
            <p>1994.10.04</p>
          </section>
          <section>
            <h3>Skills</h3>
            <ul>
              <li>
                <p>HTML5</p>
              </li>
              <li>
                <p>CSS3</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>Photoshop</p>
              </li>
              <li>
                <p>Illustrator</p>
              </li>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>Git</p>
              </li>
              <li>
                <p>JQuery</p>
              </li>
              <li>
                <p>Figma</p>
              </li>
              <li>
                <p>Responsive Web</p>
              </li>
            </ul>
          </section>
          <section>
            <h3>Experience</h3>
            <p>아크라인소프트 2021.01 ~ 재직중</p>
          </section>
          <section>
            <h3>Education</h3>
            <p>동양미래 대학교 시각디자인과 졸업</p>
            <p>그린컴퓨터아카데미 웹디자이너, 퍼블리셔 과정 수료</p>
          </section>
        </ProfileInfo>
      </BottomContent>
    </AboutWrap>
  );
};
const AboutWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
`;

const TopTitle = styled.h2`
  flex: 0 0 auto;
  padding: 50px 150px 0;
  font-weight: 600;
  font-size: 64px;
  line-height: 64px;
  color: #230653;
  em {
    color: #6b2bf2;
  }
`;

const BottomContent = styled.section`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 150px;
  margin-top: 56px;
  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

const ProfileImg = styled.article`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100%;
  margin-right: 130px;
  img {
    margin-bottom: auto;
    filter: grayscale(1);
    transition: all 0.3s;
    &:hover {
      filter: none;
    }
  }
`;
const ProfileInfo = styled.article`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  padding: 0 40px;
  h3 {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 32px;
    line-height: 34px;
    color: #230653;
  }
  section {
    flex: 0 0 40%;
    p {
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
      color: #230653;
    }
  }
  ul {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
    li {
      flex: 0 0 auto;
      padding: 3px;
    }
  }
`;
