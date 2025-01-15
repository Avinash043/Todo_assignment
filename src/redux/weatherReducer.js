import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeather: (state,action) => {
        state.weather = action.payload;
    },
  },
});

export const {
  fetchWeather
} = weatherSlice.actions;

export default weatherSlice.reducer;
