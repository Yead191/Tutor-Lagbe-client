import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const navigate = useNavigate()
    const { signInWithGoogle } = useAuth()
    const location = useLocation()
    const from = location.state || '/'
    const handleLoginWithGoogle = () => {
        signInWithGoogle()
        .then(result=>{
            navigate(from)
            toast.success(`Logged in as: ${result.user.displayName}`)
        })
        .catch(error=>{
            toast.error(error.message);
        })

    }
    return (
        <div>
            <div className="flex gap-3 mb-6">
                <button onClick={handleLoginWithGoogle} className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                    <FcGoogle /> Sign in With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;