// counter.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. initial state type 생성
export type State = {
  menuToggle: boolean;
  cursor: boolean;
};
// 1-1. initial state 객체 생성
const initialState: State = {
  menuToggle: false,
  cursor: false,
};

// 2. slice 생성 : createSlice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onMenuToggle: (state, action: PayloadAction<boolean>) => {
      state.menuToggle = action.payload;
    },
    onCursor: (state, action: PayloadAction<boolean>) => {
      state.cursor = action.payload;
    },
  },
});

// 3. export

// 3-1. export actions
export const { onMenuToggle, onCursor } = modalSlice.actions;
// 3-2. export default slice.reducer
export default modalSlice.reducer;
