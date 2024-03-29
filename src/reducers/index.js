import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const posts = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    posts,
})

export default rootReducer