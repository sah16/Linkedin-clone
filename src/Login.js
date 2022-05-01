import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const [email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[name ,setName] =useState("");
  const[profilePic ,setProfilePic] =useState("");
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.diplayName,
        profileUrl: userAuth.user.photoUrl,
      })
      );
    })
    .catch(error => alert(error));
  };
  const register = () =>{
    if(!name){
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) =>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL : profilePic,
      })
      .then(()=>{
        dispatch(Login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL:profilePic
        }));
      });
    })
    .catch((error) => alert(error));
  };

  return (
    <div className="login">

        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Ic1VdEt-z9j4H9NXDT8otwHaDt%26pid%3DApi&f=1" alt="" />


        <form action="">
            
            <input 
              value= {name}
              onChange ={(e)=>setName(e.target.value)}
              placeholder='Full name (required if registering)' 
              type="text"
            />
            
            <input 
              value={profilePic}
              onChange ={(e) => setProfilePic(e.target.value)}
              placeholder='Profile pic URL (optional)' 
              type="text"
            />
        
            <input 
              value={email}
              onChange={(e) =>setEmail(e.target.value)} 
              placeholder='Email'
              type="email" 
             />

            <input value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' 
              type="password" />       

            <button type='submit' onClick={logintoApp}> Sign In</button>
        </form>    
        <p>Not a member?{" "}
          <span className='login__register' onClick={register}>Register Now</span>
        </p>


    </div>
  )
}

export default Login;