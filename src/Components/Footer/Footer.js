import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="row gx-4">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div>
                        
                        
                        <h5> <i className="fas fa-stethoscope hospital-symbol" ></i> Best Care</h5>
                    

                        <p>we have team of experienced doctors at our clinic who are specialized in  Neurology, Opthalmology, Nuclear Magnetic, Surgical, Cardiology, Diabetology and General care.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <h5>Departments</h5>
                    <ul>
                        <li>
                            Neurology
                        </li>
                        <li>
                            Opthalmology
                        </li>
                        <li>
                            Nuclear Magnetic
                        </li>
                        <li>
                            Surgical
                        </li>
                        <li>
                            Cardiology
                        </li>
                        <li>
                            Dental
                        </li>
                    </ul>

                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <h5>Useful Links</h5>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Department
                            </li>
                            <li>
                                Doctors
                            </li>
                            <li>
                                Contacts
                            </li>
                        </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    
                    <h5 style={{
                        
                    }}>
                            Contact Us
                    </h5>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <i className="fas fa-phone-volume"></i>
                            </td>
                            <td>
                                01723984697
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-map-marker-alt"></i>
                            </td>
                            <td>
                                Ramagar, Dinajpur
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="far fa-envelope"></i>
                            </td>
                            <td>
                                u1704035@student.cuet.ac.bd
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>    
        </div>
        
    );
};

export default Footer;