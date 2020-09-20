import React  from 'react'
import classes from './Modal.module.css'



const Modal = (props) => {
    return (
        <div className={classes.Modal} style={{display: props.show ? 'block':'none'}}>
                {props.children}
        </div>
    ) 
}



export default Modal ;