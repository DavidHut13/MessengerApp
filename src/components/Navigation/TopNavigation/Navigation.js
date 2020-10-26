import React, { Component } from 'react'
import classes from './Navigation.module.css'
import Modal from '../../UI/Modal/Modal'
import LoginUser from '../../Authentication/LoginUser/LoginUser'
import RegisterUser from '../../Authentication/RegisterUser/RegisterUser'
import {connect} from 'react-redux'
import Transition from 'react-transition-group/Transition'
import Dropdown from 'react-bootstrap/Dropdown'


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
          <div className={classes.NavWrapper}>
            <Dropdown >
              <Dropdown.Toggle className={[classes.NavItem, 'my-3'].join(' ')}  variant="none">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item onClick={this.LoginModalHandler} href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Resigister</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
          <Transition mountOnEnter unmountOnExit in={this.state.showModal} timeout={300}>
            {state => (
                <Modal showModal={state} LoginModalHandler={this.LoginModalHandler} modalOpen={this.state.showModal}>
                  {content}
                </Modal>
            )}
          </Transition>
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