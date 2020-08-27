import React, {Component} from 'react'
import classes from './CreateMessage.module.css'
import * as actions from '../../../store/actions'
import { connect } from 'react-redux'

class CreateMessage extends Component {
    ws = new WebSocket('ws://localhost:8765')
    componentDidMount() {
        
        console.log('connecting')
        this.ws.onopen = () => {
            console.log('Connected')
        }
        this.ws.onerror = (error) => {
            console.log(error)
        }
        this.ws.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });
    }

    
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
                this.ws.send(this.state.message)
                this.setState({message:""})
            }
            catch (error) {
                console.log(error)
            }
        }
        this.ws.send('David')
    }
 render() {
     
    return (
        <div className={classes.CreateMessageWrapper} >
            <form className={classes.formWrapper}>
                <input className={classes.inputMessage} placeholder="Type a message..." type="text" value={this.state.message} onChange={(event) => this.inputChangeHandler(event)}></input>
                <button className={classes.sendMsgBtn} onClick={(event) => this.onSendMessageHandler(event)}>Submit</button>
            </form> 
        </div>
    )
 }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddMessage:(message) => dispatch(actions.newMessage(message))
    }
}

export default connect(null,mapDispatchToProps)(CreateMessage);