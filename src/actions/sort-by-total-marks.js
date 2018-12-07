import * as types from './types'
import * as utils from '../utils'

const requestSortTotalMarksAscending = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_SORT_TOTAL_MARKS_ASCENDING
    })
  }
}

const receiveSortTotalMarksAscending = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_SORT_TOTAL_MARKS_ASCENDING,
      data
    })
  }
}

const requestSortTotalMarksDescending = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_SORT_TOTAL_MARKS_DESCENDING
    })
  }
}

const receiveSortTotalMarksDescending = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_SORT_TOTAL_MARKS_DESCENDING,
      data
    })
  }
}

const sortByAscendingOrder = (list) => {
  const ans = list.map(item => {
    return {
      ...item,
      totalMarks: utils.findTotalMarks(item.marks)
    }
  })
  const result = ans.sort((a,b) => a.totalMarks - b.totalMarks)
  return result
}

const sortByDescendingOrder = (list) => {
  const ans = list.map(item => {
    return {
      ...item,
      totalMarks: utils.findTotalMarks(item.marks)
    }
  })
  const result = ans.sort((a,b) => b.totalMarks - a.totalMarks)
  return result
}

function sortTotalMarksAscending() {
  return (dispatch, getState) => {
    dispatch(requestSortTotalMarksAscending())
    const studentList = getState().studentDetails.data
    dispatch(receiveSortTotalMarksAscending(sortByAscendingOrder(studentList)))
  }
}

function sortTotalMarksDescending() {
  return (dispatch, getState) => {
    dispatch(requestSortTotalMarksDescending())
    const studentList = getState().studentDetails.data
    dispatch(receiveSortTotalMarksDescending(sortByDescendingOrder(studentList)))
  }
}

export {
  sortTotalMarksAscending,
  sortTotalMarksDescending
}
