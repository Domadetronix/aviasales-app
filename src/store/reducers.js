// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux'
import filterReducer from './filter-reducer'
import ticketReducer from './ticket-reducer'

export const reducers = combineReducers({
  filterReducer,
  ticketReducer,
})
