import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const HomePageDoctor = () => {

    const [doctors, setDoctor]= useState([]);

    useEffect(() => {
        fetch('./homepagedoctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[setDoctor])

    console.log(doctors);
    return (
        <div>

            <h3 style={{color: '#0e19ed'}} className="text-center">Our doctors</h3>
            <div className="row g-4 mt-1 mb-3 g-5 w-75 d-flex justify-content-center text-center mx-auto">
                {
                    doctors?.map( doctor => <Doctor
                   
                        key={doctor.id}
                    doctor={doctor}>

                    </Doctor>)
                }
            </div>
            
        </div>
    );
};

export default HomePageDoctor;