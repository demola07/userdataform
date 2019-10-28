import { combineReducers } from 'redux'
import form from './form'
import edit from './EditUser'

import updateuserdata from './updateUserData'

export default combineReducers({
    form,
    edit,
    updateuserdata
})