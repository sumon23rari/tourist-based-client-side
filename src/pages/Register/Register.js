import React, { useState } from 'react';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import SocialLogIn from '../shared/SocialLogIn/SocialLogIn';

const Register = () => {
  const [agree,setAgree]=useState(false);
  const location=useLocation();
        const from=location.state?.from?.pathname || '/';
       
  console.log(agree);
    const [
        createUserWithEmailAndPassword,user,loading
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating]=useUpdateProfile(auth);
      const navigate=useNavigate();
      if (loading || updating) {
        return <Loading></Loading>
      }
      if (user) {
       console.log('userd',user)
       navigate(from,{replace:true})
      }
    
      const handleRegisterForm=async e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email1=e.target.email.value;
        const password1=e.target.password.value;
        console.log(email1,password1);
      await createUserWithEmailAndPassword(email1,password1)
      await updateProfile({displayName:name});
      navigate('/');
      }
      const navigateLogin=()=>{
        navigate('/login')
      }
    return (
        <div className='mx-auto w-50'>
            <h2 className='text-success my-3'>please register in out website</h2>
        <SocialLogIn></SocialLogIn>
           <form onSubmit={handleRegisterForm}>
           <input required type="text" placeholder='enter your name'  name="name"  className='w-100 p-2 d-block'/>
            <input required  type="email" placeholder='enter your email' name="email" className='w-100 p-2 d-block my-2'/>
            <input required type="password" placeholder='enter your password' name="password"  className='w-100 p-2 d-block'/>
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" />
            <label className={`ps-2 ${agree?'':'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
            <input disabled={!agree} type="submit" value="register"  className='w-100 p-2 d-block mt-2'/>
           </form>
           <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;