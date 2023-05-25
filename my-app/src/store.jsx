import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers/reducers";
const store = configureStore({
  reducer: { myData: movieSlice },
});
export default store;
