import { createSlice } from "@reduxjs/toolkit";

export const changesSlice = createSlice({
  name: "changes",
  initialState: { value: [] },
  reducers: {
    getChanges(state, action) {
      state.value = action.payload;
    },
    addChange(state, action) {
      const indexRepo = state.value.findIndex(
        (e) => e.repo === action.payload.repo
      );

      const indexId = state.value[indexRepo]?.data.findIndex(
        (e) => e.id === action.payload.id
      );

      const item = {
        repo: action.payload.repo,
        data: [
          {
            id: action.payload.id,
            columnIn: action.payload.columnIn,
            columnOut: action.payload.columnOut,
            issue: action.payload.issue,
          },
        ],
      };

      indexRepo === -1
        ? state.value.push(item)
        : indexId === -1
        ? state.value[indexRepo].data.push(item.data[0])
        : state.value[indexRepo].data.splice(indexId, 1) &&
          state.value[indexRepo].data.push(item.data[0]);
    },
  },
});

export const { getChanges, addChange } = changesSlice.actions;
