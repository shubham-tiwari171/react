import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../reducers/reducers";
const store = configureStore({
  reducer: { crud: crudSlice },
});
export default store;
