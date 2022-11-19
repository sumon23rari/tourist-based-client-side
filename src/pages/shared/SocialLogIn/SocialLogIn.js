import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../../images/social/google1.png';
import githubs from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook1.png';
const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement=
        <div>
            <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
        </div>
        ;
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div>
                
       <button 
        onClick={()=> signInWithGoogle()}
       className='btn btn-success border-0 d-block mx-auto'>
        <img style={{width:"30px"}} src={google} alt="" />
        <span className='px-2'>  Google SignIn </span>
       </button>
       <button 
       onClick={()=> signInWithGithub()}
       className='btn btn-success border-0 d-block mx-auto  my-3'>
        <img style={{width:"30px"}} src={githubs} alt="" />
        <span className='px-2'>  Github SignIn </span>
       </button>
       <button className='btn btn-success border-0 d-block mx-auto'>
        <img style={{width:"30px"}} src={facebook} alt="" />
        <span className='px-2'>  Facebook SignIn </span>
       </button>
       {errorElement}
       <div className='d-flex align-items-center'>
       <div style={{height:"1px"}} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div  style={{height:"1px"}} className='bg-primary w-50'></div>
       </div>  
        </div>
    );
};

export default SocialLogIn;