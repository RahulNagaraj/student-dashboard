import { combineReducers } from 'redux'
import studentDetails from './student-details-reducer'
import filterNames from './filter-by-name-reducer'
import sortNames from './sort-by-names-reducer'

export default combineReducers({
  studentDetails,
  filterNames,
  sortNames
})
