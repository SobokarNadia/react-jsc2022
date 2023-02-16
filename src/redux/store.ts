import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

type AppStore = ReturnType<typeof setupStore>;
type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = AppStore['dispatch'];

export type {RootState, AppDispatch};

export {setupStore}