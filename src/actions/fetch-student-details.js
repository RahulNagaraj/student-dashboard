import fetch from 'cross-fetch'
import * as types from './types'


const requestStudentDetails = () => {
  return dispatch => {
    dispatch({
      type: types.REQUEST_STUDENT_DETAILS
    })
  }
}

const receiveStudentDetails = (data) => {
  return dispatch => {
    dispatch({
      type: types.RECEIVE_STUDENT_DETAILS,
      data: Object.values(data)
    })
  }
}

function fetchStudentData() {
  return dispatch => {
    dispatch(requestStudentDetails())
    return fetch(`https://api.myjson.com/bins/1dlper`)
      .then(response => response.json())
      .then(json => dispatch(receiveStudentDetails(json)))
  }
}

function shouldFetchStudentData(state) {
  const studentDetails = state.studentDetails
  if (!studentDetails || studentDetails.data.length < 1) {
    return true
  } else if (studentDetails.isFetching) {
    return false
  }
}

function fetchStudentDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchStudentData(getState())) {
      return dispatch(fetchStudentData())
    }
  }
}

export {
  fetchStudentDataIfNeeded,
}