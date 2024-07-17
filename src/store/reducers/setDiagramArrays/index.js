import { createAction, createReducer } from "@reduxjs/toolkit";

export const addVenns = createAction("addVenns");

const Venns = createReducer({ venn1: [], venn2: [] }, (builder) => {
  builder.addCase(addVenns.type, (state, action) => {
    return { ...state, ...action.payload };
  });
});

export default Venns;
