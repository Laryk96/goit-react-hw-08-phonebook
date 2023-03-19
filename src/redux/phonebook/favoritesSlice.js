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
    editFavorite(state, { payload }) {
      const index = state.findIndex(favorite => favorite.id === payload.id);
      state.splice(index, 1, {
        id: payload.id,
        name: payload.name,
        number: payload.number,
      });
    },
  },
});

export const { addFavorite, deleteFavorite, editFavorite } =
  favoriteSlice.actions;
