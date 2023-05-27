import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  unwrapResult,
  current,
} from "@reduxjs/toolkit";

// Actions section
export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
  try {
    const responce = axios.get(
      "https://www.omdbapi.com/?s=action&apikey=7901224c&page=2"
    );
    let result = await responce;
    return result.data;
  } catch (e) {
    console.log(e);
  }
});

// export const setFevMovies = (id) => {
//   console.log("id from reducers.jsx:-", id);
//   return {
//     type: "FILTER_MOVIES",
//     payload: id,
//   };
// };

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    tempMovies: [],
    loading: false,
    error: null,
    fevMovies: [],
  },

  reducers: {
    setFevMovies: (state, action) => {
      const id = action.payload;
      const actualArray = current(state.tempMovies.Search);
      const selectedMovie = actualArray.find((movie) => movie.imdbID === id);
      if (selectedMovie) {
        state.fevMovies = [...state.fevMovies, selectedMovie];
      } else {
        state.fevMovies = [];
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.tempMovies = unwrapResult(action);
    });
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.loading = true;
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.movies = [];
      state.error = action.payload;
    });
    // builder.addCase(setFevMovies, (state, action) => {
    //   const { id } = action.payload;
    //   state.fevMovies = [...state.movies.filter((movie) => movie.id === id)];
    // });
  },
});
export const { setFevMovies } = movieSlice.actions;
export default movieSlice.reducer;
