import React from 'react'
import Account from '../AccountTable/Account'


const EditTable = ({acc,deleteAcc})=>{
    const allAcc = acc.map(ac => {
        return (
          

           
            <Account acc={ac} edit={true} deleteAcc={deleteAcc}  key={ac.id}/>
            
            

        )
    })

    return(
        <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                <h3>Edit/Delete</h3>
            </div>


        </div>
        <div className='row'>
            <div className='col-10 offset-1'>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {allAcc}
                    </tbody>
                </table>
            </div>

        </div>
    </div>

    )
}

export default EditTable;