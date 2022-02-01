import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getUsers } from '../Redux/actions/userActions'
import { getActiveUser } from '../Redux/actions/userActions'
import { deleteUser } from '../Redux/actions/userActions'
import { editUser } from '../Redux/actions/userActions'
import { addUser } from '../Redux/actions/userActions'
import { getDepartments } from '../Redux/actions/departmentActions'
import { loginStat } from '../Redux/actions/loginActions'
import { getAbilities } from '../Redux/actions/abilititesAction'
import { addAbility } from '../Redux/actions/abilititesAction'
import { getAbilitiyRatings } from '../Redux/actions/abilityratingActions'
import $ from "jquery"
import { useHistory } from "react-router-dom";
import { getRoles } from "../Redux/actions/roleActions";
import axios from "axios";
import qs from "qs"


function Register({ abilities, abilityratings, getAbilitiyRatings, addAbility, getAbilities, loginstat, loginStat, departments, getRoles, roles, getDepartments, activeuser, users, getUsers, getActiveUser, deleteUser, editUser, addUser, ...props }) {
  const [gender, setGender] = useState("Male")
  const [department, setDepartment] = useState(1)
  const [validate, setValidate] = useState(false)
  const [abilityrating, setAbilityrating] = useState(1)
  const [actuser, setactuser] = useState({})

  $(document).on('click', '#ratings', function () {
    $("#abilitylevel").text($(this).text())
  });

 



  let history = useHistory();
  /* eslint eqeqeq: 0 */

  useEffect(() => {
    getDepartments();
    getUsers();
    getAbilitiyRatings();
    getRoles();
  }, [getDepartments, getUsers, getRoles, getAbilities, getAbilitiyRatings])










  const userinf = (e) => {
    let { id, value } = e.target
    if (id === "customRadio1") {
      setGender("Male")
    } else if (id === "customRadio2") {
      setGender("Female")
    } else if (id === "Department") {
      departments.forEach(dep => {
        if (value === dep.Name) {
          setDepartment(parseInt(dep.id));
        }
      });
    }

  }


  const formvalid = (e) => {
    let Name = document.getElementById("Name").value
    let Surname = document.getElementById("Surname").value
    let Username = document.getElementById("Username").value
    let Birthday = document.getElementById("Birthday").value
    let Branch = document.getElementById("Branch").value
    let Password = document.getElementById("Password").value
    let Role_Id = document.getElementById("Role_Id").value
    let Phone = document.getElementById("Phone").value
    let Graduate = document.getElementById("Graduate").value
    let Email = document.getElementById("Email").value
    const checkemail = users.filter((user) => user.Email === Email)
    const checkusername = users.filter((user) => user.Username === Username)
    const checkphone = users.filter((user) => user.Phone == Phone)
    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if (Name !== "") {
      document.getElementById("Name").className = "form-control is-valid";
      setValidate(true)

    }
    if (Surname !== "") {
      document.getElementById("Surname").className = "form-control is-valid";
      setValidate(true)

    }
    if (Password !== "") {
      document.getElementById("Password").className = "form-control is-valid";
      setValidate(true)

    }
    if (Branch !== "") {
      document.getElementById("Branch").className = "form-control is-valid";
      setValidate(true)

    }
    if (Birthday !== "") {
      document.getElementById("Birthday").className = "form-control is-valid";
      setValidate(true)

    }
    if (Role_Id !== "") {
      document.getElementById("Role_Id").className = "form-control is-valid";
      setValidate(true)

    }
    if (Graduate !== "") {
      document.getElementById("Graduate").className = "form-control is-valid";
      setValidate(true)

    }
    if (Phone !== "") {
      document.getElementById("Phone").className = "form-control is-valid";
      setValidate(true)

    }
    if (Email !== "") {
      document.getElementById("Email").className = "form-control is-valid";
      setValidate(true)

    }
    if (Username !== "") {
      document.getElementById("Username").className = "form-control is-valid";
      setValidate(true)

    }
    if (!validRegex.test(Email.toLowerCase())) {
      document.getElementById("emailinvalid").innerHTML = "Please write in the correct format."
      document.getElementById("Email").className = "form-control is-invalid";
      setValidate(false)
    }
    if (Email === "") {
      document.getElementById("emailinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Email").className = "form-control is-invalid";
      setValidate(false)
    }
    if (Name === "") {
      document.getElementById("nameinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Name").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Surname === "") {
      document.getElementById("surnameinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Surname").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Username === "") {
      document.getElementById("usernameinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Username").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Password === "") {
      document.getElementById("passwordinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Password").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Branch === "") {
      document.getElementById("branchinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Branch").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Birthday === "") {
      document.getElementById("birthdayinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Birthday").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Role_Id === "") {
      document.getElementById("roleidinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Role_Id").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Graduate === "") {
      document.getElementById("graduateinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Graduate").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Phone === "") {
      document.getElementById("phoneinvalid").innerHTML = "Please fill out this field."
      document.getElementById("Phone").className = "form-control is-invalid";
      setValidate(false)

    }
    if (Phone.length < 10) {
      document.getElementById("phoneinvalid").innerHTML = "Please write in the correct format."
      document.getElementById("Phone").className = "form-control is-invalid";
      setValidate(false)
    }
    if (checkemail == "" && checkusername == "" && checkphone == "") {

    } else {
      if (checkemail != "") {
        document.getElementById("emailinvalid").innerHTML = "This Email has been used before. Please enter a different Email."
        document.getElementById("Email").className = "form-control is-invalid";
        setValidate(false)
      } else if (checkphone != "") {
        document.getElementById("phoneinvalid").innerHTML = "This Phone has been used before. Please enter a different Phone."
        document.getElementById("Phone").className = "form-control is-invalid";
        setValidate(false)

      } else {
        document.getElementById("usernameinvalid").innerHTML = "This Username has been used before. Please enter a different Username."
        document.getElementById("Username").className = "form-control is-invalid";
        setValidate(false)

      }

    }
  }

  async function doStuff(activeuser1) {
  
    
  
}



  const createUser =async () => {
    if (validate === true) {
      let Name = document.getElementById("Name").value
      let Surname = document.getElementById("Surname").value
      let Username = document.getElementById("Username").value
      let Birthday = document.getElementById("Birthday").value
      let Branch = document.getElementById("Branch").value
      let Password = document.getElementById("Password").value
      let Role_Id = parseInt(document.getElementById("Role_Id").value)
      let Salary = 0
      let Phone = parseInt(document.getElementById("Phone").value)
      let Graduate = document.getElementById("Graduate").value
      let Employee_Type = "Full Time"
      let Group = "0"
      let Email = document.getElementById("Email").value
      let ImageUrl = "."
      const activeuser1 = {
        Name: Name,
        Surname: Surname,
        Username: Username,
        Gender: gender,
        Birthday: Birthday,
        Branch: Branch,
        Phone: Phone,
        Password: Password,
        Role: Role_Id,
        Salary: Salary,
        Graduate: Graduate,
        Employee_Type: Employee_Type,
        Group: Group,
        Email: Email,
        ImageUrl: ImageUrl,
        Department: department,
      }

      const {data}=await axios.post("/api/users/", qs.stringify(activeuser1)).catch((err)=>console.log(err))  
console.log(data)
getActiveUser(data)
let activeuserid=data.id;

      let abilities1 = {}
      $('#abilityitem li').each(function () {
        if ($((this)).clone().children().text() === "low level") {
          abilities1 = {
            Name: $((this)).clone().children().remove().end().text(),
            Ability_Rating: 1,
            User: parseInt(activeuserid)
          }
  
          addAbility(abilities1)
        } else if ($((this)).clone().children().text() === "intermediate level") {
          abilities1 = {
            Name: $((this)).clone().children().remove().end().text(),
            Ability_Rating: 2,
            User: parseInt(activeuserid)
          }
  
          addAbility(abilities1)
        } else {
          abilities1 = {
            Name: $((this)).clone().children().remove().end().text(),
            Ability_Rating: 3,
            User: parseInt(activeuserid)
          }
  
          addAbility(abilities1)
        }
  
       
      });

      loginStat("true")
      localStorage.setItem("activeuser", JSON.stringify(activeuser1))
      localStorage.setItem("loginstat", "true")

      history.push("/Profile")

    }


  }

  const checkformvalid = (e) => {
    checkvalidate(e);
    formvalid();
  }
  const checkvalidate = (e) => {
    let { id, value } = e.target
    value = value.replace(/[^\d]/, '')
    if (value.length > 10) {
      value = value.slice(0, -1);
    }
    document.getElementById(id).value = value
  }

  const renderDepartments = () => {
    return departments.map((department, index) => (
      <option key={index}>
        {department.Name}
      </option>
    ))
  }
  const renderRoleId = () => {
    return roles.map((role, index) => (
      <option key={index}>
        {role.id}
      </option>
    ))


  }
  const getabilityrating = () => {
    var aelement;
    abilityratings.forEach((rating) => {
      aelement = $("<a></a>").text(rating.Name)
      aelement.addClass("dropdown-item")
      $("#ability_rating_menu").append(aelement);
    })

  }


  const addabilities = () => {
    let name = document.getElementById("abilityname").value;
    let level = $("#abilitylevel").text();


    var lielement = $("<li></li>").text(name).addClass("list-group-item d-flex justify-content-between align-items-center");
    var spanelement = $("<span></span>").text(level).addClass("badge badge-primary badge-pill")
    $(".list-group").append(lielement);

    $("#abilityitem li:last-child").append(spanelement);

  }
  const deleteabilities = () => {
    $("#abilityitem li:last-child").remove();

  }

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col> <h1 className="text-center">Register</h1></Col>
          <Col></Col>

        </Row>




        <Form noValidate>
          <Row>
            <Col></Col>
            <Col className="col-5">
              <FormGroup>
                <Label for="name" >Name</Label>
                <Input onKeyUp={formvalid} className="form-control" type="name" name="name" id="Name" defaultValue="Selim" required />
                <div className="valid-feedback">Valid.</div>
                <div id="nameinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input onKeyUp={formvalid} type="username" name="username" id="Username" defaultValue="selim587" required />
                <div className="valid-feedback">Valid.</div>
                <div id="usernameinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label className="custom-control-inline" for="radio">Gender : </Label>
                <FormGroup className="custom-control custom-radio custom-control-inline">
                  <Input onChange={userinf} type="radio" className="custom-control-input" id="customRadio1" name="example" checked />
                  <Label className="custom-control-label " for="customRadio1">Male</Label>
                </FormGroup>
                <FormGroup className="custom-control custom-radio custom-control-inline is-valid">
                  <Input onChange={userinf} type="radio" className="custom-control-input" id="customRadio2" name="example" />
                  <Label className="custom-control-label" for="customRadio2">Female</Label>
                </FormGroup>
              </FormGroup>

            </Col>
            <Col className="col-5">
              <FormGroup>
                <Label for="surname">Surname</Label>
                <Input onKeyUp={formvalid} type="surname" name="surname" id="Surname" defaultValue="Başpınar" required />
                <div className="valid-feedback">Valid.</div>
                <div id="surnameinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onKeyUp={formvalid} type="password" name="password" id="Password" defaultValue="123456" required />
                <div className="valid-feedback">Valid.</div>
                <div id="passwordinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>

            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col className="col-5">
              <FormGroup>
                <Label for="branch">Branch</Label>
                <Input onKeyUp={formvalid} type="text" name="branch" id="Branch" defaultValue="..." required />
                <div className="valid-feedback">Valid.</div>
                <div id="branchinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="roleid">Role Id</Label>
                <Input onChange={userinf} type="select" name="select" id="Role_Id">
                  {renderRoleId()}
                </Input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="graduate">Graduate</Label>
                <Input onKeyUp={formvalid} type="text" name="graduate" id="Graduate" defaultValue="Estü" required />
                <div className="valid-feedback">Valid.</div>
                <div id="graduateinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onKeyUp={formvalid} type="email" name="email" id="Email" defaultValue="selimgseses@gmail.com" required />
                <div className="valid-feedback">Valid.</div>
                <div id="emailinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <Button onClick={() => createUser()} color="primary" >Register</Button>
            </Col>
            <Col className="col-5">
              <FormGroup>
                <Label for="birthday">Birthday</Label>
                <Input onChange={formvalid} type="date" id="Birthday" name="birthday" defaultValue="2011-09-29" required />
                <div className="valid-feedback">Valid.</div>
                <div id="birthdayinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="departments">Departments</Label>
                <Input onChange={userinf} type="select" name="select" id="Department">
                  {renderDepartments()}
                </Input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <FormGroup>
                <Label for="phone" className="form-label">Phone Number</Label>
                <Input onKeyUp={checkformvalid} type="phone" name="phone" id="Phone" pattern="[0-9]{10}" placeholder="Max Length is 11" defaultValue="5550282698" required />
                <div className="valid-feedback">Valid.</div>
                <div id="phoneinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <Label for="text" className="form-label">Abilities</Label>
              <FormGroup className="input-group mb-3" >
                <Input type="text" name="ability name" id="abilityname" className="form-control" placeholder="ability name" />
                <button type="button" className="btn btn-outline-secondary dropdown-toggle" onClick={getabilityrating} name="ability level" id="abilitylevel" data-toggle="dropdown">
                  ability level
                </button>
                <div className="dropdown-menu" id="ability_rating_menu">

                </div>
                <div className="input-group-append">
                  <button className="btn btn-primary" id="addabilitybutton" onClick={addabilities} type="button">Add</button>
                  <button className="btn btn-danger" id="deleteabilitybutton" onClick={deleteabilities} type="button">Delete</button>
                </div>
                <div className="valid-feedback">Valid.</div>
                <div id="phoneinvalid" className="invalid-feedback">Please fill out this field.</div>
              </FormGroup>
              <ul id="abilityitem" className="list-group">
              </ul>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <hr></hr>
            <p className="text-center">If you have an account? <a href="#\" onClick={() => history.push("/Login")}>Sign In</a>.</p>
          </Col>
          <Col></Col>

        </Row>
      </Container>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    departments: state.departmentReducers,
    users: state.userReducers,
    activeuser: state.activeUserReducers,
    roles: state.roleReducers,
    loginstat: state.loginReducers,
    abilities: state.abilitiesReduers,
    abilityratings: state.abilityRatingReducers
  }
}
const mapDispatchToProps = {
  getUsers, getActiveUser, deleteUser, editUser, addUser, getDepartments, getRoles, loginStat, addAbility, getAbilities, getAbilitiyRatings
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)