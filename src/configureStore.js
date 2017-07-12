import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
// import rootSaga from './sagas/index';


export default function configureStore(initialState) {
  // const sagaMiddleware = createSagaMiddleware();
  // const store = createStore(
  //   reducer,
  //   initialState,
  //   applyMiddleware(
  //     sagaMiddleware, logger()
  //   )
  // );
  // sagaMiddleware.run(rootSaga);
  // return store;

  const store = createStore(
    reducer,
    initialState
  );
  return store;
};