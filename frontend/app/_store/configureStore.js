import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSagas from '../_sagas/rootSagas';

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSagas);
  return store;
}
