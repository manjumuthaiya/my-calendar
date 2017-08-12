import { watchFetchEvents, watchFetchEventsWithTag } from './fetchEventsSaga';
import { watchAddEvent } from './addEventSaga';
import { watchDeleteEvent } from './deleteEventSaga';

export default function* rootSaga() {
  yield [
    watchFetchEvents(),
    watchAddEvent(),
    watchDeleteEvent(),
    watchFetchEventsWithTag()
  ];
}