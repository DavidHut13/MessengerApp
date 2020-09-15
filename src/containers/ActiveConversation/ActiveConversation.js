import React, {Component} from 'react'
import classes from './ActiveConversation.module.css'
import RoomDetails from '../../components/RoomDetails/RoomDetails'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import { Row,Col } from 'react-bootstrap'

class ActiveConversation extends Component {
    render() {
        return (
                <Row className={classes.ActiveWrapper}>
                    <Col className={classes.fullScreen} md={8} xs={8}>
                        <ChatWindow/>
                    </Col>
                    <Col className={classes.fullScreen} md={4} xs={4}>
                        <RoomDetails/>
                    </Col>
                </Row> 
        )
    }
}

export default ActiveConversation;