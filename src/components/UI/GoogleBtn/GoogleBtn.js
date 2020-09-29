import React, { Component } from 'react'
import classes from './GoogleBtn.module.css'
import * as firebase from 'firebase';
import {auth} from '../../Firebase/init'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class GoogleBtn extends Component {
    state = {
        ImgSrc: "./img/btn_google_signin_light_normal_web.png"
    }
    googleBtnHover = () => {
        this.setState({ImgSrc: "./img/btn_google_signin_light_pressed_web.png" })
    }
    googleBtnNormal = () => {
        this.setState({ImgSrc: "./img/btn_google_signin_light_normal_web.png" })
    }
    render() {
        return (
            <img 
            className={classes.GoogleBtn} 
            src={this.state.ImgSrc} 
            onClick={this.props.signInWithGoogle} 
            onMouseEnter={this.googleBtnHover} 
            onMouseLeave={this.googleBtnNormal}
            alt="Google Sign-In">
            </img>
        )
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithGoogle:() => dispatch(actions.signInWithGoogle()),
    }
}
export default connect(null,mapDispatchToProps)(GoogleBtn)