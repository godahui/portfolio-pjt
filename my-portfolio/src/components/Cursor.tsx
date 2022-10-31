import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/hooks";

export const Cursor = () => {
  const toggle = useAppSelector((state) => state.modal.cursor);
  const cursorRef = useRef(null) as React.RefObject<HTMLDivElement> | null;
  useEffect(() => {
    if (!cursorRef) {
      return;
    }
    if (!cursorRef.current) {
      return;
    }
    const circle = cursorRef.current;
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      circle.style.left = mouseX + "px";
      circle.style.top = mouseY + "px";
    });
  }, []);

  const cursorSubRef = useRef(null) as React.RefObject<HTMLDivElement> | null;
  useEffect(() => {
    if (!cursorSubRef) {
      return;
    }
    if (!cursorSubRef.current) {
      return;
    }
    const circle = cursorSubRef.current;
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      circle.style.left = mouseX + "px";
      circle.style.top = mouseY + "px";
    });
  }, []);
  return (
    <>
      <MouseCursor ref={cursorRef} className={toggle ? "on" : ""} />
      <MouseCursorSub ref={cursorSubRef} className={toggle ? "on" : ""} />
    </>
  );
};

const MouseCursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(157, 92, 255, 0.4);
  backdrop-filter: blur(4px);
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.1s;

  &.on {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: none;
  }
`;

const MouseCursorSub = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(157, 92, 255, 0.4);
  backdrop-filter: blur(4px);
  box-shadow: -2px 10px 30px rgba(191, 187, 210, 0.32);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s;

  &.on {
    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: none;
  }
`;
