import * as types from '../actions/types'
const initialState = {
  isFetching: false,
  data: [],
  receivedAt: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_STUDENT_DETAILS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_STUDENT_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        receivedAt: Date.now()
      })
    default:
      return state
  }
}