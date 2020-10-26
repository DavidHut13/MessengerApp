import React, { Component } from 'react'
import classes from './LoginUser.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import GoogleBtn from '../../UI/GoogleBtn/GoogleBtn'
class Modal extends Component {

    state = {
        email: '',
        password: '',
        isRegistered: false,
        error: '',
    }
    ValidateInput = () => {

    } 
    emailLoginHandler = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state.email,this.state.password,this.state.isRegistered)
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
        let errorMessage = null
        if(this.props.error){
            errorMessage = (
                <p>
                    {this.props.error.message}
                </p>
            )
        }
        return (
            <div className={classes.Modal}>
                <form className={classes.ModalsignInWrapper}>
                    <h2 className={[classes.LoginHeader, "red"].join(' ')}>Login.</h2>
                    <label className={classes.label}>
                        Email:
                        <input className={classes.InputField} value={this.state.email} onChange={(event) => this.onInputChangeHandler(event,'email')}></input>
                    </label>
                    <label className={classes.label}>
                        Password:
                        <input type="password" className={classes.InputField} value={this.state.password} onChange={(event) => this.onInputChangeHandler(event,'password')}></input>
                    </label>
                    <div className={classes.BtnWrapper}>
                        <button onClick={this.emailLoginHandler} className={classes.LoginBtn}>Login</button>
                        <GoogleBtn/>
                    </div>
                    <div className={classes.errorMsg}>{errorMessage}</div>
                    <div className={classes.LineBreak}>OR</div>
                    <div className={classes.Center}>
                        <button className={classes.RegisterBtn} onClick={this.props.registerUserHandler}>Sign up</button> 
                    </div>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        loginUser:(email,password,isRegistered) => dispatch(actions.loginUser(email,password,isRegistered)),
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);