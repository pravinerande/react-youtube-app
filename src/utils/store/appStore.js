import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import chatReducer from "./chatStore";

const appStore = configureStore({
  reducer: {
    // Add your slice reducers here
    sidebar: sidebarReducer,
    chat: chatReducer,
  },
});

export default appStore;
