import styled from "styled-components";

export const Main = () => {
  return <MainWrap>메인페이지</MainWrap>;
};

const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background: linear-gradient(
    90deg,
    #f9eaed 0%,
    #ece3ec 20.91%,
    #c5cfea 84.35%
  );
`;
