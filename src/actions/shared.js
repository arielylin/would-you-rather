import { getUsers } from "../actions/users";
import { getInitialData } from "../api";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users }) => {
      dispatch(getUsers(users));
    });
  };
}

// can i somehow get all data instead of only using those methods for getting specific data
