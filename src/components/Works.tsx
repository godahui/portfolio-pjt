import styled from "styled-components";
import { motion } from "framer-motion";

export const Works = () => {
  return (
    <WorksWrap
      as={motion.section}
      initial={{ x: 1320 }}
      animate={{ x: 0 }}
      exit={{ x: 1320 }}
    >
      about
    </WorksWrap>
  );
};
const WorksWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffe4e4;
`;
