import { call, put, take, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import firebase from 'firebase'
import { userData } from './api'
import { SEND_USER_DATA } from './actions/types'
import { receiveUserData } from './actions/form'

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



function* sendData() {
    try {
        const action = yield take(SEND_USER_DATA);
        const user = action.payload

        yield call(userData, user);
    } catch (e) {
        console.log(e)
    }
}
function* startListener() {
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

        yield put(receiveUserData(data));
    }
}

export default function* root() {
    yield fork(startListener);
    yield fork(sendData)
}