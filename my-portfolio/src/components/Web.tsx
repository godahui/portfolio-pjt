import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { onCursor } from "../store/slice";

const Web = () => {
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
      <GalleryWrap>
        <h3
          onClick={() => window.history.back()}
          onMouseOver={cursorOn}
          onMouseLeave={cursorOff}
        >
          Web Projects
        </h3>
        <ProjectList>
          <ProjectItem
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <a
              href="https://noonnoppi-pjt.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "url(assets/noonnoppi.png)" }}
            >
              <div>
                <strong>눈높이 메인페이지 리뉴얼</strong>
                <p>#PC only #작업기간 2주 #React, Figma 사용</p>
                <div className="go-btn">
                  <span>사이트 바로가기</span>
                </div>
              </div>
            </a>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "url(assets/portfolio.png)" }}
            >
              <div>
                <strong>포트폴리오 사이트</strong>
                <p>#PC, Mobile #작업기간 4주 #React, Figma 사용</p>
                <div className="go-btn">
                  <span>사이트 바로가기</span>
                </div>
              </div>
            </Link>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <a
              href="https://cine21-pjt-5d9f2.web.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "url(assets/cine21.png)" }}
            >
              <div>
                <strong>씨네21 메인페이지 리뉴얼</strong>
                <p>#반응형 #작업기간 1주 #jQuery, Figma 사용</p>
                <div className="go-btn">
                  <span>사이트 바로가기</span>
                </div>
              </div>
            </a>
          </ProjectItem>
          <ProjectItem
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseOver={cursorOn}
            onMouseLeave={cursorOff}
          >
            <a
              href="https://krispykreme-26057.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "url(assets/kreme.png)" }}
            >
              <div>
                <strong>크리스피 크림</strong>
                <p>-</p>
                <div className="go-btn">
                  <span>사이트 바로가기</span>
                </div>
              </div>
            </a>
          </ProjectItem>
        </ProjectList>
      </GalleryWrap>
    </RootWrap>
  );
};

export default Web;

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden auto;
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
    cursor: pointer;
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

  &:hover {
    > a > div {
      height: 100%;
      transition: all 0.5s;
      .go-btn {
        display: flex;
      }
    }
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
      background: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(12px);

      > strong {
        margin-bottom: 10px;
        font-size: 20px;
        color: #230653;
      }
      > p {
        color: #656466;
      }

      .go-btn {
        display: none;
        flex-flow: column nowrap;
        justify-content: center;
        transition: all 0.2s;

        width: 150px;
        height: 45px;
        border-radius: 93px;
        margin: 20px auto 0;
        background-color: #876e93;

        > span {
          font-size: 14px;
          color: #fff;
        }

        &:hover {
          background-color: #6b2bf2;
        }
        &:active {
          background-color: #5824c8;
        }
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
