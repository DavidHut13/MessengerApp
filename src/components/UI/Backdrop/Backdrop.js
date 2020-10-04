import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) => (
    props.showModal ? 
    <div className={classes.Backdrop} onClick={props.LoginModalHandler}>
        {props.children}
    </div> : null
)
export default backdrop