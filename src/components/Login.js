import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom' 
import Validation from './LoginValidation';
import axios from 'axios';

// import { useHistory } from 'react-router-dom';

function Login() {

 
    // const stateToPass = { message: 'Hello' };
    
    const [auth, setAuth] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    // console.log(auth);

    const navigate = useNavigate();
    const [errors,setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    axios.defaults.withCredentials=true;
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email==="" && errors.password===""){
            // axios.post('https://guvi-backend1.onrender.com/login', values)
            axios.post('https://guvi-api-5.onrender.com/login', values)
            // axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log(res);
                if(res.data === "Success"){
                // setAuth(true);
                sessionStorage.setItem('login', 'True');        
                navigate('/home');
                }
                else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }
    // useEffect(()=>{
    // },[auth])
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100 banner">
            <div className="bg-white p-3 rounded w-50">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Enter Email' onChange={handleInput} className='form-control rounded-0' />
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Enter Password' onChange={handleInput} className='form-control rounded-0' />
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
                    
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Log in</button>
                    <br />
                    <br />
                    <Link to="/signup" className="btn btn-default border w-100 bg-light text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login