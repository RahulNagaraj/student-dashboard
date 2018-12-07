import * as types from './types'
import * as utils from '../utils'

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

const sortByAscendingOrder = (list) => {
  return list.sort((a, b) => {
    if (a.name < b.name) return -1
    else if (a.name > b.name) return 1
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

export {
  sortNamesAlphabetically
}
