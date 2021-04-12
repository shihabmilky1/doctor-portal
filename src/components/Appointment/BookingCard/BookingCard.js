import React, { useState } from 'react';
import BookingFrom from '../BookingForm/BookingFrom';

const BookingCard = ({booking}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const  openModal = () => {
    setIsOpen(true);
  }

  const closeModal =() => {
    setIsOpen(false);
  }
    return (
        
         <div className="col-md-4">
            <div className="card text-left shadow" style={{border: '0'}}>
              <div className="card-body text-center">
                <h5 className="card-title text-center" style={{color: '#1CC7C1'}}>{booking.subject}</h5>
                <p className="card-text mb-0" style={{color: '#3A4256',fontWeight: 'bold'}}>{booking.visitingHour}</p>
                <small className="text-secondary mt-1">{booking.totalSpace}  SPACES AVAILABLE</small>
                <br/>
                <button onClick={openModal} className="btn my-btn mt-3">BOOK APPOINTMENT</button>
                <BookingFrom closeModal={closeModal} modalIsOpen={modalIsOpen} booking={booking}></BookingFrom>
              </div>
            </div>
        </div>   

    );
};

export default BookingCard;