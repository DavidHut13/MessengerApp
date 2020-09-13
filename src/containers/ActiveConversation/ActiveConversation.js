import React, {Component} from 'react'
import classes from './ActiveConversation.module.css'
import ContactDetails from '../../components/ContactDetails/ContactDetails'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import { Container,Row,Col } from 'react-bootstrap'

class ActiveConversation extends Component {
    render() {
        return (
            <Container>
                <Row noGutters={true} className={classes.ActiveWrapper}>
                    <Col className={classes.fullScreen} md={6} xs={6}>
                        <ChatWindow/>
                    </Col>
                    <Col className={classes.fullScreen} md={6} xs={6}>
                        <ContactDetails/>
                    </Col>
                </Row> 
            </Container>  
        )
    }
}

export default ActiveConversation;