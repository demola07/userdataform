import React from 'react'
import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'




const UserTable = () => {
    // const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state.data;
    });


    return (
        <div>
            <h1 className='header'>User Data</h1>
            <Table bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>user_id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Hobby</th>
                        {/* <th>Action</th> */}

                    </tr>
                </thead>
                <tbody>
                    {state.length > 0 ? (state.map(data => (
                        <tr key={data.age}>
                            <td>{data.uid}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.birthday}</td>
                            <td>{data.age}</td>
                            <td>{data.hobby}</td>
                            {/* <td>
                                <Button variant="outline-primary" onClick={() => editUserData(data)} className='mr-3'>Edit</Button>
                                <Button variant="outline-danger" onClick={() => removeUser(data.id)} >Delete</Button>
                            </td> */}
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
