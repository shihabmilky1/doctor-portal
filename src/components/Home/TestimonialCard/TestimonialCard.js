import React from 'react';

const TestimonialCard = (props) => {
    const {quote,name,from,img} = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="card text-left shadow p-3"  style={{border: '0'}}>
              <div className="card-body">
                <p className="card-text text-secondary">{quote}</p>
                <div className="d-flex align-items-center justify-content-center mt-5">
                    <img className="img-fluid me-4" src={img} alt=""/>
                    <div>
                        <h6 style={{color:'#1CC7C1'}}>{name}</h6>
                        <p className="text-secondary">{from}</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default TestimonialCard;