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
                    <h2 className={classes.LoginHeader}>Login.</h2>
                    <label className={classes.label}>
                        Email:
                        <input className={classes.InputField} value={this.state.email} onChange={(event) => this.onInputChangeHandler(event,'email')}></input>
                    </label>
                    <label className={classes.label}>
                        Password:
                        <input type="password" className={classes.InputField} value={this.state.password} onChange={(event) => this.onInputChangeHandler(event,'password')}></input>
                    </label>
                    
                    
                    
                    <button onClick={this.onAuthUserHandler} className={classes.LoginBtn}>Login</button>
                    <div className={classes.LineBreak}>OR</div>
                    <div className={classes.Center}>
                        <button className={classes.RegisterBtn} onClick={this.onRegisterHandler}>Sign up</button> 
                    </div>

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