import React from 'react';
import Chair  from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'
const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main >
        <div className="container">
            <div className="row align-items-center" style={{height:'80vh'}}>
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3a4256'}}>Appointment</h1>
                    <div>
      <Calendar className="shadow mt-5 p-4" style={{border:'0px'}}
        onChange={handleDateChange}
        value={new Date()}
      />
    </div>
                </div>
                <div className="col-md-6">
                    <img src={Chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    </main>
    );
};

export default AppointmentHeader;