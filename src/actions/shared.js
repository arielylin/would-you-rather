import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { getInitialData } from "../api";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

// can i somehow get all data instead of only using those methods for getting specific data
