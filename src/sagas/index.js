import { watchFetchEvents } from './fetchEventsSaga';
import { watchAddEvent } from './addEventSaga';

export default function* rootSaga() {
  yield [
    watchFetchEvents(),
    watchAddEvent()
  ];
}