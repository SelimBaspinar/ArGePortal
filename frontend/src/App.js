import React from 'react';
import {Switch,Route} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Navi from "./components/Navi";
import ProjectManagement from "./components/ProjectManagement";
import ProjectsList from "./components/ProjectList";
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';


function App(props) {
  let titleprojects = "List";
  let titlenavi = { title: "Navigator" };
  return (
    <div>
      <Container>
        <Navi info={titlenavi} />
      </Container>
      <Container>
        <br></br>
        <br></br>

        <Row>
   <Col></Col>
       
          <Switch>
          <Route exact path="/Register" render={props =>(<Register {...props}  ></Register>)}/>
          <Route exact path="/Login" render={props =>(<Login {...props}  ></Login>)}/>
          <Route exact path="/Profile" render={props =>(<Profile {...props}  ></Profile>)}/>
            <Route exact path="/ProjectManagement/:id" render={props =>(<ProjectManagement {...props}  ></ProjectManagement>)}/>
             <Route exact path="/" render={props =>(<ProjectsList title={titleprojects}></ProjectsList>)}></Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}


    export default App


