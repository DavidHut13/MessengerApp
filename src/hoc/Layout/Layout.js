import React, { Component } from 'react'
import ChatRooms from '../../containers/ChatRooms/ChatRooms'
import ActiveConversation from '../../containers/ActiveConversation/ActiveConversation'
import classes from './Layout.module.css'
import Navigation from '../../components/Navigation/TopNavigation/Navigation'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class Layout extends Component {
    render() {
        return(
            <Container className={classes.Wrapper} fluid="lg">
                <Row>
                    <Col xs={12} >
                        <Navigation/>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={2} md={3}>
                        <ChatRooms/>
                    </Col>
                    <Col xs={10} md={9}>
                        <ActiveConversation/>
                    </Col>
                </Row> 
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        showModal: state.showLoginModal
    }
}

export default connect(mapStateToProps)(Layout);