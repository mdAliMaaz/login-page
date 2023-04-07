import React, { useState } from 'react'
import '../register/register.css'
import axios from 'axios'

const Register = () => {


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const register = () => {
        const URL = "http://localhost:8080/register"
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password == reEnterPassword)) {
            axios.post(URL, user)
                .then(res => console.log(res))
        } else {
            alert("invalid input")
        }

    }


    return (

        <div>
            {console.log(user)}
            <div className='register'>
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder='Enter your Name' onChange={handleChange} />
                <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange} />
                <input type="text" name="password" value={user.password} placeholder='Enter your Password' onChange={handleChange} />
                <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter password' onChange={handleChange} />
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button">Login</div>
            </div>
        </div>
    )
}

export default Register
