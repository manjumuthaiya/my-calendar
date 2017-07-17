import { watchFetchEvents } from './fetchEventsSaga';

export default function* rootSaga() {
  yield [
    watchFetchEvents()
  ];
}