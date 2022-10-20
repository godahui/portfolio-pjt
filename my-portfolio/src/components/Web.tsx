import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Web = () => {
  return (
    <RootWrap
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <GalleryWrap>
        <h3>Web Projects</h3>
        <ProjectList>
          <ProjectItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/web"
              style={{ backgroundImage: "url(assets/noonnoppi.png)" }}
            >
              <div>
                <strong>눈높이 사이트 리뉴얼</strong>
                <p>#PC only #작업기간 2주 #React, Figma 사용</p>
              </div>
            </Link>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/web"
              style={{ backgroundImage: "url(assets/portfolio.png)" }}
            >
              <div>
                <strong>포트폴리오 사이트</strong>
                <p>#PC, Mobile #작업기간 4주 #React, Figma 사용</p>
              </div>
            </Link>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/web">프로젝트3</Link>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/web">프로젝트4</Link>
          </ProjectItem>
        </ProjectList>
      </GalleryWrap>
    </RootWrap>
  );
};

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &:-webkit-scrollbar {
    display: none;
  }
`;

const GalleryWrap = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;

  margin-top: 100px;

  > h3 {
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0;
    max-width: 100%;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex: 1 1 auto;
  flex-flow: row wrap;
  margin-top: 30px;
  margin-bottom: 150px;

  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

const ProjectItem = styled(motion.li)`
  flex: 0 0 auto;
  width: 48%;
  height: 520px;
  margin-bottom: 40px;
  border-radius: 93px;
  overflow: hidden;
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);

  &:nth-child(even) {
    transform: translateY(140px);
  }

  > a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    > div {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 100%;
      height: 140px;
      padding: 20px;
      text-align: center;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);

      > strong {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
      }
      > p {
        color: #656466;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 320px;
    &:nth-child(even) {
      transform: none;
    }
  }
`;
