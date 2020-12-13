import { useState } from 'react'
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
 
  const register = () =>{
    axios.post('http://localhost:3001/users/user', {
      email: email,
      password: password,
      userName: userName,
    })
    .then((result)=>{
      console.log(result.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h1>Register</h1>
      <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
      <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
      <input onChange={(e)=>{setUserName(e.target.value)}} placeholder='User Name'/>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
