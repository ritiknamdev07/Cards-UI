import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const cardsSlice = createSlice({
  name: "cardsData",
  initialState: { cards: [], status: "loading" },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state, action) => {
      state.cards = [];
      state.status = "loading";
    }),
      builder.addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.status = "fullfilled";
      }),
      builder.addCase(fetchCards.rejected, (state, action) => {
        state.cards = [];
        state.status = "rejected";
      });
  },
});

export default cardsSlice.reducer;
