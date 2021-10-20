import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import BottomPart from './Components/BottomPart/BottomPart';
import Banner from './Components/Banner/Banner';
import OurServices from './Components/OurServices/OurServices';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetalis from './Components/ServiceDetails/ServiceDetalis';
import Register from './Components/Register/Register';
import Login from './Components/LogIn/Login';
import AuthProvider from './context/AuthProvider';
import Appoinment from './Components/Appoinment/Appoinment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import Doctors from './Components/Doctors/Doctors';
import ContactUs from './Components/ContactUs/ContactUs';
import NoPage from './Components/NoPage/NoPage';

function App() {
  return (
    
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute exact path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>

            <PrivateRoute exact path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute exact path="/servicedetails/:service_id">
              <ServiceDetalis></ServiceDetalis>
            </PrivateRoute>

            <Route exact path="*">
              <NoPage></NoPage>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
    
  );
}

export default App;
