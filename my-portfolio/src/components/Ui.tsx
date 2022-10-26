import { motion } from "framer-motion";
import styled from "styled-components";

export const Ui = () => {
  return (
    <RootWrap
      initial={{ translateY: -200 }}
      animate={{ translateY: 0 }}
      exit={{ translateY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <ComponentWrap>
        <h3>UI Components</h3>
        <div></div>
      </ComponentWrap>
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
`;
const ComponentWrap = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;

  margin-top: 100px;

  > h3 {
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0 20px;
    max-width: 100%;
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
