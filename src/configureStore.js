import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};