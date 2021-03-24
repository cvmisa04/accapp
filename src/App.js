import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountTable from './components/AccountTable/AccountTable';
import AddAcc from './components/AddAcc/AddAcc';
import EditTable from './components/EditTable/EditTable';
import EditAccount from './components/EditAccount/EditAccount';








function App () {
   

 const[acc,setAcc]  = useState([
    {
        id: 1,
        ime: "Milos",
        prezime: "Cvetkovic",
        email: 'cvmisa04@gmail.com'
    },
    {
        id: 2,
        ime: "Ivana",
        prezime: "Cvetkovic",
        email: 'Ivana@gmail.com'
    }
])
    const AddAcount = (acount) => {
        setAcc([...acc,acount])
    }
   const  deleteAcc = (id) => {
        
        const newCopy = acc.filter(account => account.id !== id)
      
        setAcc(newCopy)
    }

   const editAcc=(account)=>{
     
       let positionAc = account.map(ac=>{
           return ac.id
       }).indexOf(account.id)
       acc[positionAc]=account
     
       setAcc(acc)
       

    }

        return (


            <BrowserRouter >
                <NavBar />
                <Route exact path='/' >
                    <AccountTable acc={acc} />
                </Route>
                <Route path='/add'>
                    <AddAcc account={AddAcount} />
                </Route>
                <Switch>
                    <Route path='/edit/:id'>
                        <EditAccount acc={acc} editAcc={editAcc}/>
                    </Route>
                    <Route path='/edit'>
                        <EditTable acc={acc} deleteAcc={deleteAcc} />

                    </Route>

                </Switch>



            </BrowserRouter>

        )
    
}
export default App;