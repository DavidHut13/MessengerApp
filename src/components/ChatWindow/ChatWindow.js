import React, {Component} from 'react'
import classes from './ChatWindow.module.css'
import MessageHistory from './MessageHistory/MessageHistory'
import CreateMessage from './CreateMessage/CreateMessage'

class Messages extends Component {
    render() {
        return (
            <div className={classes.ChatWindowWrapper}>
                <MessageHistory/>
                <CreateMessage/>
            </div>
        )
    }
}

export default Messages;
