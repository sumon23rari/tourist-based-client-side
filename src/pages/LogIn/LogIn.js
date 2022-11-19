import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../shared/Loading/Loading';
import SocialLogIn from '../shared/SocialLogIn/SocialLogIn';

const LogIn = () => {
    const [signInWithEmailAndPassword,
        user,loading]=useSignInWithEmailAndPassword(auth);
        const navigate=useNavigate();
        const location=useLocation();
        const from=location.state?.from?.pathname || '/';
       
        if (loading) {
            return <Loading></Loading>
        }
        if (user) {
            console.log('user',user);
            navigate(from, { replace: true })
        }
    const handlelogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInWithEmailAndPassword(email,password)
        e.target.reset()
        navigate(from, { replace: true });
    }
    return (
        <div className='mx-auto w-50'>
            <h2 className='py-3'>this is login page</h2>
          <SocialLogIn></SocialLogIn>
            <form onSubmit={handlelogin}>
             
                <input required type="email" placeholder='enter your email' name="email" className='w-100 p-2 d-block'/>
              
                <input required type="password" placeholder='enter your password' name="password" className='w-100 p-2 d-block my-2' />
                <input type="submit" value="login" className='w-100 p-2 d-block'/>
            </form>
            <div>
                <h5 className='mt-3'><span>New to tourist client side?</span>
                <Link to="/register"  className='text-primary pe-auto text-decoration-none'>
                 <span className='pl-2 text-success'>please register</span>
                 </Link></h5>
            </div>
        </div>
    );
};

export default LogIn;