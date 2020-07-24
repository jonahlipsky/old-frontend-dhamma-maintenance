import * as GRAPHQL_API_UTIL from '../util/graphql_api_util';
import { receiveHttpRequestErrors } from './error_actions';

// action types
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const FETCH_USERS = 'FETCH_USERS';

//action creators
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
})

//thunk actions
export const getUsers = () => dispatch => {
  dispatch(fetchUsers())
  GRAPHQL_API_UTIL.getUsers().then(
    response => { 
      if(response.errors && response.errors.length > 0){
        dispatch(receiveHttpRequestErrors(response.errors))
      } else {
        dispatch(receiveUsers(response.data.getUsers))
      }
    }
  )
}
