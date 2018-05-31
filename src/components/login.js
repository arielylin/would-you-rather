import React, {Component} from 'react'
import {connect} from 'react-redux'
import Users from './users'


class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <h1 className='login-header'>Login</h1>
                <Users/>
            </div>
        )
    }
}


export default connect()(Login)