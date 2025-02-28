import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../components/Loading';
import useAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // console.log(location);
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading></Loading>

    }

    if (user && user?.email) {
        return children

    }

    toast.error('Please Login to Continue!')


    return (
        <Navigate state={location.pathname} to={'/login'}>
        </Navigate>
    );
};

export default PrivateRoute;