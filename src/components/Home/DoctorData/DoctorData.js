import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DoctorData = ({doctor}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card text-left text-center" style={{border: '0'}}>
              <img className="card-img-top" src={doctor.img} alt=""/>
              <div className="card-body">
                <h5 className="card-title"  style={{color:'#3A4256'}}>{doctor.name}</h5>
                <p className="card-text text-secondary"><FontAwesomeIcon className="" style={{cursor:'pointer',color:'#1CC7C1'}} icon={doctor.icon} /> {doctor.phone}</p>
              </div>
            </div>
        </div>
    );
};

export default DoctorData;