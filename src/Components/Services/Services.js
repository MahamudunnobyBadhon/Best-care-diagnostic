import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AllServices from '../AllServices/AllServices';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Services.css'

const Services = () => {

    const {user} = useAuth();
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('./allservices.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    return (
        <div className="services">
            <Header></Header>
            <div>
                <h4 style={{color: '#0e19ed'}} className="text-center mt-3"> Hi! <span style={{color:'red'}}>{user.displayName || user.email}.</span> </h4>
                <h3 style={{color: '#0e19ed'}} className="text-center">This is our Services</h3>
            </div>
            <div className="row d-flex justify-content-center g-4  mb-3 g-5 w-75 d-flex justify-content-center text-center mx-auto">
            {
               services?.map(service => 
               <AllServices        
               key={service.id}
               service={service}>

              </AllServices>)
            }
            </div>

            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Services;