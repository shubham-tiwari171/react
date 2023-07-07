import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    // setData: (state, action) => {
    //   state.data = action.payload;
    // },
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
    // createData: (state, action) => {
    //   state.data.push(action.payload);
    // },
    // updateData: (state, action) => {
    //   const updatedItem = action.payload;
    //   const index = state.data.findIndex((item) => item.id === updatedItem.id);
    //   if (index !== -1) {
    //     state.data[index] = updatedItem;
    //   }
    // },
    // deleteData: (state, action) => {
    //   const itemId = action.payload;
    //   state.data = state.data.filter((item) => item.id !== itemId);
    // },
    createData: (state, action) => {
      let data = JSON.parse(localStorage.getItem("studentData"));
      localStorage.setItem(
        "studentData",
        JSON.stringify([action.payload, ...data])
      );
    },

    // updateData: (state, action) => {
    //   const updatedItem = action.payload;
    //   let data = JSON.parse(localStorage.getItem("studentData"));
    //   const index = data.findIndex((item) => item.id === updatedItem.id);
    //   if (index !== -1) {
    //     data[index] = updatedItem;
    //     localStorage.setItem("studentData", JSON.stringify(data));
    //   }
    // },
  },
});

export const { createData, updateData, deleteData } = crudSlice.actions;

export default crudSlice.reducer;
