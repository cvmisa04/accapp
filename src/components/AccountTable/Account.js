import React from 'react'
import { Link } from 'react-router-dom'


const Account = ({ acc, edit,deleteAcc }) => {
    const showButtons = edit ? (
        <>
            <td><button onClick={()=>deleteAcc(acc.id)} className='btn btn-danger'>Delete</button></td>
            <td><Link to={'/edit/' + acc.id}className='btn btn-warning'>Edit</Link></td>
        </>
    ) : null
    return (
        <tr>
            <td>{acc.id}</td>
            <td>{acc.ime}</td>
            <td>{acc.prezime}</td>
            <td>{acc.email}</td>
            {showButtons}

        </tr>

    )
}

export default Account