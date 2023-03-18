import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './phonebook/contactsSlice';
import { favoriteSlice } from './phonebook/favoritesSlice';
import { filterSlice } from './phonebook/filterSlice';

const rootPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['favorites'],
  version: 1,
};

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
  favorites: favoriteSlice.reducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
