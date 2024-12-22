import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
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