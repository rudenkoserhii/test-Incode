import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { toDoIssuesSlice } from './toDoIssues/slice';
import { inProgressIssuesSlice } from './inProgressIssues/slice';
import { doneIssuesSlice } from './doneIssues/slice';
import { changesSlice } from './changes/slice';
import { repoSlice } from './repo/slice';

// Persisting token field from auth slice to localstorage
const changesPersistConfig = {
  key: 'changes',
  storage,
};

const repoPersistConfig = {
  key: 'repo',
  storage,
};


export const store = configureStore({
  reducer: {
    changes: persistReducer(changesPersistConfig, changesSlice.reducer),
    repo: persistReducer(repoPersistConfig, repoSlice.reducer),
    toDoIssues: toDoIssuesSlice.reducer,
    inProgressIssues: inProgressIssuesSlice.reducer,
    doneIssues: doneIssuesSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);