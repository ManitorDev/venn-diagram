import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Venns from "./reducers/setDiagramArrays";

const reducer = {
  venns: Venns,
};

const store = configureStore({
  reducer,
});

export default store;
