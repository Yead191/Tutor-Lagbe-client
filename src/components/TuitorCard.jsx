import React from 'react';

const TutorCard = ({tutor}) => {
    return (
        <div className="bg-base-100 p-5 rounded-lg shadow-lg flex items-start relative">
            {/* Profile Picture */}
            <div className="flex-shrink-0 absolute -top-10 left-2">
                <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full border-4 border-transparent shadow-md"
                />
            </div>

            {/* Tutor Details */}
            <div className="ml-4 pt-3">
                {/* Name and Badge */}
                <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold ">{tutor.name}</h3>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {tutor?.status}
                    </span>
                </div>
                {/* Tutor ID */}
                <p className="text-sm text-red-600 font-semibold">Tutor ID: {tutor._id}</p>

                {/* Additional Info */}
                <p className="text-sm ">
                    <span className="font-medium">Language:</span> <span className='text-lg font-semibold'> {tutor.language}</span>
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Gender:</span> {tutor.gender}
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Tuition Experience:</span> {tutor.experience} Years
                </p>
                <p className="text-sm ">
                    <span className="font-medium">Living Location:</span> {tutor.country}
                </p>
            </div>

            {/* Badge */}
            
        </div>
    );
};

export default TutorCard;