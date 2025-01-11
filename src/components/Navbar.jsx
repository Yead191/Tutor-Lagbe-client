import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userImg from '../assets/user.png'
// import logo from '../assets/logo2.png'
import { PiSignIn, PiSignOut } from "react-icons/pi";
import useAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useAuth()
    // console.log(user);

    const navigate = useNavigate()

    const handleSignOut = () => {
        document.getElementById("my-drawer-2").checked = false
        logOut()
            .then(() => {
                toast.success('Sign out Successful');
                navigate('/login')
            }).catch((error) => {
                toast.error(error.message);
            });
    }


    const links = <div className='lg:flex lg:gap-3 '>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to={'/find-tutors'}>Find Tutors</NavLink></li>
        {
            user?.email &&
            <li><NavLink to={'add-tutorials'}>Add Tutorials</NavLink></li>

        }
        {
            user?.email &&
            <li><NavLink to={`/my-booked-tutor`}>My Booked Tutors</NavLink></li>

        }
        {
            user?.email &&

            <li><NavLink to={`/my-tutorials`}>My Tutorials</NavLink></li>
        }
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Us</NavLink></li>



    </div >
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };


    return (
        <div style={{
            background: "linear-gradient(90deg, #540654, #cc0d85 50%, #540654 100%, #00d4ff 0)"
        }} className="navbar bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#00d4ff] shadow-md fixed top-0 z-50 lg:px-20 ">


            <div className='navbar-start gap-7 md:gap-0'>
                <div className="drawer lg:hidden mr-6">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <label
                            htmlFor="my-drawer-2"
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current text-white">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className="bg-base-200 text-base-content min-h-full w-80 p-4 relative">
                            {/* Menu Header */}
                            <div className="flex items-center justify-between border-b pb-2 mb-4">
                                <h5
                                    id="drawer-navigation-label"
                                    className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                                >
                                    Menu
                                </h5>
                                <label
                                    htmlFor="my-drawer-2"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close menu</span>
                                </label>
                            </div>

                            {/* Menu Items */}
                            <ul className="menu">
                                <li className='text-md'>
                                    <NavLink
                                        to="/"
                                        onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className='text-md'>
                                    <NavLink
                                        to="/find-tutors"
                                        onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                    >
                                        Find Tutors
                                    </NavLink>
                                </li>
                                {
                                    user && user.email &&

                                    <li className='text-md'>
                                        <NavLink
                                            to="/add-tutorials"
                                            onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                        >
                                            Add Tutorials
                                        </NavLink>
                                    </li>
                                }

                                {
                                    user && user.email &&
                                    <li className='text-md'>
                                        <NavLink
                                            to="/my-booked-tutor"
                                            onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                        >
                                            My Booked Tutors
                                        </NavLink>
                                    </li>
                                }
                                {
                                    user &&
                                    <li className='text-md'>
                                        <NavLink
                                            to="/my-tutorials"
                                            onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                        >
                                            My Tutorials
                                        </NavLink>
                                    </li>
                                }
                                <li className='text-md'>
                                    <NavLink
                                        to="/about"
                                        onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li className='text-md'>
                                    <NavLink
                                        to="/contact"
                                        onClick={() => (document.getElementById("my-drawer-2").checked = false)}
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>

                            </ul>
                            {

                                user && user?.email ?
                                    <button onClick={() => handleSignOut()} className=" btn bg-base-100 btn-sm  w-full md:hidden"> Sign Out <PiSignOut className='text-lg' /></button>
                                    :
                                    <Link onClick={() => (document.getElementById("my-drawer-2").checked = false)} to='/login' className="btn btn-sm bg-base-100 w-full md:hidden"><PiSignIn className='text-lg' /> Login</Link>
                            }
                        </div>
                    </div>
                </div>

                <Link to={'/'} className='text-white text-2xl lg:text-3xl font-semibold pl-3 lg:pl-0' >
                    TutorLagbe?
                </Link>
            </div>




            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>

            </div>
            <div className="navbar-end gap-3 ">
                <button className="btn btn-sm rounded-full shadow-none" onClick={toggleTheme}>
                    {theme === "light" ?
                        <svg
                            className="swap-off h-5 w-5 md:h-6 md:w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        :

                        <svg
                            className="swap-on h-5 w-5 md:h-6 md:w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>

                    }
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className={`w-10 rounded-full hover:${user?.displayName}`} >
                            {
                                user ?
                                    <img title={user?.displayName || 'User'} className='w-10 h-10 object-cover overflow-hidden' src={user.photoURL} alt="" />
                                    :

                                    <img className='object-cover'
                                        alt="Tailwind CSS Navbar component"
                                        src={userImg} />
                            }


                        </div>

                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='pl-3 pt-1 font-semibold text-lg border-b'>{user?.displayName}</li>
                        <li className='pl-3 pt-1 text-sm text-[#cc0d85]'>{user?.email}</li>


                        {

                            user && user?.email ?
                                <button onClick={handleSignOut} className=" btn bg-base-100 btn-sm md:hidden"> Sign Out <PiSignOut className='text-lg' /></button>
                                :
                                <Link to='/login' className="btn btn-sm bg-base-100 md:hidden"><PiSignIn className='text-lg' /> Login</Link>
                        }



                    </ul>

                </div>
                <div className='hidden md:block'>
                    {

                        user && user?.email ?
                            <button onClick={() => handleSignOut()} className=" btn bg-base-100  "> Sign Out <PiSignOut className='text-lg' /></button>
                            :
                            <Link to='/login' className="btn bg-base-100 "><PiSignIn className='text-lg' /> Login</Link>
                    }



                </div>

            </div>
        </div>
    );
};

export default Navbar;