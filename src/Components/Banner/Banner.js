import React from 'react';
import bannerDoctor3 from '../../images/bannerDoctor3.jpg'
import bannerDoctor4 from '../../images/bannerDoctor4.jpg'
import banner from '../../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img style={{height: '100vh'}}src={banner} className=" img-fluid d-block w-100 first-image" alt="..."/>
                </div>
                <div className="carousel-item">
                <img style={{height: '100vh'}} src={bannerDoctor4} className="img-fluid d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img style={{height: '100vh'}} src={bannerDoctor3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        // <div className="banner-doctor">
        //         {/* <div className="top-banner-text">
                
        //             <h4> Welcome to <span style={{
        //                 color: "red"
        //             }}> Best Care</span></h4>

        //             <h5>We are here for your care</h5>
        //             <h5>We provide best medical Supports</h5>
        //         </div> */}

        //             {/* <div className="col-6">

        //             </div>
        //             <div style={{}}className="col-6 d-block text-center align-items-center jutify-content-center flex-direction-row">
                    
        //             </div> */}
        //         <img style={{
        //             width: '100%'
        //         }}rc={bannerDoctor} alt="" />
            
        // </div>
    );
};

export default Banner;