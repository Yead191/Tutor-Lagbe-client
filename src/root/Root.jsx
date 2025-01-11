import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'



const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulating a short delay to display loader
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div className="flex flex-col  justify-center items-center min-h-screen">
            <img src={logo} alt="" />
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid">
            </div>
        </div>

    }

    return (
        <div className='flex flex-col min-h-screen '>
            <nav className='h-[68px]'>
                <Navbar></Navbar>
            </nav>
            <div className='flex-grow'>
                <Outlet></Outlet>

            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;