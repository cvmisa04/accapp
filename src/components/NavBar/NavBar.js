import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'



const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to='/' className='navbar-brand'>Account APP</Link>
        <ul className="navbar-nav ml-auto">
            <NavLink to='/' exact activeClassName={"activeLink"} className='nav-link'>Account</NavLink>
            <NavLink to='/add' activeClassName={"activeLink"} className='nav-link'>Add Account</NavLink>
            <NavLink to='/edit' activeClassName={"activeLink"} className='nav-link'>Edit Account</NavLink>

        </ul>

        </nav>

    )
}
export default NavBar;