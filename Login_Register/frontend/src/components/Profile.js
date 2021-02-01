import React from 'react';
import {connect} from 'react-redux';
import { Link} from "react-router-dom";
import {logout} from "../redux/action/userAction";


function Profile(props) {
    
  
    return (
        <div>
            <h1>{props.userDetails.username} </h1>
             <Link to="#" onClick={()=>props.logoutUser()}>Logout</Link> 
    </div> 
    ) 
  }
  
      
        
  

const mapStatetoProps=(state)=>{
  return{
     userDetails:state.user.userDetails,
  }
 }

 const mapDispatchtoProps=(dispatch)=>{
  return{
     
     logoutUser:function(){
      dispatch(logout());
  },
     
  }
 }
export default connect(mapStatetoProps,mapDispatchtoProps)(Profile);