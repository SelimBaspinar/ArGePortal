import React, { useEffect, useState, useRef } from "react";
import { Label, Input, Button, Form, FormGroup } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getUsers } from '../Redux/actions/userActions'
import { getActiveUser } from '../Redux/actions/userActions'
import { getActiveDepartment } from '../Redux/actions/departmentActions'
import { getDepartments } from '../Redux/actions/departmentActions'
import { deleteUser } from '../Redux/actions/userActions'
import { editUser } from '../Redux/actions/userActions'
import { addUser } from '../Redux/actions/userActions'
import avatar from "./Vesikalık.png"
import Image from 'react-bootstrap/Image'
import 'bootstrap'
import $ from 'jquery'
function Profile({ activeuser,getActiveDepartment,getDepartments,departments,activedepartment, getActiveUser, deleteUser, editUser, addUser, ...props }) {
    const mounted = useRef();

    useEffect(() => {
        getDepartments();
        matchDepartment();
        if (activeuser.Gender === "Male") {
            $("#customRadio1").prop("checked", true);
        }
        else {
            $("#customRadio2").prop("checked", true);
            console.log(activeuser.Gender)
        }

    }, [activeuser,getDepartments])

const matchDepartment=()=>{
    departments.forEach((depart)=>{
if(activeuser.Department == depart.id){
    getActiveDepartment(depart);
}

    })
}

    return (
        <div>
            <Container>
                <Row>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2 className="text-center">
                            Profil Bilgileri
                        </h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Form noValidate>
                    <Row>
                    <Col></Col>
                        <Col><div className="text-center">
                                <a >
                                <Image width="180" height="180" src={avatar} roundedCircle  />
                                </a>
                                
                                <p>{activeuser.Name} {activeuser.Surname}</p>
                                </div>

                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="name" >Name</Label>
                                <Input className="form-control" type="name" name="name" id="Name" disabled defaultValue={activeuser.Name} />

                            </FormGroup>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="username" name="username" id="Username" disabled defaultValue={activeuser.Username} />

                            </FormGroup>
                            <FormGroup>
                                <Label className="custom-control-inline" for="radio">Gender : </Label>
                                <div className="custom-control custom-radio custom-control-inline disabled">
                                    <Input type="radio" className="control-input" id="customRadio1" name="example1" disabled/>
                                    <Label className ="control-label" for="customCheck">Male</Label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline disabled">
                                    <Input type="radio" className="control-input" id="customRadio2" name="example1" disabled/>
                                    <Label className ="control-label" for="customCheck">Female</Label>
                                </div>

                            </FormGroup>

                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="surname">Surname</Label>
                                <Input type="surname" name="surname" id="Surname" disabled defaultValue={activeuser.Surname} />

                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="Password"  disabled defaultValue={activeuser.Password}  />

                            </FormGroup>

                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <FormGroup>
                                <Label for="branch">Branch</Label>
                                <Input type="text" name="branch" id="Branch"  disabled defaultValue={activeuser.Branch}  />

                            </FormGroup>
                            <FormGroup>
                                <Label for="roleid">Role Id</Label>
                                <Input type="text" name="roleid" id="Role_Id"  disabled defaultValue={activeuser.Role} >

                                </Input>

                            </FormGroup>
                            <FormGroup>
                                <Label for="graduate">Graduate</Label>
                                <Input type="text" name="graduate" id="Graduate" disabled defaultValue={activeuser.Graduate} />

                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="Email" disabled defaultValue={activeuser.Email} />

                            </FormGroup>
                            <Button color="primary" >Change</Button>
                        </Col>
                        <Col><FormGroup>
                            <Label for="birthday">Birthday</Label>
                            <Input type="date" id="Birthday" name="birthday" disabled defaultValue={activeuser.Birthday} />

                        </FormGroup>
                            <FormGroup>
                                <Label for="departments">Departments</Label>
                                <Input type="text" name="departments" id="Department" disabled defaultValue={activedepartment.Name}>

                                </Input>

                            </FormGroup>
                            <FormGroup>
                                <Label for="phone" className="form-label">Phone Number</Label>
                                <Input type="phone" name="phone" id="Phone" pattern="[0-9]{10}" placeholder="Max Length is 11" disabled defaultValue={activeuser.Phone} />

                            </FormGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>

            </Container>



        </div>
    );
}
function mapStateToProps(state, ownProps) {
    return {
        activeuser: state.activeUserReducers,
        departments:state.departmentReducers,
        activedepartment:state.activeDepartmentReducers,
    }
}
const mapDispatchToProps = {
    getUsers, getActiveUser, deleteUser, editUser, addUser,getActiveDepartment,getDepartments
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
