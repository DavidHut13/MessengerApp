import React  from 'react'
import classes from './Modal.module.css'




const Modal = (props) => {
    let cssClasses = [
        classes.Modal,
        props.showModal === 'entering' ? classes.ModalOpen:null,
        props.showModal === 'exiting' ? classes.ModalClosed: null]
    return (
        <>
            <div className={cssClasses.join(' ')}>
                {props.children}
            </div>
        </>
    )     
}



export default Modal ;