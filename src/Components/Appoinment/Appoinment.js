import React from 'react';
import useAuth from '../../Hooks/useAuth';
import BottomPart from '../BottomPart/BottomPart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Appoinment.css';

const Appoinment = () => {

    const {user} = useAuth();
    return (
        <div>
            <Header></Header>
            <h4 className="text-center text-danger">Please fill the appoinment form sincerly.. Thank you</h4>
            <form className="row g-3 w-50 mx-auto mt-2 mb-2 appoinment-form">
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" defaultValue={user.email}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputPassword4" defaultValue={user.displayName}/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Doctor Name</label>
                <input type="text" className="form-control" id="inputAddress" placeholder=""/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Appoinment Date</label>
                <input type="date" className="form-control" id="birthday" name="birthday"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
           
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Confirm Appoinment</button>
            </div>
            </form>
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Appoinment;