import React, { useState } from 'react'
import '../login/login.css'

const Login = () => {


    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    return (
        <div className='login'>
            <h1>Login</h1>
            {console.warn(user)}
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email' />
            <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter your Password' />
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login
