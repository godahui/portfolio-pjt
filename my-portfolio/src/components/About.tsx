import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { onToggle } from "../store/modalSlice";

export const About = () => {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state) => state.modal.toggle);
  return (
    <>
      <ModalWrap>
        <h3>About Me</h3>
        <CloseBtn
          onClick={() => {
            dispatch(onToggle(!toggle));
          }}
        />
        <ul>
          <li>ds</li>
          <li>das</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </ModalWrap>
      <BgWrap
        onClick={() => {
          dispatch(onToggle(!toggle));
        }}
      />
    </>
  );
};
const ModalWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  > h3 {
    flex: 0 0 auto;
    color: #361e5c;
    font-weight: 600;
    font-size: 28px;
    margin: 15px 0 15px 18px;
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: hidden auto;
  }
`;

const BgWrap = styled.button`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 100;

  width: 28px;
  height: 28px;

  &::after,
  &::before {
    display: block;
    content: "";

    position: absolute;
    top: 0;
    right: 50%;

    width: 1px;
    height: 30px;
    border-radius: 10px;
    background-color: #361e5c;
    transform: rotate(45deg) translateX(-50%);
  }
  &::before {
    transform: rotate(-45deg) translateX(-50%);
  }

  &:hover {
    &::after,
    &::before {
      background-color: #6b2bf2;
    }
  }
  &:active {
    &::after,
    &::before {
      background-color: #5824c8;
    }
  }
`;
