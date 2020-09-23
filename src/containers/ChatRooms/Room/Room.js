import React, { Component } from 'react'
import classes from './Room.module.css'
import { NavLink } from 'react-router-dom'

class Room extends Component{
   render() {
       let icon = null
       switch(this.props.icon){
           case "lobby": 
                icon = <i className="fas fa-home"></i>
                break;
           case "add": 
                icon = <i className="fas fa-plus"></i>
                break;
           case "robot": 
                icon = <i className="fas fa-robot"></i>
                break;
            default:  icon = <i class="fas fa-home"></i>
       }

       return (
           <li className={classes.Room}>
                <NavLink to={this.props.icon}  activeClassName={classes.active}>
                    <div className={classes.Circle}>
                        {icon}
                    </div> 
                </NavLink>  
           </li>
            
       )
   }
}

export default Room;