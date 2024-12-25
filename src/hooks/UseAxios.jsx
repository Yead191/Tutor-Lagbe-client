import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './UseAuth';



const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const UseAxios = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, (error) => {
            // console.log('error caught in interceptors', error);
            if (error.status === 401 || error.status === 403) {
                // console.log('need to log out the user');
                logOut()
                    .then(() => {
                        // console.log('logged out for unauthorized access');
                        navigate('/login')

                    })
                    .catch(error => {
                        // console.log(error.message);
                    }
                    )
            }
            return Promise.reject(error)
        })
    }, [])

    return axiosInstance
};

export default UseAxios;