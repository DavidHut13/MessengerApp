import React, { Component } from 'react'
import classes from './Room.module.css'


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
           <>
                <div className={classes.circle}>
                    {icon}
                </div>
           </>
       )
   }
}

export default Room;