import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import sandwichReducer from "./sandwichSlice";

const storeRTK = configureStore({
    reducer: {
        counter: counterReducer,
        sandwich: sandwichReducer
    }
})

export default storeRTK;

// b) Универсальная типизация всего, что хранится в State
export type RootState = ReturnType<typeof storeRTK.getState>;
// и метода, с помощью которого необходимо менять значение State
export type AppDispatch = typeof storeRTK.dispatch;
