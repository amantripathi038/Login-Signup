import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setUser ({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        if( user.name && user.email && user.password && user.reEnterPassword){
            if(user.password === user.reEnterPassword){
                axios.post("http://localhost:9002/register", user)
                .then( res => alert(res.data.message))
                navigate("/login")
            }
            else{
                alert("Password mismatch")
            }
        }
        else{
            alert("All fields are mandatory")
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" name= "name" value={user.name} placeholder="Name" onChange={handleChange} ></input>
            <input type="text" name= "email" value={user.email} placeholder="E-mail" onChange={handleChange} ></input>
            <input type="password" name= "password" value={user.password} placeholder="Password" onChange={handleChange} ></input>
            <input type="password" name= "reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} ></input>
            <div className="button" onClick= {register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register;