import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { getInitialData } from "../api";
import { authUser } from "./authedUser";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
