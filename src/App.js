import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';


const App = () => {

  const state = useSelector(state => { return state.edit })

  return (

    <Container fluid >
      <Row className='row'>

        <Col xs={4} className='form' >
          <UserForm ></UserForm>
        </Col>
        {/* {
          state.edit ? (
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
        } */}

        <Col xs={8} className='table'>
          <UserTable></UserTable>
        </Col>
      </Row>
    </Container>


  );
}

export default App;
