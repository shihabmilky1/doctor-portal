import React from 'react';
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import DoctorData from '../DoctorData/DoctorData';
import doctor from '../../../images/doctor.png'
const Doctor = () => {
    const DoctorsData = [
        {
            name:'Dr. Caudi',
            phone: '+61 452 200 126',
            icon: faPhone,
            img: doctor
        },
        {
            name:'Dr. Caudi',
            phone: '+61 452 200 126',
            icon: faPhone,
            img: doctor
        },
        {
            name:'Dr. Caudi',
            phone: '+61 452 200 126',
            icon: faPhone,
            img: doctor
        },
    ]
    return (
        <section >
            <div className="container">
                <div>
                    <h5 className="mb-5" style={{color: '#1CC7C1',textAlign:'center'}}>Our Doctors</h5>
                </div>
                <div className="row">
                    {
                        DoctorsData.map(doctor => <DoctorData doctor={doctor} ></DoctorData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;