import React, { useState } from 'react';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import BookAppointment from '../BookAppointment/BookAppointment';
const Appointment = () => {
    const [selectDate,setSelectDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectDate} ></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;