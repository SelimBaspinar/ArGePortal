import React, { useState, useEffect ,useRef} from 'react';
import { useHistory } from "react-router-dom";
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import { connect } from "react-redux";
import { getData } from '../Redux/actions/dataAction'
import { deleteData } from '../Redux/actions/dataAction'
import { getActiveItem } from '../Redux/actions/dataAction'
import { getActiveUser } from '../Redux/actions/userActions'
import { getRoles } from '../Redux/actions/roleActions'
import { getActiveRole } from '../Redux/actions/roleActions'
import { getInvolvedProject, getInvolvedProjectSuccess } from '../Redux/actions/getInvolvedProjectAction'
import { addGetInvolvedProject } from '../Redux/actions/getInvolvedProjectAction'
import { updateGetInvolvedProject } from '../Redux/actions/getInvolvedProjectAction'
import { deleteGetInvolvedProject } from '../Redux/actions/getInvolvedProjectAction'
import { getUsers } from '../Redux/actions/userActions'
import { getAbilitiyRatings } from '../Redux/actions/abilityratingActions'
import { getPAbilities } from '../Redux/actions/pabilitiesAction'
import { getAbilities } from '../Redux/actions/abilititesAction'
import $ from "jquery"
import AddProject from './AddProject'

function ProjectList({ joinstate, getUsers,abilityratings,getAbilities,abilities,getPAbilities,pabilities,getAbilitiyRatings, users, getInvolvedProject, addGetInvolvedProject, updateGetInvolvedProject, deleteGetInvolvedProject, roles, activerole, getActiveRole, getRoles, getActiveUser, activeuser, projects, activeItem, getActiveItem, getData, deleteData, ...props }) {
  const [modal, setModal] = useState(false);
  const [role1] = useState([
    {
      Add: "false",
      Edit: "false",
      Delete: "false"
    }
  ])
  const mounted = useRef();
  let history = useHistory();
  /* eslint eqeqeq: 0 */
  /*eslint no-mixed-operators: 0 */

  useEffect(() => {
   
      if (!mounted.current) {
        getData();
    getRoles();
    getUsers();
    getInvolvedProject();
    getAbilitiyRatings();
    getPAbilities();
    getAbilities();
             mounted.current = true;
      } else {
      
  
      }

  }, [getData, getRoles, getUsers,getInvolvedProject])
  
  useEffect(() => {
    matchrole();
  })


  const matchrole = () => {
    if (activeuser !== null) {
      roles.forEach((role) => {
        if (activeuser.Role === role.id) {
          getActiveRole(role)
        }
      })
    } else {
      getActiveRole(role1)
    }
  }

  // const toggle1 = () => {
  //   $("#item").click(function () {
  //     $(this).next("#Collapse").slideToggle();
  //     $(this).next("#summary").slideToggle();
  //   });
    


  // } 
  const toggle = () => {
    setModal(!modal);
  };

  const handleAdd = () => {
    toggle();
  };
  const handleDelete = (item) => {
    deleteData(item);

  };
  const handleEdit = (item) => {
    getActiveItem(item)
    history.push(`/ProjectManagement/${item.id}`)
  };
  const handleJoin = (item) => {
    let user1 = [];
    let join1 = [{
      Project: "",
      User: "",
    }];
    getInvolvedProject();

    users.forEach((user) => {
      if (activeuser.Email === user.Email) {
        user1 = user;
      }
    })

    if(joinstate===null){
      join1.Project = item.id
      join1.User = user1.id
      addGetInvolvedProject(join1)
      alert("Katıldınız")
    }else{
   let x= joinstate.filter((join) => item.id == join.Project&& user1.id == join.User)


  if(Array.isArray(x) && x.length){
    alert("Zaten katıldınız.")
  } else {
    let abilities1=[]
    abilities.forEach((ability)=>{
      if(ability.User===user1.id){
        abilities1.push(ability)
      }
    })
    let pabilities1=[]
    pabilities.forEach((pability)=>{
      if(pability.Project===item.id){
        pabilities1.push(pability)
      }
    })
    let joinstatus=false;
for (let i = 0; i < pabilities1.length; i++) {
  for (let y = 0; y < abilities1.length; y++) {
    console.log("sasd "+abilities1[y].Name+" sad "+pabilities1[i].Name)
    console.log("sasd "+abilities1[y].Ability_Rating+" sad "+pabilities1[i].Ability_Rating)

    if(abilities1[y].Name==pabilities1[i].Name && abilities1[y].Ability_Rating==pabilities1[i].Ability_Rating){
      joinstatus=true
      console.log("abilities1.Name "+abilities1[y].Name+" pabilities1.Name "+ pabilities1[i].Name+" abilities1.Ability_Rating "+abilities1[y].Ability_Rating+" pabilities1.Ability_Rating "+pabilities1[i].Ability_Rating+" joinstat "+joinstatus)

      break; 
    }else{
      joinstatus=false 
      console.log("abilities1.Name "+abilities1[y].Name+" pabilities1.Name "+ pabilities1[i].Name+" abilities1.Ability_Rating "+abilities1[y].Ability_Rating+" pabilities1.Ability_Rating "+pabilities1[i].Ability_Rating+" joinstat "+joinstatus)

    }
    }
  
  }
  

console.log(joinstatus)

   
    if(joinstatus){
    join1.Project = item.id
    join1.User = user1.id
    addGetInvolvedProject(join1)
    alert("Katıldınız")
  }else{
    alert("Kriterlere Uymuyorsunuz")
  }
  }

}
  }
  function renderItems() {
    return projects.map((item) => (
      <tr id={item.id} key={item.id}
        className="project-item"   
      >

        <td >
          {item.id}
        </td>
        <td>
          {item.Code}
        </td>
        <td>
          {item.Name}
        </td>
        <td>
        <div  id={"Collapse"+item.id} className="collapse"  >
          <Card>
          {item.Description}</Card>

      </div>
          <div id={"Collapse"+item.id}  className="collapse show" >
            {item.Description.substring(0, 40) + "..."}</div>
        </td>
        <td>
          {item.Language}
        </td>
        <td>
          {item.Start_Time}
        </td>
        <td>
          {item.End_Time}
        </td>
        <td>
          {item.Personal_Count}
        </td>
        <td>
          {item.Budget}
        </td>
        <td>
        <button  className="btn btn-primary"  data-toggle="collapse" data-target={"#Collapse"+item.id}>
          View Detail
        </button>
      </td>
        {renderJoın(item)}
        {renderRolesEditItems(item)}
        {renderRolesDeleteItems(item)}
      </tr>
    ));
  };


  function renderJoın(item) {
    if (activeuser != null) {
      return <td>
        <button onClick={() => handleJoin(item)} className="btn btn-primary" >
          Join
        </button>
      </td>
    }


  }


  function renderRolesDeleteItems(item) {
    if (activerole !== null) {
      if (activerole.Delete == true) {
        return <td>
          <button onClick={() => handleDelete(item)} className="btn btn-danger" >
            Delete
          </button>
        </td>
      }


    }


  }
  function renderRolesEditItems(item) {

    if (activerole == null) {

    } else {

      if (activerole.Edit == true) {

        return <td>
          <button onClick={() => handleEdit(item)} className="btn btn-primary" >
            Edit
          </button>
        </td>
      }
    }


  }
  function renderHeads() {
    if (activeuser === null) {
      return (
        <tr id="title">
          <th>Project Id</th>
          <th>Project Code</th>
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Project Programming Language</th>
          <th>Project StartTime</th>
          <th>Project EndTime</th>
          <th>Personal Count</th>
          <th>Project Budget</th>
          <th>               </th>

        </tr>)
    } else if (activerole.Edit == true && activerole.Delete == true) {
      return (
        <tr id="title">
          <th>Project Id</th>
          <th>Project Code</th>
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Project Programming Language</th>
          <th>Project StartTime</th>
          <th>Project EndTime</th>
          <th>Personal Count</th>
          <th>Project Budget</th>
          <th>                 </th>
          <th>               </th>
          <th>               </th>
          <th>               </th>

        </tr>)
    } else if (activerole.Edit == true && activerole.Delete == false || activerole.Edit == false && activerole.Delete == true) {
      return (
        <tr id="title">
          <th>Project Id</th>
          <th>Project Code</th>
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Project Programming Language</th>
          <th>Project StartTime</th>
          <th>Project EndTime</th>
          <th>Personal Count</th>
          <th>Project Budget</th>
          <th>                 </th>
          <th>               </th>
          <th>               </th>

        </tr>)
    }

  }
  function renderAdd() {

    if (activeuser !== null && activerole.Add == true) {
      return (
        <div>
          <button className="btn btn-primary" onClick={handleAdd}>Add Project</button>
          <br></br>        <br></br>
        </div>
      )
    }

  }

  return (
    <div>
      {renderAdd()}

      <div>
        <table className="table table-bordered table-hover ">
          <thead className="table table-dark">
            {renderHeads()}
          </thead>
          <tbody id='tablebody'>
            {renderItems()}

          </tbody>
        </table>
      </div>
      {modal ? (
        <AddProject
          toggle={toggle}
          abilityratings={abilityratings}

        />
      ) : null}
    </div>

  );
}
function mapStateToProps(state, ownProps) {
  return {
    projects: state.dataListReducers,
    activeItem: state.activeItemReducers,
    activeuser: state.activeUserReducers,
    roles: state.roleReducers,
    activerole: state.activeRoleReducers,
    joinstate: state.getInvolvedProjectReducers,
    users: state.userReducers,
    abilityratings: state.abilityRatingReducers,
    pabilities:state.pabilitiesReducers,
    abilities:state.abilitiesReducers,
  }
}
const mapDispatchToProps = {
  getUsers, getData, deleteData,getAbilitiyRatings,getPAbilities,getAbilities, getActiveItem, getActiveUser, getRoles, getActiveRole, getInvolvedProject, addGetInvolvedProject, updateGetInvolvedProject, deleteGetInvolvedProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)