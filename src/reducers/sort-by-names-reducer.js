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
      })
    case types.RECEIVE_SORT_NAMES_ALPHABETICALLY:
      return Object.assign({}, state, {
        isSorted: true,
        sortedList: action.data,
      })
    default:
      return state
  }
}