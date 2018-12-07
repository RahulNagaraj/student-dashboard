import * as types from '../actions/types'

const initialState = {
  isFiltered: false,
  filteredList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FILTERED_NAMES:
      return Object.assign({}, state, {
        isFiltered: false,
      })
    case types.RECEIVE_FILTERED_NAMES:
      return Object.assign({}, state, {
        isFiltered: true,
        filteredList: action.data,
      })
    default:
      return state
  }
}