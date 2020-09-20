import React, {Component} from 'react'
import classes from './ChatRooms.module.css'
import Room from './Room/Room'


class SideDrawer extends Component {

    render() {
        return (
            <div className={classes.DrawerWrapper}>
                <h3 className={classes.Header}>Chat Rooms</h3>
                <div className={classes.Rooms}>
                    <Room icon={"lobby"} />
                    <Room icon={"robot"} />
                    <Room icon={"add"} />
                </div>
            </div>
        )
    }
}

export default SideDrawer;