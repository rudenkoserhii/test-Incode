import { createSlice } from '@reduxjs/toolkit';

export const toDoIssuesSlice = createSlice({
  name: 'toDoIssues',
  initialState: {value: []},
  reducers: {
    getToDoIssues(state, action) {
console.log(action.payload);
      state.value = action.payload;
    },
    nextPageToDoIssues(state, action) {
console.log(action.payload);
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { getToDoIssues, nextPageToDoIssues } = toDoIssuesSlice.actions;