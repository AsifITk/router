import React from 'react'

function Login({ setIsLoggedIn }) {
    return (
        <div>

            <button onClick={(e) => (setIsLoggedIn((prev) => !prev))}>{Login}</button>
        </div>
    )
}

export default Login