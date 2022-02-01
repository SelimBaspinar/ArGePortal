import React, { useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import {connect} from "react-redux";
import {getData} from '../Redux/actions/dataAction'
import {deleteData} from '../Redux/actions/dataAction'
import {updateData} from '../Redux/actions/dataAction'
import {addData} from '../Redux/actions/dataAction'

import {getActiveItem} from '../Redux/actions/dataAction'



function ProjectManagement({projects,activeItem,id,getData,getActiveItem,deleteData,updateData,addData,...props}){
 
  useEffect(() => {
   
    listProject();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
const listProject = () => {
  let name;
   let desc;
   let lang;
   let starttime;
   let endtime;
   let personalcount;
   let budget;
   let code;

   code=  activeItem.Code
   name = activeItem.Name
desc = activeItem.Description
lang = activeItem.Language
starttime= activeItem.Start_Time
endtime = activeItem.End_Time
personalcount = activeItem.Personal_Count
budget = activeItem.Budget


document.getElementById("projectCode").value=code
document.getElementById("projectName").value=name
document.getElementById("projectDescription").value=desc
document.getElementById("projectLanguage").value=lang
document.getElementById("projectStartTime").value=starttime
document.getElementById("projectEndTime").value=endtime
document.getElementById("personalCount").value=personalcount
document.getElementById("projectBudget").value=budget
    
}
   
const updateProject = () => {
  activeItem.Code=document.getElementById("projectCode").value
  activeItem.Name=document.getElementById("projectName").value
  activeItem.Description=document.getElementById("projectDescription").value
  activeItem.Language=document.getElementById("projectLanguage").value
  activeItem.Start_Time=document.getElementById("projectStartTime").value
  activeItem.End_Time=document.getElementById("projectEndTime").value
  activeItem.Personal_Count=document.getElementById("personalCount").value
  activeItem.Budget=document.getElementById("projectBudget").value

  updateData(activeItem);    props.history.push('/');

 }
const deleteProject = () => {
 
   
   deleteData(activeItem);

    props.history.push('/');

}

    


    return (
      <div>
        <h1>Project Management</h1>
        <Container>
          <Row>
            <Col md="7">
            <Form>
      <FormGroup>
        <Label for="projectCode">Code</Label>
        <Input type="text" name="projectCode" id="projectCode"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectName">Name</Label>
        <Input type="text" name="projectName" id="projectName"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectDescription">Description</Label>
        <Input type="textarea" name="projectDescription" id="projectDescription"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectLanguage">Programming Language</Label>
        <Input type="text" name="projectLanguage" id="projectLanguage"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectStartTime">Start Time</Label>
        <Input type="date" name="projectStartTime" id="projectStartTime"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectEndTime">End Time</Label>
        <Input type="date" name="projectEndTime" id="projectEndTime"  />
      </FormGroup>
      <FormGroup>
        <Label for="personalCount">Personal Count</Label>
        <Input type="text" name="personalCount" id="personalCount"  />
      </FormGroup>
      <FormGroup>
        <Label for="projectBudget">Budget</Label>
        <Input type="text" name="projectBudget" id="projectBudget"  />
      </FormGroup>
      <Button onClick={updateProject}>Save</Button>
      <Button onClick={deleteProject}>Delete</Button>
    </Form>
</Col>
            <Col md="2"></Col>
            <Col md="3"></Col>


          </Row>
        </Container>
       
      </div>
    );
  }
  function mapStateToProps(state,ownProps){
    return{
    projects:state.dataListReducers, 
    activeItem:state.activeItemReducers
    }
    }
    const mapDispatchToProps= {
          getData,deleteData,getActiveItem,updateData,addData 
      }

export default connect(mapStateToProps,mapDispatchToProps)(ProjectManagement)
