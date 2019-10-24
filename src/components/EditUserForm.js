import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const onSubmit = event => {
        event.preventDefault()
        props.updateUser(user.id, user)
    }

    return (
        <div>
            <h1 className='header'>Edit User</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" name='firstname' value={user.firstname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" name='lastname' value={user.lastname} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" name='birthday' value={user.birthday} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name='age' value={user.age} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Hobby</Form.Label>
                    <Form.Control type="text" name='hobby' value={user.hobby} onChange={handleInputChange} />
                </Form.Group>
                <Button type='submit' variant="success" className='mr-3'>Update User</Button>
                <Button variant="success" onClick={() => props.setEditing(false)}>Cancel</Button>
            </Form>
        </div>
    )
}

export default EditUserForm
