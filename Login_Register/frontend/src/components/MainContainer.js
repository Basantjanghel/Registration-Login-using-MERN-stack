import React from 'react'
import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './Profile';

import LoginContainer from "./LoginContainer";
import SignupContainer from './SignupContainer';

function MainContainer(props) {
    const isUserLoggedin=useSelector(state=>state.user.isLoggedIn);
    if(isUserLoggedin===false){
      var callContainer=<><Route exact path="/" component={LoginContainer} /> <Route path="/signup" component={SignupContainer} /></>
    }else{
        callContainer=<><Route exact path="/" component={Profile} /></>
    }

    return (
        <Router>
        {callContainer}
        </Router>
    )
}



export default MainContainer;
