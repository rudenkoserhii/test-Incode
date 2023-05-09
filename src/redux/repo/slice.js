import { createSlice } from '@reduxjs/toolkit';

export const repoSlice = createSlice({
  name: 'repo',
  initialState: {value: ''},
  reducers: {
    getRepo(state, action) {
      state.value = action.payload;
    },
  },
});

export const { getRepo } = repoSlice.actions;