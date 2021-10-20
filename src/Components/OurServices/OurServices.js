import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const OurServices = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('./homepageservices.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);


    return (
        <div>
            <div>
                <h4 style={{color: '#0e19ed'}} className="text-center"> Our Services</h4>
            </div>
            <div className="row d-flex justify-content-center g-4 mt-1 mb-3 g-5 w-75 d-flex justify-content-center text-center mx-auto">
            {
               services?.map(service => <Service      
                key={service.id}
                service={service}>

               </Service>) 
            }
            </div>
        </div>
    );
};

export default OurServices;