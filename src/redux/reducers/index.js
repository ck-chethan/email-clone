import { combineReducers } from 'redux'

const fetchEmailReducer = (email = [], action) => {
  switch (action.type) {
    case 'FETCH_EMAILS':
      return [...email, action.payload]

    default:
      return email
  }
}

export default combineReducers({ emails: fetchEmailReducer })
