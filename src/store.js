import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* otros middlewares si es necesario */),
});

export default store;
