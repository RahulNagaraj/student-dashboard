import * as types from './types'

const requestFilterByName = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_FILTERED_NAMES
    })
  }
}

const receiveFilterByName = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_FILTERED_NAMES,
      data
    })
  }
}

const filterNames = (students, inputString) => {
  return students.filter(student => student.name.toLowerCase().startsWith(inputString))
}

function filterByName(inputString) {
  return (dispatch, getState) => {
    dispatch(requestFilterByName())
    const studentDetails = getState().studentDetails.data
    dispatch(receiveFilterByName(filterNames(studentDetails, inputString)))
  }
}

export {
  filterByName
}