import React, { useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import {connect} from "react-redux";
import {getUsers} from '../Redux/actions/userActions'
import {getActiveUser} from '../Redux/actions/userActions'
import {deleteUser} from '../Redux/actions/userActions'
import {editUser} from '../Redux/actions/userActions'
import {addUser} from '../Redux/actions/userActions'
import {loginStat} from '../Redux/actions/loginActions'
import {useHistory} from "react-router-dom";


function Login({loginStat,activeuser,users,getUsers,getActiveUser,deleteUser,editUser,addUser ,...props}){
  let history = useHistory();
/* eslint eqeqeq: 0 */
  useEffect(() => {
getUsers()
  }, [getUsers])
  
const login = () => {
  let email=document.getElementById("email").value
  let password=document.getElementById("password").value


 users.forEach((user)=>{
   if(user.Email===email&&user.Password===password){
     localStorage.setItem("loginstat","true")
     localStorage.setItem("activeuser",JSON.stringify(user))

getActiveUser(user)
loginStat("true")
history.push("/Profile");
  }else{
    if(user.Password!==password){
      if(password===""){
        document.getElementById("passwordinvalid").innerHTML="Please fill out this field."
      }else{
        document.getElementById("passwordinvalid").innerHTML="Password is incorrect."
      }
      document.getElementById("password").className = "form-control is-invalid"; 
    }
    if(user.Email!==email){
      if(email===""){
        document.getElementById("emailinvalid").innerHTML="Please fill out this field."
      }else{
        document.getElementById("emailinvalid").innerHTML="Email is incorrect."
      }
      
    document.getElementById("email").className = "form-control is-invalid"; }
  }
}
  )

    


 }
   
    return (
      <div>
        
        <Container>
          <Row>
            <Col>
            
</Col>
            <Col >
            <h1>Login</h1>
            <Form noValidate>
      <FormGroup>
        <Label for="email">Email :</Label>
        <Input className="form-control" type="email" name="email" id="email"  required/>
        <div className="valid-feedback">Valid.</div>
      <div id="emailinvalid" className="invalid-feedback">Please fill out this field.</div>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password :</Label>
        <Input className="form-control" type="password" name="password" id="password"  required/>
        <div className="valid-feedback">Valid.</div>
      <div id="passwordinvalid" className="invalid-feedback">Password is incorrect.</div>
      </FormGroup>
     <br></br> 
     <Button className="justify-content-center" color="primary" onClick={()=>login()} >Log in</Button>
    </Form>  
            </Col>
            <Col ></Col>
          </Row>
        </Container>
   <Container>
     <Row>
     <Col ></Col>
     <Col >
     <hr></hr>
     <p className="text-center">If you don't have an account? <a href="#\" onClick={()=>history.push("/Register")}>Register</a>.</p>
     </Col>
     <Col ></Col>
     </Row>
     </Container>    
      </div>
    );
  }
  function mapStateToProps(state,ownProps){
    return{
    users:state.userReducers,
    activeuser:state.activeUserReducers, 
    loginstat:state.loginReducers
    }
    }
    const mapDispatchToProps= {
          getUsers,getActiveUser,deleteUser,editUser,addUser,loginStat 
      }

export default connect(mapStateToProps,mapDispatchToProps)(Login)
