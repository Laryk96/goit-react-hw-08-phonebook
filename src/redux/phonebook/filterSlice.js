import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    toFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { toFilter } = filterSlice.actions;
