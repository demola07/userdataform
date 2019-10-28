import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../actions/form'



const UserTable = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state.form;
    });


    const removeUser = (id) => {
        dispatch(deleteUser(id))
    }

    const editUserData = (user) => {
        dispatch(editUser(user))
    }

    return (
        <div>
            <h1 className='header'>User Data</h1>
            <Table bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Hobby</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {state.length > 0 ? (state.map(data => (
                        <tr key={data.id}>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.birthday}</td>
                            <td>{data.age}</td>
                            <td>{data.hobby}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => editUserData(data)} className='mr-3'>Edit</Button>
                                <Button variant="outline-danger" onClick={() => removeUser(data.id)} >Delete</Button>
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
