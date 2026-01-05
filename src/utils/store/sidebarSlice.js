const { createSlice } = require("@reduxjs/toolkit");

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeSidebar: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
