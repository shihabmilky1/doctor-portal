import React from 'react';
import Fluoride from '../../../images/Fluoride.png'
import Cavity from '../../../images/Cavity.png'
import Teath from '../../../images/tooth.png'
import ServiceDetail from '../ServicesDetail/ServiceDetail';
const Services = () => {
    const serviceData = [
        {
            name:'Fluoride Treatment',
            img:Fluoride
        },
        {
            name:'Cavity Filling',
            img: Cavity
        },
        {
            name:'Teath Whitening',
            img: Teath
        },
    ]
    return (
        <section className="container mt-5 pt-5">
            <div  className="text-center" >
            <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
            <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="row mt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;