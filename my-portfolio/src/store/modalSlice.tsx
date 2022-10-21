// counter.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. initial state type 생성
export type modalState = {
  toggle: boolean;
};
// 1-1. initial state 객체 생성
const initialState: modalState = {
  toggle: false,
};

// 2. slice 생성 : createSlice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

// 3. export

// 3-1. export actions
export const { onToggle } = modalSlice.actions;
// 3-2. export default slice.reducer
export default modalSlice.reducer;
