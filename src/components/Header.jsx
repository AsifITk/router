import React from 'react'

import { Link, Outlet } from "react-router-dom";
function Header() {
    return (
        <div className='container'>
            <h1>Home</h1>
            <nav className='nav-bar'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="about">About</Link>
                <Link className='link' to="inbox">Inbox</Link>
                <Link className='link' to="form">Send Messages</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Header