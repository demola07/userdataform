import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchData } from './api'
import { REQUEST_USER_DATA } from './actions/types'
import { receiveUserData } from './actions/form'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* userData(action) {
    try {
        const data = yield call(fetchData);
        yield put(receiveUserData(data));
    } catch (e) {
        console.log(e)
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    yield takeLatest(REQUEST_USER_DATA, userData);
}
