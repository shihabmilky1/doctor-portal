import React from 'react';
import Doctor from '../../../images/doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className="Appointment-container mt-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={Doctor} alt=""/>
                </div>   
                <div className="col-md-6 align-self-center">
                    <h6 style={{color: '#1CC7C1'}}>APPOINTMENT</h6>
                    <h1 className="mb-4 text-white" >Make an appointment <br/> Today</h1>
                    <p className="text-white">It is a long established fact that a reader will be distractedby the readable content of a page when looking at its 
                    </p>
                    <button className="btn mt-4" style={{backgroundImage: 'linear-gradient(to right, #19d3ae, #00d3c1, #00d2d2, #00d1e1, #0fcfec)',color:'white',borderRadius:'0',padding:'10px 30px'}}>Learn More</button>
                </div> 
            </div>    
            </div>            
        </section>
    );
};

export default MakeAppointment;