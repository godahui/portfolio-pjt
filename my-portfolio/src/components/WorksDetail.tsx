import { motion } from "framer-motion";
import styled from "styled-components";
import { works } from "../data/works";
import { useLocation } from "react-router-dom";

const WorksDetail = () => {
  const { pathname } = useLocation();
  const dataId = pathname.split("/")[2];
  const imgs = works[+dataId].imgs;
  return (
    <RootWrap>
      {imgs.map((o, inx) => {
        return <img key={`img-${inx}`} src={o} />;
      })}
    </RootWrap>
  );
};

export default WorksDetail;

const RootWrap = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden auto;
  padding: 100px 0;
  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;
