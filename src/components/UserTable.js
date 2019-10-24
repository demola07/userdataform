import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const UserTable = (props) => {
    return (
        <div>
            <h1 className='header'>User Data</h1>
            <Table bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.birthday}</td>
                            <td>{user.age}</td>
                            <td>{user.hobby}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => { props.editRow(user) }} className='mr-3'>Edit</Button>
                                <Button variant="outline-danger" onClick={() => props.deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>

                    ))) : (
                            <tr >
                                <td colSpan='6'>No Data Added</td>
                            </tr>
                        )}
                </tbody>


            </Table>
        </div>

    )
}
export default UserTable
