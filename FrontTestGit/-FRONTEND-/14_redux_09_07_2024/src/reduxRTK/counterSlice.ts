import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialCounterStateRTK {
    value: number;
}

const initialState: InitialCounterStateRTK = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        change(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
});

export const { change } = counterSlice.actions

export default counterSlice.reducer
