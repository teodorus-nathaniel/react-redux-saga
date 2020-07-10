const INITIAL_STATE = {
  book: null
}

export default function bookReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOAD_BOOK':
      return {
        ...state,
        book: action.payload
      }
    default:
      return state
  }
}
