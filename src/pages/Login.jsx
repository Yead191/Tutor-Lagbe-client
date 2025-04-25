import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Lottie from "lottie-react";
import loginLottie from "../assets/login.json";
import useAuth from "../hooks/UseAuth";
import SocialLogin from "../components/SocialLogin";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    document.title = "Login | TutorLagbe?";
  }, []);
  // states for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  // console.log(location, 'location');

  // default credentials
  const handleBadgeClick = (emailValue, passwordValue) => {
    setEmail(emailValue);
    setPassword(passwordValue);
  };

  const navigate = useNavigate();
  const from = location.state || "/";
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(async (result) => {
        // console.log(result.user);
        form.reset();
        // toast.success(`Logged In as: ${result.user.displayName}`);
        // navigate(from)
        const user = { email: result.user.email };

        await toast.promise(
          axios.post("https://tutor-lagbe-server.vercel.app/jwt", user, {
            withCredentials: true,
          }),
          {
            loading: "Signing in...",
            success: <b>Successfully signed in!</b>,
            error: (error) => error.message,
          }
        );
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  //   console.log(password, email);

  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex items-center justify-center min-h-screen bg-base-100"
    >
      <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
        {/* Left Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h2>
          <SocialLogin></SocialLogin>
          {/* Default Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            className="flex gap-3 justify-center items-center flex-wrap mb-4 "
            viewport={{ once: true }}
          >
            <span
              className="badge bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white text-xs badge-lg cursor-pointer"
              onClick={() => handleBadgeClick("user@tutor.com", "Tutor123@456")}
            >
              Default User
            </span>
          </motion.div>
          <form onSubmit={handleSignIn} className="w-full">
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <div className="relative w-full mb-4">
              <input
                type={showPass ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654] text-white hover:bg-purple-700 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                SIGN IN
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-r from-[#540654] via-[#cc0d85] to-[#540654]  text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-r-lg md:rounded-tl-[100px] md:rounded-bl-[100px]">
          <Lottie className="w-full h-36 " animationData={loginLottie}></Lottie>
          <p className="my-2 text-sm text-center">
            Register with your personal details to use all of the site's
            features.
          </p>
          <Link
            to="/register"
            className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition hover:scale-110"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
