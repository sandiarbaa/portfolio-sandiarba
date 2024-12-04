import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ThemeState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: ThemeState = {
  // darkMode: false, // Default mode
  darkMode:
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("darkMode") || "false"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
