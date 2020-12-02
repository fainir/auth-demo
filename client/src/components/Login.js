import { useState } from 'react'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () =>{
    axios.post('http://localhost:3001/users/login', {
      email: email,
      password: password,
    })
    .then((result)=>{
      console.log(result.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
      <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
