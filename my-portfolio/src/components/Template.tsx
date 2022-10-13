import styled from "styled-components";
import { Theme } from "../style/theme";

interface IProps {
  children: React.ReactElement;
}

export const Template = ({ children }: IProps) => {
  return <RootWrap theme={Theme}>{children}</RootWrap>;
};

const RootWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: linear-gradient(
    90deg,
    #f9eaed 0%,
    #ece3ec 20.91%,
    #c5cfea 84.35%
  ); ;
`;
