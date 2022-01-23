import authReducer from './user/authReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['register'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
