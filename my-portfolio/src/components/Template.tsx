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
  overflow-y: hidden;
`;
