import React, {Component} from 'react'
import classes from './SideDrawer.module.css'

class SideDrawer extends Component {
    render() {
        return (
            <div className={classes.DrawerWrapper}>
                <h3>Chat Rooms</h3>
            </div>
        )
    }
}

export default SideDrawer;