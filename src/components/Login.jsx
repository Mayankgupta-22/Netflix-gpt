import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInFrom, setIssignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIssignInForm(!isSignInFrom);

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75' >
                <h1 className='font-bold text-3xl text-white py-4'>{isSignInFrom ? "Sign In" : "Sign UP"}</h1>

                <input type="text"
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-800 rounded-lg' />

                {!isSignInFrom && <input type="Name"
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-800 rounded-lg' />}

                <input type="text"
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-800 rounded-lg' />

                <button className='p-4 my-6 text-white bg-red-700 w-full'  >{isSignInFrom ? "Sign In" : "Sign UP"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInFrom ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now.  "}</p>
            </form>
        </div>

    )
}

export default Login;
