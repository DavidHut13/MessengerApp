import React, { Component } from 'react'
import classes from './RegisterUser.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

class Modal extends Component {
    state = {
        email: '',
        password: '',
        userName: ''
    }
    onSignInHandler = (event) => {
        event.preventDefault()
        this.props.onSignIn()
      
    }
    onAuthUserHandler = (event) => {
        event.preventDefault()
        this.props.authUser(this.state.email,this.state.password,this.state.isRegistered)
    }
    onInputChangeHandler = (event,input) => {
        if(input === 'email'){
            this.setState({email: event.target.value})
        }
        if(input === 'password'){
            this.setState({password: event.target.value})
        }
    }
    render() {
        return (
            <div className={classes.Modal}>
                <form className={classes.ModalsignInWrapper}>
                    <input className={classes.InputField} value={this.state.email} onChange={(event) => this.onInputChangeHandler(event,'email')} placeholder="Email..."></input>
                    <input  className={classes.InputField} placeholder="User Name" value={this.state.userName}></input>
                    <input type="password" className={classes.InputField} value={this.state.password} onChange={(event) => this.onInputChangeHandler(event,'password')}  placeholder="Password..."></input>
                    <button onClick={this.onAuthUserHandler} className={classes.LoginBtn}>Sign Up</button>
                    <hr></hr>
                    <p>or</p>
                    <button onClick={this.onSignInHandler} className={classes.LoginBtn}>Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authUser:(email,password,isRegistered) => dispatch(actions.auth(email,password,isRegistered)),
        onSignIn:() => dispatch(actions.signInUser())
    }
}

export default connect(null,mapDispatchToProps)(Modal);