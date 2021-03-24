import React, { useState,useEffect,useRef} from 'react'
import {withRouter} from 'react-router-dom'


function AddAcc (props) {

  
   const[acc,setAcc] = useState({id: "",
    ime: "",
    prezime: "",
    email: ""})

    const textInput = useRef()
    useEffect(()=>{
        textInput.current.focus()
    })
    const AddAcc=()=>{
       props.account(acc)
        props.history.push("/")
    

    }



        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <h1>Add Account</h1>
                    </div>

                </div>
                <div className="row">
                    <div className='col-10 offset-1'>
                        <input type='text' ref={textInput} onChange={(e)=>{setAcc({...acc,id:e.target.value})}} className='form-control' id='id' placeholder='id' /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,ime:e.target.value})}}  className='form-control' id='ime' placeholder='ime' /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,prezime:e.target.value})}}  className='form-control' id='prezime' placeholder='prezime' /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,email:e.target.value})}}  className='form-control' id='email' placeholder='email' /><br></br>
                        <button onClick={AddAcc} className='btn btn-primary form-control'>DODAJ</button>

                    </div>

                </div>
            </div>



        )
    
}
export default withRouter(AddAcc);