import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    geminiMovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.geminiMovies = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTSearchView, addGeminiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
