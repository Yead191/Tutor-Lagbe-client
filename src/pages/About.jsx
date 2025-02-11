import { useEffect } from "react";
import { FaStar, FaProjectDiagram, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const About = () => {

    useEffect(() => {
        document.title = 'About | TutorLagbe?';
    }, []);
    const { tutorCounter, userCounter, } = useAuth()

    const { tutorCount } = tutorCounter
    const { userCount } = userCounter
    return (
        <div className="bg-base-100 py-16 px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h3 className="text-orange-500 text-lg font-bold mb-2">How It Started</h3>
                    <h1 className="text-4xl font-bold mb-6">
                        Empowering Learning, One Connection at a Time
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        TutorLagbe was founded by two passionate educators, Sarah Anderson, a seasoned tutor, and Michael Harris, a technology enthusiast dedicated to education.
                        Their shared vision was to create a platform where students could seamlessly find skilled tutors while tutors could share their expertise and grow their careers.
                        Inspired by the challenges faced by both learners and educators in finding the right opportunities, they built <span className="font-bold">TutorLagbe</span>.
                        With a mission to make quality education accessible to all, the platform bridges the gap between students and tutors worldwide. Whether you're seeking personalized lessons or looking to share your knowledge,
                        <span className="font-bold">TutorLagbe</span> is here to revolutionize the way we learn and teach.
                    </p>
                </div>


                {/* Right Section */}
                <div className="grid gap-4">
                    <img
                        src="https://publicassets.teachme2.com/www/images/become-a-tutor/female-blonde-tutor-tutoring-young-girl.jpg"
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat 1 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaStar className="text-orange-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">5+</p>
                                <p className="text-gray-600">Years of Service</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaProjectDiagram className="text-blue-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">8+</p>
                                <p className="text-gray-600">Language Categories</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaUserFriends className="text-green-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">{tutorCount}+</p>
                                <p className="text-gray-600">Active Tutors</p>
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaUsers className="text-purple-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">{userCount}</p>
                                <p className="text-gray-600">Trusted Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to={'/contact'} className="text-white my-6 px-6 py-3  rounded-none shadow-lg flex items-center gap-2"
                    style={{
                        background: 'linear-gradient(-30deg, #6c2a8c 50%, #a71678 50%)',
                    }}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
