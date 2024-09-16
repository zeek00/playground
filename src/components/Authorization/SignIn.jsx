import React from 'react'
import AuthForm from './AuthForm';
import { useParams, Link } from 'react-router-dom'
import PostsRoutes from '../../routes/route';


const signInFields = [
    { name: 'email', label: 'Email address', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
];


const SignIn = () => {
    const {signin} = useParams();
  return (
    <>
        {signin && 
            <AuthForm 
            fields={signInFields} 
            route={signin} 
            authType={'Sign in'} 
            title={"Sign in to your account" }
            forgot={"Forgot Password?"} />
        }
        <br/>
        <p className='text-gray-500 text-xs sm:text-base md:text-base lg:text-lg xl:text-lg'>Not a member account? <Link className='text-yellow-500' >Start a 14 day free trial </Link> </p>
                
      
    </>
  )
}

export default SignIn
