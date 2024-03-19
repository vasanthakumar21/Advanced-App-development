import React from 'react'
import "./Loginas.css";
import { useNavigate } from 'react-router-dom';
const Loginas = () => {
    const navigate=useNavigate();
    const navtologin=()=>{
        navigate("/Login");
    };
    const navtoologin=()=>{
        navigate("/userlogin");
    };
  return (
    <div className='dub'>                  
 
    <div className='full'>
    <div className='VV'> LOGIN AS</div>
        <button onClick={navtologin} type="submit" className="btnu">Admin Login</button>
        <button   onClick={navtoologin} type="submit" className="btnu">User Login</button>
    </div>
    </div>
  );
};

export default Loginas;