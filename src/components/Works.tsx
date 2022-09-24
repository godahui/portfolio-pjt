import styled from "styled-components";
import { motion } from "framer-motion";

export const Works = () => {
  return (
    <WorksWrap
      as={motion.section}
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 500, opacity: 0 }}
    >
      about
    </WorksWrap>
  );
};
const WorksWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffe4e4;
`;
