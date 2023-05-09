import { createSlice } from '@reduxjs/toolkit';

export const changesSlice = createSlice({
  name: 'changes',
  initialState: {value: []},
  reducers: {
    getChanges(state, action) {
      state.value = action.payload;
    },
    addChange(state, action) {
      // state.value = [...state.value, ...action.payload];

// console.log(Object.values(action.payload[0])[0])
// state.value = prev => console.log(prev.value, action)
// Object.entries(prev.value).map(item => {
// console.log(prev)
// if(
// Object.entries(item[1])[0][0] === Object.keys(action.payload[0])[0]) {
// [...item[1][Object.keys(action.payload[0])[0]], ...Object.values(action.payload[0])[0]]
// }
// })
        const indexRepo = state.value.findIndex(
            e => e.repo === action.payload.repo)

        const indexId = state.value[indexRepo]?.data.findIndex(
            e => e.id === action.payload.id)

const item = {'repo': action.payload.repo, 'data': [{'id': action.payload.id, 'columnIn': action.payload.columnIn, 'columnOut': action.payload.columnOut, 'issue': action.payload.issue}]};

// console.log(index)
// console.log(state.value[index].data)
indexRepo === -1 ? 
state.value.push(item)
 : indexId === -1 ? state.value[indexRepo].data.push(item.data[0]) :  state.value[indexRepo].data.splice(indexId, 1) && state.value[indexRepo].data.push(item.data[0]);
    },
  },
});

export const { getChanges, addChange } = changesSlice.actions;