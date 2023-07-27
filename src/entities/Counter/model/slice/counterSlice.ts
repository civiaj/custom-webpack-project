import { createSlice } from "@reduxjs/toolkit";

export interface CounterSchema {
    value: number;
}

const initialState: CounterSchema = { value: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
