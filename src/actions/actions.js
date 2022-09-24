import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_PAGE
} from './actionsType'

export const fetchUsers = (users, page) => (dispatch) => {
    dispatch(fetchUsersRequest(true))
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
            dispatch(fetchUsersSuccess([...users, ...response.data.data]))
        })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
    dispatch(fetchUsersRequest(false))
};

export const fetchUsersRequest = (flag) => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: flag
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchSetPage = page => {
  return {
    type: SET_PAGE,
    payload: page
  }
}