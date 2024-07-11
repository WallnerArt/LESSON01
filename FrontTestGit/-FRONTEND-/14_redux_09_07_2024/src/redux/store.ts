import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";

// 3. а) Создание хранилища (Store) с информацией о способах изменения содержимого хранилища
const store = legacy_createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer
}))

export default store;

// b) Универсальная типизация всего, что хранится в State
export type RootState = ReturnType<typeof store.getState>;
// и метода, с помощью которого необходимо менять значение State
export type AppDispatch = typeof store.dispatch;
