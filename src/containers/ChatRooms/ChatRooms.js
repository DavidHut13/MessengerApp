import React, {Component} from 'react'
import classes from './ChatRooms.module.css'
import Room from './Room/Room'

class SideDrawer extends Component {

    render() {
        return (
            <div className={classes.DrawerWrapper}>
                <h3 className={classes.Header}>Chat Rooms</h3>
                <ul className={classes.Rooms}> 
                        <Room icon={"lobby"} />
                        <Room icon={"robot"} />
                        <Room onClick={this.addServer} icon={"add"} />
                </ul>
            </div>
        )
    }
}

export default SideDrawer;