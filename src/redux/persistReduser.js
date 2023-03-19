import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authSlice';
import { contactsApi } from './phonebook/contactsSlice';
import { favoriteSlice } from './phonebook/favoritesSlice';
import { filterSlice } from './phonebook/filterSlice';

const rootPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['favorites'],
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
  favorites: favoriteSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
