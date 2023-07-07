import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../reducers/reducers";
export const store = configureStore({
  reducer: { curd: crudSlice },
});
