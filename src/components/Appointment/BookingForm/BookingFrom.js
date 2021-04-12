import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',

      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      maxWidth : '480px'
    }
  };
  Modal.setAppElement('#root')
const BookingFrom = ({closeModal,modalIsOpen,booking}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h4 className="text-center" style={{color: '#1CC7C1'}}>{booking.subject}</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-group">
  <input className="form-control my-3" {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <small>This field is required</small>}
  </div>
  <div className="form-group">
      <select id="inputState" className="form-control d-block">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
  <div className="d-flex justify-content-between">
    <div className="form-group col-md-3">
    <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-3">
      <input type="text" className="form-control" id="inputZip"/>
    </div>

  </div>     
      <input className="btn my-btn " type="submit" value="Send" />
    </form>
        </Modal>
        </div>
    );
};

export default BookingFrom;