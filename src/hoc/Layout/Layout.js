import React, { Component } from 'react'
import SideDrawer from '../../containers/SideDrawer/SideDrawer'
import ActiveConversation from '../../containers/ActiveConversation/ActiveConversation'
import classes from './Layout.module.css'
import Navigation from '../../components/Navigation/TopNavigation/Navigation'

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

export default Layout;