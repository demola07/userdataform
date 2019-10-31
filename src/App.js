import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';



const App = () => {



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
