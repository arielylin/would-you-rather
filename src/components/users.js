import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAuthedUser} from '../actions/authedUser'

class Users extends Component {
    render() {
        const {users} = this.props
        return (
            <div className="login-users">
                <ul className='users'>
                    {Object.entries(users).map(([key, user]) => 
                    <li key={key} className='user'>
                        <div className='user-avatar'>
                            <img src={user.avatarURL}
                            />
                        </div>
                        <div className='user-name'>{user.name}</div>
                        <input
                        type='checkbox'
                        className='login-checkbox'
                        onClick={() => this.handleUserLogin(user)}/>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

function handleUserLogin(user){
    // to do: dispatch an action that takes the user clicked on as the argument, and make reducer to put that user into its own authuser state
    return this.props.dispatch(getAuthedUser(user))
}

function mapStateToProps({users}) {
    return {
        users: users
    }
}


export default connect(mapStateToProps)(Users)