import * as types from '../actions/types'

const initialState = {
  sortBy: 'asc',
  isFiltered: false,
  isSorted: false,
  sortedList: [],
  filteredList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FILTERED_NAMES:
      return state
    case types.RECEIVE_FILTERED_NAMES:
      return Object.assign({}, state, {
        filteredList: action.data,
      })
    case types.REQUEST_SORT_NAMES_ALPHABETICALLY:
      return state
    case types.RECEIVE_SORT_NAMES_ALPHABETICALLY:
      return Object.assign({}, state, {
        filteredList: action.data,
      })
    default:
      return state
  }
}