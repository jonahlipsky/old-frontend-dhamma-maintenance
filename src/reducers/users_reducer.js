import { merge } from 'lodash';
import { RECEIVE_USERS, FETCH_USERS } from '../actions/user_actions'

export default ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USERS:
      action.users.forEach(user => {
        newState = merge(newState, {[user.id]: user})
      })
      return newState;
    case FETCH_USERS:
      console.log("Fetching users!")
    default:
      return state;
  }
}
