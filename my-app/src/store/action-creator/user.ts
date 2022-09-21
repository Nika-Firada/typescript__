import { UserAction } from "../../types/user";
import { UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "There was ERROR",
      });
    }
  };
};
