import { combineReducers } from 'redux'
import studentDetails from './student-details-reducer'
import filterNames from './filter-by-name-reducer'
import sortNames from './sort-by-names-reducer'
import sortMarks from './sort-by-total-marks-reducer'

export default combineReducers({
  studentDetails,
  filterNames,
  sortNames,
  sortMarks
})
