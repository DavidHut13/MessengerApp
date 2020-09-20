import React, {Component} from 'react'
import classes from './CreateMessage.module.css'
import * as actions from '../../../store/actions/message'
import { connect } from 'react-redux'

class CreateMessage extends Component {
    state = {
        message: '',
        sender: 'David'
    }
    inputChangeHandler = (event) => {
        this.setState({message: event.target.value})
        
    }
    onSendMessageHandler(event){
        event.preventDefault()
        if(this.state.message) {
            this.props.onAddMessage(this.state.message)
            try {
                this.props.websocket.send(this.state.message)
                this.setState({message:""})
            }
            catch (error) {
                console.log(error)
            }
        }
    }
 render() {
     
    return (
        <div className={classes.CreateMessageWrapper} >
            <form className={classes.formWrapper}>
                <input 
                className={classes.inputMessage} 
                placeholder="Type a message..." 
                type="text" 
                value={this.state.message} 
                onChange={(event) => this.inputChangeHandler(event)}
                onKeyPress={event => {
                    if(event.key === 'Enter'){
                        this.onSendMessageHandler(event)
                    }
                }}
                ></input>
                {/* <button className={classes.sendMsgBtn} onClick={(event) => this.onSendMessageHandler(event)}>Send</button> */}
            </form> 
        </div>
    )
 }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddMessage:(message) => dispatch(actions.newMessage(message)),
    }
}



export default connect(null,mapDispatchToProps)(CreateMessage);