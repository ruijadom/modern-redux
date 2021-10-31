import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // with immer wrapper all state updates and return with safe immutable update
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement
    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
