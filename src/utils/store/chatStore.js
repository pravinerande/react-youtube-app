import { LIVE_CHAT_MESSAGES_THRESHOLD } from "../constants";

const { createSlice } = require("@reduxjs/toolkit");

const chatStore = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(
        LIVE_CHAT_MESSAGES_THRESHOLD,
        state.messages.length - LIVE_CHAT_MESSAGES_THRESHOLD
      ); // Keep only the latest 100 messages
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatStore.actions;
export default chatStore.reducer;
