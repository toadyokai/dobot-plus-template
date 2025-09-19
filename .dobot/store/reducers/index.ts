import { combineReducers } from 'redux'
import toolReducer from './toolReducer'
import userMagamentReducer from './userMagamentReducer'

export default combineReducers({
  toolReducer,
  userMagamentReducer
})
