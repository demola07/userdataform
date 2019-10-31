// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'

// const initialState = {}
// const middleware = [thunk]

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store;

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)
export default store;