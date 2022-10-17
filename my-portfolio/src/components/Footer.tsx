import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrap>
      <ContactBtn>
        <h2>Contact</h2>
      </ContactBtn>
    </FooterWrap>
  );
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

const ContactBtn = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: auto;
  height: 20px;

  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
