import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Footer from '../../Share/Footer/Footer';
import FutureService from '../FutureService/FutureService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FutureService></FutureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;