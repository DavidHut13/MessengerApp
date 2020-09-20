import React, { Component } from 'react'
import classes from './LoginUser.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

class Modal extends Component {
    state = {
        email: '',
        password: '',
        isRegistered: false
    }
    onAuthUserHandler = (event) => {
        event.preventDefault()
        this.props.authUser(this.state.email,this.state.password,this.state.isRegistered)
    }
    onRegisterHandler = (event) => {
        event.preventDefault()
        this.props.onRegisterUser()
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
                    <input type="password" className={classes.InputField} value={this.state.password} onChange={(event) => this.onInputChangeHandler(event,'password')}  placeholder="Password..."></input>
                    <button onClick={this.onAuthUserHandler} className={classes.LoginBtn}>Login</button>
                    <hr></hr>
                    <p>or</p>
                    <button className={classes.RegisterBtn} onClick={this.onRegisterHandler}>Create an Account</button> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authUser:(email,password,isRegistered) => dispatch(actions.auth(email,password,isRegistered)),
        onRegisterUser:() => dispatch(actions.registerUser())
    }
}

export default connect(null,mapDispatchToProps)(Modal);