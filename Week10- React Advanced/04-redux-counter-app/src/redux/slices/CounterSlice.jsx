import { createSlice } from "@reduxjs/toolkit";

// Step2: Initialize
const initialState = {
    value : 0,
}

// Step1: CreateSlice
export const CounterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        // defining actions
        increment : (state) => {
            state.value += 1
        },

        decrement : (state) => {
            state.value -= 1
        },
    }
});

// Step3: export Actions & Reducers
export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer

