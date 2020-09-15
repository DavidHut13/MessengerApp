import React from 'react';
import classes from './RoomDetails.module.css';


const ContactDetails = () => {
        return (
            <div className={classes.Wrapper}>
                <h3 className={classes.Header}>Room Details</h3>
                <h5 className={classes.Connected}>connected</h5>
            </div>
        )
}

export default ContactDetails;