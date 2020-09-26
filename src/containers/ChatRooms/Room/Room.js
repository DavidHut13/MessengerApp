import React, { Component } from 'react'
import classes from './Room.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class Room extends Component{
    addServer = () => {
        axios.get('http://localhost:5000/addServer')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }
   render() {
       let Room = null
       switch(this.props.icon){
           case "lobby": 
                Room = ( 
                    <NavLink to={this.props.icon}  activeClassName={classes.active}>
                        <div className={classes.Circle}>
                            <i className="fas fa-home"></i>
                        </div> 
                    </NavLink>  
                )
                break;
           case "add":
                Room = (
                    <NavLink to={this.props.icon} onClick={this.addServer}  activeClassName={classes.active}>
                        <div className={classes.Circle}>
                        <i className="fas fa-plus"></i>
                        </div> 
                    </NavLink>  
                ) 
                break;
           case "robot": 
                Room =(
                    <NavLink to={this.props.icon}  activeClassName={classes.active}>
                        <div className={classes.Circle}>
                            <i className="fas fa-robot"></i>
                        </div> 
                    </NavLink>  
                ) 
                break;
            default:  Room = (
                <NavLink to={this.props.icon}  activeClassName={classes.active}>
                    <div className={classes.Circle}>
                        <i class="fas fa-home"></i>
                    </div> 
                </NavLink> 
            ) 
       }

       return (
           <li className={classes.Room}>
            {Room}
           </li>
            
       )
   }
}

export default Room;