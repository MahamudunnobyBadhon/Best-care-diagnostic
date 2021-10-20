import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const ServiceDetalis = ({children}) => {

    const {service_id} = useParams();
    console.log(service_id);
    

    const [service, setService] = useState([]);
    useEffect( () =>{
        fetch('../allservices.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[]);

    const serviceId = service.find( (pd) => pd.id === parseInt(service_id));
    console.log(serviceId);
    const {name, details, img, time} = serviceId || {};
    return (
        <div>
            <Header></Header>
            {
                <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={img} style={{
                        width: '500px',
                        height: '300px'
                    }} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p style={{
                          fontSize: '16px'
                      }} className="card-text">{details}</p>
                      <p className="card-text"><span style={{
                          color: 'chocolate'
                      }}>Avalibility :</span> {time}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            }
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default ServiceDetalis;