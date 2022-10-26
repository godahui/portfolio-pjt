import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Contact = () => {
  return (
    <RootWrap>
      <ContactWrap>
        <h3>Contact Me</h3>
        <strong>끝까지 봐주셔서 감사합니다!</strong>
        <hgroup>
          <h4>Email</h4>
          <p>- ekgml0676@naver.com</p>
        </hgroup>
        <hgroup>
          <h4>HP</h4>
          <p>010 9017 0676</p>
        </hgroup>
      </ContactWrap>
    </RootWrap>
  );
};

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
`;

const ContactWrap = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  text-align: center;

  margin-top: 100px;

  > h3 {
    color: #361e5c;
    font-weight: 600;
    font-size: 34px;
    margin: 15px 0;
    max-width: 100%;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
