import { combineReducers } from 'redux'
import studentDetails from './student-details-reducer'
import filteredNames from './filter-by-name-reducer'

export default combineReducers({
  studentDetails,
  filteredNames
})
