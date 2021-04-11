import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker ,faPhone } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const infoData = [{
        title:'Opening Hours',
        description: 'Lorem Ipsum is simply dummy text of the pri.',
        icon:faClock,
        background:'#1CC7C1',
    },
    {
        title:'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background:'#3A4256'
    },
    {
        title:'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background:'#1CC7C1'
    }]
    return (
        <section className="container">
            <div className="row g-2">
            {
                infoData.map(info=> <InfoCard info={info} ></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;