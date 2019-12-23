import { call, put, take, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import firebase from 'firebase'
import { userData } from './api'
import { REQUEST_USER_DATA, SEND_USER_DATA } from './actions/types'
import { receiveUserData, sendUserData } from './actions/form'

var firebaseConfig = {
    apiKey: "AIzaSyCN3QtZOBUJNouRn-gq9EgqQ-yBzGhkhLU",
    authDomain: "userdataform-8c680.firebaseapp.com",
    databaseURL: "https://userdataform-8c680.firebaseio.com",
    projectId: "userdataform-8c680",
    storageBucket: "userdataform-8c680.appspot.com",
    messagingSenderId: "705894058240",
    appId: "1:705894058240:web:d9df93ddd65b7471c0cbe5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
// export default database

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* sendData() {
    try {
        const action = yield take(SEND_USER_DATA);
        const user = action.payload
        console.log(user);

        yield call(userData, user);
    } catch (e) {
        console.log(e)
    }
}
function* startListener() {
    // #1
    const channel = new eventChannel(emiter => {
        const listener = database.ref("entries").on("value", snapshot => {
            emiter({ data: snapshot.val() || {} });
        });

        return () => {
            listener.off();
        };
    });
    while (true) {
        const { data } = yield take(channel);
        console.log(data);

        yield put(receiveUserData(data));
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// export default function* mySaga() {
//     yield takeLatest(REQUEST_USER_DATA, userData);
// }
export default function* root() {
    // yield fork(userData)
    yield fork(startListener);
    yield fork(sendData)
}