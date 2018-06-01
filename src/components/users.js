import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="login-users">
        <ul className="users">
          {Object.entries(users).map(([key, user]) => (
            <li key={key} className="user">
              <div className="user-avatar">
                <img src={user.avatarURL} />
              </div>
              <div className="user-name">{user.name}</div>
              <input
                type="checkbox"
                className="login-checkbox"
                onClick={() => this.handleUserLogin(user)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleUserLogin = user => {
    return this.props.dispatch(authUser(user));
    // we need to re-route the page once the authUser action is dispatched
    // to do: get history and push new url .  import withRouter and wrap it to the component using it below
  };
}

function mapStateToProps({ users }) {
  return {
    users: users
  };
}

export default connect(mapStateToProps)(Users);
