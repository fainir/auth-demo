import { useEffect, useState } from "react";
import axios from 'axios';
import { readCookie } from "../utils/Cookies";
import { getHttp } from "../utils/NetworkWrapper";

function Profile() {
  const [name, setName] = useState();
  useEffect(()=>{
    getHttp('http://localhost:3001/users/myprofile')
    .then((result)=>{
      setName(result.data.userName)
      console.log(result.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      <h1>Profile</h1>
      {name && 
      <h2>Hello {name}</h2>
      }
    </div>
  );
}

export default Profile;
