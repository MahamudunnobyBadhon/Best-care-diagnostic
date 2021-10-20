import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
    const {id, name, img, details, time} = props.service;
    const shortDetails = ((details).slice(0,50));
    return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 home-service" style={{
                
            }}>
                <div className="card ">
                    <img style={{
                              height: '200px'
                    }} src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold" style={{color: '#0e19ed'}}>{name}</h5>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Avalibility :</span> {time}</p>        

                        <p className="card-text text-sm">{shortDetails}</p>                                   
                    </div>
                    <Link type="submit" className="btn btn-primary w-50 mx-auto mb-2" to={`/servicedetails/${id}`}>
                        <i className="fas fa-info-circle"></i>Deatils
                    </Link>
                </div>
            </div>
    );
};

export default Service;