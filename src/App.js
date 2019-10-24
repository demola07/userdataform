import React, { useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';

const App = () => {

  //Data
  const usersData = [];

  const initialFormState = { id: null, firstname: '', lastname: '', birthday: '', age: '', hobby: '' };

  //setting state
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);


  //CRUD operations
  //Create User
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //Delete User
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  //Update User
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, firstname: user.firstname, lastname: user.lastname, birthday: user.birthday, age: user.age, hobby: user.hobby });
  }

  return (
    <Container fluid >
      <Row className='row'>
        {
          editing ? (
            <Fragment>
              <Col xs={4} className='form' >
                <EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}></EditUserForm>
              </Col>
            </Fragment>

          ) :
            (
              <Fragment>
                <Col xs={4} className='form' >
                  <UserForm addUser={addUser}></UserForm>
                </Col>
              </Fragment>

            )
        }

        <Col xs={8} className='table'>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}></UserTable>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
