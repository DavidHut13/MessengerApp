import React, { Component } from 'react'
import classes from './Modal.module.css'


class Modal extends Component {
    render() {
        return (
            <div className={classes.Modal}>
                <form className={classes.ModalsignInWrapper}>
                    <input className={classes.InputField} placeholder="Email..."></input>
                    <input className={classes.InputField}  placeholder="Password..."></input>
                    <button className={classes.LoginBtn}>Login</button>
                </form>
            </div>
        )
    }
}

export default Modal;