import React, {Component} from 'react'
import classes from './ActiveConversation.module.css'
import ContactDetails from '../../components/ContactDetails/ContactDetails'
import ChatWindow from '../../components/ChatWindow/ChatWindow'

class ActiveConversation extends Component {
    render() {
        return (
            <div className={classes.DrawerWrapper}>
                <ChatWindow/>
                <ContactDetails/>
            </div>
        )
    }
}

export default ActiveConversation;