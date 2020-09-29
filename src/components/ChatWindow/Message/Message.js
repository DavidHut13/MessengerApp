import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={classes.MessageWrapper} key={props.messageId}>
            {/* <div>{msg.sender}</div> */}
        <div className={classes.CircleIcon}>{props.photoId}</div>
            <div className={classes.MessageBubble} >{props.message}</div>
        </div>
    )
}

export default Message