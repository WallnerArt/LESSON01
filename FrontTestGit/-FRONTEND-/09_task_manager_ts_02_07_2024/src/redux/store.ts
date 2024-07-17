import { configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";

const store = configureStore({
    reducer: {
        todos: tasksReducer
    }
})

export default store;

// b) Универсальная типизация всего, что хранится в State
export type RootState = ReturnType<typeof store.getState>;
// и метода, с помощью которого необходимо менять значение State
export type AppDispatch = typeof store.dispatch;
