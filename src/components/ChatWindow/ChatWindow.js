import React, {Component} from 'react'
import classes from './ChatWindow.module.css'
import MessageHistory from './MessageHistory/MessageHistory'
import CreateMessage from './CreateMessage/CreateMessage'

class Messages extends Component {
    ws = new WebSocket('ws://localhost:5050')
    
    state = {
        chatLog: []
    }
    
    componentDidMount() {
        this.ws.binaryType = 'arraybuffer'
        this.ws.onopen = () => {
            // console.log('Connected')
        }
        this.ws.onerror = (error) => {
            console.log(error)
        }
        this.ws.onmessage = (event) => {
            // console.log(event.data)
            var jsonObj = JSON.parse(event.data)
            console.log(jsonObj)
            this.setState({chatLog: [...this.state.chatLog, jsonObj] })
        }
    }
    render() {       
      
        return (
            <div className={classes.ChatWindowWrapper}>
                <MessageHistory messageHistory={this.state.chatLog} websocket={this.ws}/>
                <CreateMessage websocket={this.ws}/>
            </div>
        )
    }
}

export default Messages;
