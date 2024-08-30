import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async for fetching characters
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
});

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default characterSlice.reducer;
