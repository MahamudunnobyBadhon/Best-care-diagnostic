import React from 'react';
import './SingleUser.css'

const SingleUser = (props) => {
    const {name, department, img, rating} = props.user || {};
    return (
        
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 home-user">
            <div className="card">
                <img style={{
                    height: '400px'
                }} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title fw-bold" style={{color: '#0e19ed'}}>{name}</h5>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Department :</span> {department}</p>
                        <p className="card-text "><span style={{color: '#0e19ed'}}>Rating :</span> {rating}</p>
                </div>

               
            </div>
         </div>
    );
};

export default SingleUser;