import React, { Component } from 'react'
import classes from './Navigation.module.css'
import Modal from '../../Modal/Modal'

class Navigation extends Component {
    state = {
        showModal: false
    }
    LoginModalHandler = () => {
        this.setState({showModal: !this.state.showModal})
    }
    
  render () {
    let loginModal = null
    if (this.state.showModal){
        loginModal = <Modal/>
    }
      return (
        <div >
            <ul className={classes.NavWrapper}>
                <li onClick={this.LoginModalHandler} className={classes.NavItem}>Login</li>
            </ul>
            {loginModal}
        </div>
    );
  }  
} 

export default Navigation;