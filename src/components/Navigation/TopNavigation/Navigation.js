import React, { Component } from 'react'
import classes from './Navigation.module.css'
import Modal from '../../UI/Modal/Modal'
import LoginUser from '../../Authentication/LoginUser/LoginUser'
import RegisterUser from '../../Authentication/RegisterUser/RegisterUser'
import {connect} from 'react-redux'
import Transition from 'react-transition-group/Transition'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Navigation extends Component {
    state = {
        showModal: false,
        registerUser: false
    }
    LoginModalHandler = () => {
        this.setState({showModal: !this.state.showModal})
        this.setState({registerUser: false})
        console.log(this.state.registerUser)
    }
    registerUserHandler = (event) => {
      event.preventDefault()
      this.setState({registerUser: !this.state.registerUser})
    }
  render () {

    let content = null
    if (this.state.registerUser){
        content = <RegisterUser registerUserHandler={this.registerUserHandler}/>
    }
    if (!this.state.registerUser){
        content = <LoginUser registerUserHandler={this.registerUserHandler}/>
    }
      return (
        <>
            <ul className={classes.NavWrapper}>
                <li onClick={this.LoginModalHandler} className={classes.NavItem}>Login</li>
            </ul>
              <Transition mountOnEnter unmountOnExit in={this.state.showModal} timeout={300}>
                {state => (
                    <Modal showModal={state}>
                      {content}
                    </Modal>
                )}
              </Transition>
              <Backdrop showModal={this.state.showModal}  LoginModalHandler={this.LoginModalHandler}/>
        </>
    );
  }  
}

const mapStateToProps = state => {
  return {
    registerUser: state.auth.registerUser
  }
}


export default connect(mapStateToProps)(Navigation);