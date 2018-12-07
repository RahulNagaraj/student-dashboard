import * as types from '../actions/types'

const initialState = {
  sortBy: 'asc',
  isSorted: false,
  sortedList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SORT_NAMES_ALPHABETICALLY:
      return Object.assign({}, state, {
        isSorted: false,
        sortBy: 'asc',
      })
    case types.RECEIVE_SORT_NAMES_ALPHABETICALLY:
      return Object.assign({}, state, {
        isSorted: true,
        sortBy: 'desc',
        sortedList: action.data,
      })
    case types.REQUEST_SORT_NAMES_REVERSE_ALPHABETICALLY:
      return Object.assign({}, state, {
        isSorted: false,
        sortBy: 'desc',
      })
    case types.RECEIVE_SORT_NAMES_REVERSE_ALPHABETICALLY:
      return Object.assign({}, state, {
        isSorted: true,
        sortBy: 'asc',
        sortedList: action.data,
      })
    default:
      return state
  }
}