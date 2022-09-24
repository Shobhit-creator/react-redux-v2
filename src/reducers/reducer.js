import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_PAGE
  } from '../actions/actionsType'
  
  const initialState = {
    loading: false,
    users: [],
    page: 1,
    error: '',
  }
  
  export default function reducer(state = initialState, action){
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: action.payload
        }
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload
        }
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case SET_PAGE:
        return {
          ...state,
          page: action.payload
        }
      default: return {...state}
    }
  }
  
