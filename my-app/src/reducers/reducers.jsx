import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
  try {
    const responce = axios.get(
      "https://www.omdbapi.com/?s=action&apikey=7901224c&page=1"
    );
    let result = await responce;
    return result.data;
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.loading = true;
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.movies = [];
      state.error = action.payload;
    });
  },
});
export default movieSlice.reducer;
