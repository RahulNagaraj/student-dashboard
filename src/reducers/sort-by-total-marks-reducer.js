import * as types from '../actions/types'

const initialState = {
  sortBy: 'asc',
  isTMSorted: false,
  sortedTMList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SORT_TOTAL_MARKS_ASCENDING:
      return Object.assign({}, state, {
        isTMSorted: false,
        sortBy: 'asc',
      })
    case types.RECEIVE_SORT_TOTAL_MARKS_ASCENDING:
      return Object.assign({}, state, {
        isTMSorted: true,
        sortBy: 'desc',
        sortedTMList: action.data,
      })
    case types.REQUEST_SORT_TOTAL_MARKS_DESCENDING:
      return Object.assign({}, state, {
        isTMSorted: false,
        sortBy: 'desc',
      })
    case types.RECEIVE_SORT_TOTAL_MARKS_DESCENDING:
      return Object.assign({}, state, {
        isTMSorted: true,
        sortBy: 'asc',
        sortedTMList: action.data,
      })
    default:
      return state
  }
}
