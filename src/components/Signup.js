import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'
// import Validation from './LoginValidation';
function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        conpassword:''
    })



    const navigate = useNavigate();
    const [errors,setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        // console.log(errors)
        if(errors.name ==="" && errors.email==="" && errors.password==="" && errors.conpassword===""){
            axios.post('https://guvi-api-5.onrender.com/signup', values)
            // axios.post('http://localhost:8081/signup', values)
            .then(res => {
                alert("Registered Suceesfull")
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
  
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100 banner">
            <div className="bg-white p-3 rounded w-50">
                <h2>Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Name' name="name" className='form-control rounded-0' onChange={handleInput}/>
                        <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' name="email" className='form-control rounded-0' onChange={handleInput}/>
                        <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>                   
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name="password" className='form-control rounded-0' onChange={handleInput}/>
                        <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>                   
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="conpassword">Confirm Password</label>
                        <input type="password" placeholder='Enter Password again' name="conpassword" className='form-control rounded-0' onChange={handleInput}/>
                        <span>{errors.conpassword && <span className='text-danger'>{errors.conpassword}</span>}</span>                   
                    </div>
                    
                    <button type="submit" className='btn btn-success w-100'>Sign Up</button>
                    <br />
                    <br />
                    <Link to="/" className="btn btn-default border w-100 bg-light text-decoration-none">Login</Link>
                </form>
            </div>
        </div>

    )
}

export default Signup