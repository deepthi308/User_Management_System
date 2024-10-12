import { ADD_USER, DELETE_USER } from "../../constants/constants";

const initialState = {
  users: [],
};

export const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((_, id) => id !== action.payload),
      };

    default:
      return state;
  }
};
