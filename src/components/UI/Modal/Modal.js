import React  from 'react'
import classes from './Modal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'



const Modal = (props) => {
    let cssClasses = [
        classes.Modal,
        props.showModal === 'entering' ? classes.ModalOpen:null,
        props.showModal === 'exiting' ? classes.ModalClosed: null]
    return (
        <>
            <Backdrop showModal={props.modalOpen}  LoginModalHandler={props.LoginModalHandler}></Backdrop>
                <div className={cssClasses.join(' ')}>
                    {props.children}
                </div>
        </>
    )     
}



export default Modal ;