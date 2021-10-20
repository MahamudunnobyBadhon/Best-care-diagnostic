import React from 'react';
import './Doctor.css'

const Doctor = (props) => {

    const {name, department, img, offday} = props.doctor;
    return (
        
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 home-doctor">
            <div className="card">
                <img style={{
                    height: '400px'
                }} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title fw-bold" style={{color: '#0e19ed'}}>{name}</h5>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Department :</span> {department}</p>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Off Day :</span> {offday}</p>
                </div>

                <button className="btn btn-primary btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default Doctor;