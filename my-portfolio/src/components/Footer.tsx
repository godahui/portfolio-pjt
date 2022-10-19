import styled from "styled-components";

export const Footer = () => {
  return <FooterWrap></FooterWrap>;
};

const FooterWrap = styled.footer`
  display: flex;
  flex: 0 0 60px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
`;
