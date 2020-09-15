import React, { Component } from 'react'
import classes from './MessageHistory.module.css'
import { connect } from 'react-redux'


class MessageHistory extends Component {
   render() {
       const messageHist = this.props.messageHistory.map( msg => (
        <div key={msg.id}>
            <p className={classes.MessageBubble} >{msg.message}</p>
        </div>
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
    message: state.message
   }
}

export default connect(mapStateToProps)(MessageHistory);