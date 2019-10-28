import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';
import { Provider } from 'react-redux'
import store from './store'



const App = () => {

  // const state = useSelector(state => { return state })
  const state = store.getState();
  console.log(state.edit);
  console.log(state);



  //Data
  // const usersData = [];

  // const initialFormState = { id: null, firstname: '', lastname: '', birthday: '', age: '', hobby: '' };

  //setting state
  // const [users, setUsers] = useState(usersData);
  // const [editing, setEditing] = useState(false);
  // const [currentUser, setCurrentUser] = useState(initialFormState);


  //CRUD operations
  //Create User
  // const addUser = (user) => {
  //   user.id = users.length + 1;
  //   setUsers([...users, user]);
  // };

  //Delete User
  // const deleteUser = id => {
  //   setUsers(users.filter(user => user.id !== id));
  // };

  //Update User
  // const updateUser = (id, updatedUser) => {
  //   setEditing(false)

  //   setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  // };

  // const editRow = user => {
  //   setEditing(true);

  //   setCurrentUser({ id: user.id, firstname: user.firstname, lastname: user.lastname, birthday: user.birthday, age: user.age, hobby: user.hobby });
  // }

  return (
    <Provider store={store}>
      <Container fluid >
        <Row className='row'>
          {
            state.edit.edit ? (
              <Fragment>
                <Col xs={4} className='form' >
                  <EditUserForm ></EditUserForm>
                </Col>
              </Fragment>

            ) :
              (
                <Fragment>
                  <Col xs={4} className='form' >
                    <UserForm ></UserForm>
                  </Col>
                </Fragment>

              )
          }

          <Col xs={8} className='table'>
            <UserTable></UserTable>
          </Col>
        </Row>
      </Container>
    </Provider>

  );
}

export default App;
