import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { Theme } from "../style/theme";
import About from "./About";

interface IProps {
  header: React.ReactElement;
  children: React.ReactElement;
  footer: React.ReactElement;
}

export const Template = ({ header, children, footer }: IProps) => {
  const toggle = useAppSelector((state) => state.modal.toggle);
  return (
    <RootWrap theme={Theme}>
      {header}
      {children}
      {footer}
      {toggle && <About />}
    </RootWrap>
  );
};

const RootWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow-y: hidden;

  background: linear-gradient(
    90deg,
    #f9eaed 0%,
    #ece3ec 20.91%,
    #c5cfea 84.35%
  );
`;
