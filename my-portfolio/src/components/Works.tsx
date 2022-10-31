import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { works } from "../data/works";
import { useAppDispatch } from "../store/hooks";
import { onCursor } from "../store/slice";

const Works = () => {
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
          Design Works
        </h3>
        <ProjectList>
          {works.map((o, inx) => {
            return (
              <ProjectItem
                key={`item-${inx}`}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onMouseOver={cursorOn}
                onMouseLeave={cursorOff}
              >
                <Link
                  to={`/works/${o.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${o.img})` }}
                >
                  <div>
                    <strong>{o.name}</strong>
                    <p>{o.descript}</p>
                    <div className="go-btn">
                      <span>보러가기</span>
                    </div>
                  </div>
                </Link>
              </ProjectItem>
            );
          })}
        </ProjectList>
      </GalleryWrap>
    </RootWrap>
  );
};

export default Works;

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

  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

const ProjectItem = styled(motion.li)`
  flex: 0 0 auto;
  width: 32%;
  height: 320px;
  margin-bottom: 40px;
  border-radius: 93px;
  overflow: hidden;
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);
  &:not(:nth-child(3n)) {
    margin-right: 20px;
  }
  &:hover {
    > a > div {
      height: 100%;
      transition: all 0.2s;
      > p {
        display: inline;
      }
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
      height: 80px;
      padding: 20px;
      text-align: center;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);

      > strong {
        margin-bottom: 10px;
        font-size: 20px;
        color: #230653;
      }
      > p {
        color: #222124;
        display: none;
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
    &:not(:nth-child(3n)) {
      margin-right: none;
    }
  }
`;
