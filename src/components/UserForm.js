import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { addUser } from '../actions/form';
import { useSelector, useDispatch } from 'react-redux'


const UserForm = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return state;
    });

    const initialFormState =
        { id: null, firstname: '', lastname: '', birthday: '', age: '', hobby: '' }

    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const [alert, setAlert] = useState(false)

    const onSubmit = event => {
        event.preventDefault();
        if (!user.firstname || !user.lastname || !user.birthday || !user.age || !user.hobby) {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
            return;
        }
        // props.addUser(user)
        dispatch(addUser(user, state.form))
        setUser(initialFormState)
    }

    return (
        <div>
            <h1 className='header'>Add User</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Firstname: </Form.Label>
                    <Form.Control type="text" placeholder="Enter FirstName" name='firstname' value={user.firstname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lastname: </Form.Label>
                    <Form.Control type="text" placeholder="Enter LastName" name='lastname' value={user.lastname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Birthday: </Form.Label>
                    <Form.Control type="date" name='birthday' value={user.birthday} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Age: </Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" name='age' value={user.age} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Hobby: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Hobby" name='hobby' value={user.hobby} onChange={handleInputChange} />
                </Form.Group>
                <Button type='submit' variant="success">Add New User</Button>
                {alert && (<Alert variant='warning' className='warning'>ERROR....... Please Add User, or Complete Empty Fields</Alert>)}
            </Form>
        </div>
    )
}

export default UserForm
