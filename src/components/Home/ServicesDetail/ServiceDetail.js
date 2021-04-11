import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 pt-5">
            <div className="card text-center h-100" style={{border:'0'}}>
              <img className="card-img-top mx-auto" style={{height:'50px',width:'50px'}} src={service.img} alt=""/>
              <div className="card-body">
                <h5 className="card-title my-3" >{service.name}</h5>
                <p className=" text-secondary">Lorem Ipsum is simply dummy printing and typesetting indust
                    Ipsum has been the</p>
              </div>
            </div>
        </div>
    );
};

export default ServiceDetail;