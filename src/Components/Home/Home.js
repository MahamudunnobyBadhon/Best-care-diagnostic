import React from 'react';
import Banner from '../Banner/Banner';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import HomePageDoctor from '../HomePageDoctor/HomePageDoctor';
import UserReview from '../UserReview/UserReview';
import googleMap from '../../images/googleMap.PNG'
import Schedule from '../Schedule/Schedule';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Banner></Banner>
            <OurServices></OurServices>
            <HomePageDoctor></HomePageDoctor>
            <UserReview></UserReview>
            <div className="w-75 mx-auto">
            <h4 style={{color:'red'}}className="text-center text-danger mt-3">Our address</h4>
            <img className="w-100" src={googleMap} alt=""/>
            </div>

            <Schedule></Schedule>
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Home;