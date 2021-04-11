import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css'
const Testimonials = () => {
    const testimonialData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : wilson
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img : ema
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : aliza
        }
    ]
    return (
        <section className="testimonial container">
            <div className="testimonial-header py-5">
                <h5 style={{color:'#1CC7C1'}}>Testimonial</h5>
                <h2 style={{color:'#3A4256'}}>What's Our Patients<br/> Says</h2>
            </div>
                <div className="row mb-5 ">
                    {
                    testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} ></TestimonialCard>)    
                    }
                </div>
        </section>
    );
};

export default Testimonials;