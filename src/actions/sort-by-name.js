import * as types from './types'

const requestSortNamesAlphabetically = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_SORT_NAMES_ALPHABETICALLY
    })
  }
}

const receiveSortNamesAlphabetically = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_SORT_NAMES_ALPHABETICALLY,
      data
    })
  }
}

const requestSortNamesReverseAlphabetically = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_SORT_NAMES_REVERSE_ALPHABETICALLY
    })
  }
}

const receiveSortNamesReverseAlphabetically = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_SORT_NAMES_REVERSE_ALPHABETICALLY,
      data
    })
  }
}

const sortByAscendingOrder = (list) => {
  return list.sort((a, b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
    else return 0
  })
}

const sortByDescendingOrder = (list) => {
  return list.sort((a, b) => {
    if (a.name > b.name) return -1
    else if (a.name < b.name) return 1
    else return 0
  })
}

function sortNamesAlphabetically() {
  return (dispatch, getState) => {
    dispatch(requestSortNamesAlphabetically())
    const studentList = getState().studentDetails.data
    dispatch(receiveSortNamesAlphabetically(sortByAscendingOrder(studentList)))
  }
}

function sortNamesReverseAlphabetically() {
  return (dispatch, getState) => {
    dispatch(requestSortNamesReverseAlphabetically())
    const studentList = getState().studentDetails.data
    dispatch(receiveSortNamesReverseAlphabetically(sortByDescendingOrder(studentList)))
  }
}

export {
  sortNamesReverseAlphabetically,
  sortNamesAlphabetically
}
