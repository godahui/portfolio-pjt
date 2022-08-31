import styled from "styled-components";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <AboutWrap
      as={motion.section}
      initial={{ x: -1320 }}
      animate={{ x: 0 }}
      exit={{ x: -1320 }}
    >
      about
    </AboutWrap>
  );
};
const AboutWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fffbd5;
`;
