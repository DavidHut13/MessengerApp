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
        if(input === 'userName'){
            this.setState({userName: event.target.value})
        }
    }
    render() {
        return (
            <div className={classes.Modal}>
                <form className={classes.ModalsignInWrapper}>
                    <h2>Sign up.</h2>
                    <label className={classes.label}>
                        Email:
                        <input className={classes.InputField} value={this.state.email} onChange={(event) => this.onInputChangeHandler(event,'email')}></input>
                    </label>
                    <label className={classes.label}>
                        Username:
                        <input  className={classes.InputField} value={this.state.userName} onChange={(event) => this.onInputChangeHandler(event,'userName')}></input>
                    </label>
                    <label className={classes.label}>
                        Password:
                        <input type="password" className={classes.InputField} value={this.state.password} onChange={(event) => this.onInputChangeHandler(event,'password')}></input>
                    </label>
                    <button onClick={this.onAuthUserHandler} className={classes.RegisterBtn}>Sign Up</button>
                    <div className={classes.LineBreak}>OR</div>
                    <div className={classes.Center}>
                        <button onClick={this.props.registerUserHandler} className={classes.LoginBtn}>Login</button>
                    </div> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser:(email,password,isRegistered) => dispatch(actions.registerUser(email,password,isRegistered)),
    }
}

export default connect(null,mapDispatchToProps)(Modal);