import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite(state, { payload }) {
      state.push(payload);
    },
    deleteFavorite(state, { payload: { id } }) {
      const index = state.findIndex(favorite => favorite.id === id);
      state.splice(index, 1);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
