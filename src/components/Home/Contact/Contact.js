import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <section className="mt-5 py-5 contact-section">
            <div className="container">
                <div className="row">
                    <div>
                        <h6 style={{color: '#1CC7C1'}} className="text-center">CONTACT US</h6>
                        <h2 className="text-center text-white" >Always Connect With Us</h2>
                    </div>
                    <div className="col-md-8 mx-auto py-5">
    <form onSubmit={handleSubmit(onSubmit)}>      
      <input className="form-control my-3 p-3" placeholder="Name*" style={{border: '0'}}{...register("name", { required: true })} />
      {errors.name && <small className="text-white">This field is required</small>}
      <input className="form-control my-3 p-3" placeholder="Subject*" style={{border: '0'}}{...register("subject", { required: true })} />
      {errors.subject && <small className="text-white">This field is required</small>}
      <textarea className="form-control my-3 p-3" placeholder="Your Massage*" style={{border: '0'}}cols="30" rows="10" {...register("massage", { required: true })}  ></textarea>
      {errors.massage && <small className="text-white">This field is required</small>}
      <br/>
      <div className="text-center"><input className="btn my-btn text-center" type="submit" /></div>
    </form>
                    </div>
                </div>
                </div>            
        </section>
    );
};

export default Contact;