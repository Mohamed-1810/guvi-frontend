import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Home =({auth}) => {
    const { myState } = useParams();
    // console.log("hello"+{myState});
    // console.log(auth)

    // const [auth, setAuth] = useState(false);
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const login = sessionStorage.getItem('login');
    // console.log(mySessionVariable);

    // useEffect(() => {
    //     // axios.get('https://guvi-backend1.onrender.com/login')
    //     axios.get('https://guvi-api-5.onrender.com/')
    //     // axios.get('http://localhost:8081/')
    //         .then(res => {
    //             console.log(res)
    //             if (res.data.Status === "Success") {
    //                 setAuth(true);
    //                 setName(res.data.name);
    //             }
    //             else {
    //                 setMessage(res.data.Message);
    //             }
    //         })
    // }, [])

    const handleLogout = () => {
        // console.log("hello");
        sessionStorage.removeItem('login');
        alert("Logged out");
        navigate('/');
        console.log(login);
        // axios.get('https://guvi-api-3.onrender.com/logout')
        // axios.get('http://localhost:8081/logout')
        //     .then(res => {
        //         if (res.data.Status === 'Success') {
        //             // alert("Logged out success fully")
        //             window.location.reload(true);
        //         }
        //         else {
        //             alert("error");
        //         }
        //     }).catch(err => console.log(err))
    }

    return (
        <div className=''>
            {
                login ?
                    // <div className='banner'>
                    <div className='d-flex justify-content-center align-items-center vh-100 banner'>
                        <div className="bg-white  p-3 rounded w-50 align-items-center">
                            <br />
                            <br />
                            <h2 className=''>Welcome to GUVI GEEK Tech Company</h2>
                            <br />
                            <div className='d-flex justify-content-end'>
                                {/* <button className='btn btn-info'>Profile</button>&nbsp; */}
                                <Link to="/profile" className="btn btn-default border w-20 bg-info text-decoration-none">Profile</Link>&nbsp;&nbsp;

                                <br />
                                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                                <br />
                            </div>
                        </div>
                    </div>


                    :

                    <div className='d-flex justify-content-center align-items-center vh-100 banner'>
                        <div className="bg-white  p-3 rounded w-50 align-items-center">
                            <br />
                            <br />
                            <h2 className=''>You have to Login First</h2>
                            <br />
                            <div className='d-flex justify-content-end'>

                                <Link to="/" className="btn btn-default border w-50 bg-primary text-decoration-none">Login</Link>
                                <br />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home