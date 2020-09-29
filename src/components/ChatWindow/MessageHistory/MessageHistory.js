import React, { Component } from 'react'
import classes from './MessageHistory.module.css'
import { connect } from 'react-redux'
import Message from '../Message/Message'

class MessageHistory extends Component {
   render() {
       const messageHist = this.props.messageHistory.map( msg => (
        <Message sender={msg.sender} messageId={msg.id} message={msg.message}/>
       ))
    return (
        <div className={classes.MessageHistoryWrapper}>
            {messageHist}
        </div>
    )
   }
}

const mapStateToProps = state => {
   return {
    message: state.message.message
   }
}

export default connect(mapStateToProps)(MessageHistory);