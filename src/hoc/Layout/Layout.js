import React, { Component } from 'react'
import SideDrawer from '../../containers/SideDrawer/SideDrawer'
import ActiveConversation from '../../containers/ActiveConversation/ActiveConversation'
import classes from './Layout.module.css'
import Navigation from '../../components/Navigation/TopNavigation/Navigation'
import {connect} from 'react-redux'

class Layout extends Component {
    render() {
        return(
            <>
                <Navigation/>
                <div className={classes.LayoutWrapper}>
                    <SideDrawer/>
                    <ActiveConversation/>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        showModal: state.showLoginModal
    }
}

export default connect(mapStateToProps)(Layout);