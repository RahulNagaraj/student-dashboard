import * as types from './types'

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
  //const ans = list.reduce((a,b) => )
}

function sortTotalMarksAscending() {
  return (dispatch, getState) => {
    dispatch(requestSortTotalMarksAscending())
    const studentList = getState().studentDetails.data
    dispatch(receiveSortTotalMarksAscending(sortByAscendingOrder(studentList)))
  }
}

export {
  sortTotalMarksAscending
}