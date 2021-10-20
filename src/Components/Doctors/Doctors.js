import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BottomPart from '../BottomPart/BottomPart';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Doctors.css'

const Doctors = () => {

    const [doctors, setDoctor]= useState([]);

    useEffect(() => {
        fetch('./alldoctors.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[setDoctor])
    return (
        <div className="all-doctors">
            <Header></Header>
            <Banner></Banner>
            <h3 style={{color: '#0e19ed'}} className="text-center">Our doctors</h3>
            <div className="row g-4 mt-1 mb-3 g-5 w-75 d-flex justify-content-center text-center mx-auto">
                {
                    doctors?.map( doctor => <Doctor
                   
                    key={doctor.id}
                    doctor={doctor}>

                    </Doctor>)
                }
            </div>

            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Doctors;