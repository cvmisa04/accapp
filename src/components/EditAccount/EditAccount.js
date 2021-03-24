import React, {useState,useEffect,useRef } from 'react'
import {withRouter} from 'react-router-dom'


function EditAccount (props){
  
    const [acc,setAcc]= useState(props.acc.filter(acount=>{
        return acount.id == props.match.params.id
    })[0])
   

  const textInput = useRef()
  useEffect(()=>{
      textInput.current.focus()
  })

   const  editAcc=()=>{
      props.editAcc(acc)
      props.history.push('/')
    }


 
        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <h1>Edit Account</h1>
                    </div>

                </div>
                <div className="row">
                    <div className='col-10 offset-1'>
                        <input type='text' ref={textInput} onChange={(e)=>{setAcc({...acc,id:e.target.value})}}  className='form-control' id='id' value={acc.id} /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,ime:e.target.value})}}  className='form-control' id='ime' value={acc.ime}  /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,prezime:e.target.value})}}  className='form-control' id='prezime' value={acc.prezime} /><br></br>
                        <input type='text' onChange={(e)=>{setAcc({...acc,email:e.target.value})}}   className='form-control' id='email' value={acc.email} /><br></br>
                        <button onClick={editAcc} className='btn btn-primary form-control'>Edit</button>

                    </div>

                </div>
            </div>

        )
  
}
export default withRouter(EditAccount);