import React, { Component } from 'react'
import classes from './Navigation.module.css'
import Modal from '../../UI/Modal/Modal'
import LoginUser from '../../Authentication/LoginUser/LoginUser'
import RegisterUser from '../../Authentication/RegisterUser/RegisterUser'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class Navigation extends Component {
    state = {
        showModal: false
    }
    LoginModalHandler = () => {
        this.setState({showModal: !this.state.showModal})
        this.props.onSignUp()
    }
    
  render () {

    let content = null
    if (this.props.registerUser){
        content = <RegisterUser/>
    }
    else {
        content = <LoginUser/>
    }
      return (
        <>
            <ul className={classes.NavWrapper}>
                <li onClick={this.LoginModalHandler} className={classes.NavItem}>Login</li>
            </ul>
            <Modal show={this.state.showModal} closeModal={this.LoginModalHandler}>
              {content}
            </Modal>
        </>
    );
  }  
}

const mapStateToProps = state => {
  return {
    registerUser: state.auth.registerUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp:() => dispatch(actions.signInUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);