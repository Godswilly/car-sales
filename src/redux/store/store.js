import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);
export { store, persistor };
