import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <body className='flex-grow'>
                <Outlet></Outlet>

            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;