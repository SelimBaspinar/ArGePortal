import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Form,FormGroup,Label,Input, Row,Col} from 'reactstrap';

import {connect} from "react-redux";
import {getData} from '../Redux/actions/dataAction'
import {deleteData} from '../Redux/actions/dataAction'
import {getActiveItem} from '../Redux/actions/dataAction'
import {addData} from '../Redux/actions/dataAction'
import { getAbilitiyRatings } from '../Redux/actions/abilityratingActions'
import { addPAbility } from '../Redux/actions/pabilitiesAction'
import axios from "axios";
import qs from "qs";
import $ from "jquery"


function AddProject({abilityratings,pabilities,addPAbility, getAbilitiyRatings,projects,activeItem,getActiveItem,addData,getData,deleteData,...props}) {
  const [abilityrating, setAbilityrating] = useState(1)


 


  useEffect(() => {
    getAbilitiyRatings();
  }, [])

  const addProject = async () => {
    let lang=[]
        activeItem.Code=document.getElementById("projectCode").value
        activeItem.Name=document.getElementById("projectName").value
        activeItem.Description=document.getElementById("projectDescription").value
        $('#abilityitem li').each(function () {
         lang.push($((this)).clone().children().remove().end().text())
        });
        activeItem.Language=lang.toString()
        activeItem.Start_Time=document.getElementById("projectStartTime").value
        activeItem.End_Time=document.getElementById("projectEndTime").value
        activeItem.Personal_Count=document.getElementById("personalCount").value
        activeItem.Budget=document.getElementById("projectBudget").value
  
        const {data} =await axios.post("/api/projects/", qs.stringify(activeItem)).catch((err) => console.log(err));; 
        getData();  
        let abilities1={}
        let activedataid=data.id;

        $('#abilityitem li').each(function () {
          if ($((this)).clone().children().text() === "low level") {
            abilities1 = {
              Name: $((this)).clone().children().remove().end().text(),
              Ability_Rating: 1,
              Project: parseInt(activedataid)
            }
    console.log(abilities1)
            addPAbility(abilities1)
          } else if ($((this)).clone().children().text() === "intermediate level") {
            abilities1 = {
              Name: $((this)).clone().children().remove().end().text(),
              Ability_Rating: 2,
              Project: parseInt(activedataid)
            }
    console.log(abilities1)
            addPAbility(abilities1)
          } else {
            abilities1 = {
              Name: $((this)).clone().children().remove().end().text(),
              Ability_Rating: 3,
              Project: parseInt(activedataid)
            }
    console.log(abilities1)
            addPAbility(abilities1)
          }
        
        });


       }
      
    
      const renderabilityrating = () => {
        return  abilityratings.map((rating) => (
         <option>
            {rating.Name}
          </option>
        ))
      }
      const addabilities = () => {
        let name = document.getElementById("abilityname").value;
        let level = document.getElementById("backdrop").value;
    
    
        var lielement = $("<li></li>").text(name).addClass("list-group-item d-flex justify-content-between align-items-center");
        var spanelement = $("<span></span>").text(level).addClass("badge badge-primary badge-pill")
        $(".list-group").append(lielement);
    
        $("#abilityitem li:last-child").append(spanelement);
    
      }
      const deleteabilities = () => {
        $("#abilityitem li:last-child").remove();
    
      }
    const { toggle} = props;


    return (
      <Row>

        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Project Item</ModalHeader>
        <Col className="col-12">       

        <Form>
          <ModalBody>
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
      <Label for="text" className="form-label">Abilities</Label>
              <FormGroup className="input-group mb-3" >
                <div>
                <Input type="text" name="ability name" id="abilityname" className="form-control" placeholder="ability name" />
                </div>

                <Input type="select" name="backdrop" id="backdrop" >
           {renderabilityrating()} 
               </Input>

                <div className="input-group-append">
                  <button className="btn btn-primary" id="addabilitybutton" onClick={addabilities} type="button">Add</button>
                  <button className="btn btn-danger" id="deleteabilitybutton" onClick={deleteabilities} type="button">Delete</button>
                </div>
                <div className="valid-feedback">Valid.</div>
                <div id="phoneinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <ul id="abilityitem" className="list-group">
              </ul>
              </ModalBody>

    </Form>
    </Col>

        <ModalFooter>
        <Button onClick={addProject}>Add</Button>
        </ModalFooter>
      </Modal>
      </Row>
    );
}
function mapStateToProps(state,ownProps){
    return{
    projects:state.dataListReducers, 
    activeItem:state.activeItemReducers,
    abilityratings: state.abilityRatingReducers,
    pabilities: state.pabilitiesReducers,

    }
    }
    const mapDispatchToProps= {
          getData,deleteData,getActiveItem,addData,getAbilitiyRatings,addPAbility 
      }

export default connect(mapStateToProps,mapDispatchToProps)(AddProject)