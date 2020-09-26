import React  from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'


const Modal = (props) => {
    return (
        <>
            <Backdrop showModal={props.showModal}  LoginModalHandler={props.LoginModalHandler}/>
            <div className={classes.Modal} style={{display: props.showModal ? 'block':'none'}}>
                    {props.children}
            </div>
        </>
    )     
}



export default Modal ;