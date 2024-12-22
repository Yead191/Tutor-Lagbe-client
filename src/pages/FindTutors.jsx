import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FindTutors = () => {
    const tutorials = useLoaderData()
    
    return (
        <div>
            <h1>total tutorial= {tutorials?.length}</h1>
        </div>
    );
};

export default FindTutors;