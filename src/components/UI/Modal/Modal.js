import React  from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'


const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} closeModal={props.closeModal}/>
            <div className={classes.Modal} style={{display: props.show ? 'block':'none'}}>
                    {props.children}
            </div>
        </>
    )     
}



export default Modal ;