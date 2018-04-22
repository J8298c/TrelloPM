import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

let reducer = () => {};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
module.exports = { store, persistor };
