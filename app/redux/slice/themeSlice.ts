import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ThemeState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: ThemeState = {
  darkMode: false, // Default mode
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
