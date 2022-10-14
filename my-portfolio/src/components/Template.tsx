import styled from "styled-components";
import { Theme } from "../style/theme";

interface IProps {
  header: React.ReactElement;
  children: React.ReactElement;
}

export const Template = ({ header, children }: IProps) => {
  return (
    <RootWrap theme={Theme}>
      {header}
      {children}
    </RootWrap>
  );
};

const RootWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    #f9eaed 0%,
    #ece3ec 20.91%,
    #c5cfea 84.35%
  );
`;
