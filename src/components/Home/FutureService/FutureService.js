import React from 'react';
import FutureServicePhoto from '../../../images/FutureService.png'
const FutureService = () => {
    return (
        <section className="py-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 my-5" >
                    <img className="img-fluid" src={FutureServicePhoto} alt=""/>
                </div>
                <div className="col-md-7 align-self-center my-5" style={{paddingRight:'120px'}}>
                    <h1 style={{color:"#3A4256"}}>Exceptional Dental <br/> Care, on Your Terms</h1>
                    <p className="my-5 text-secondary" style={{lineHeight:'30px'}}>It is a long established fact that a reader will be distracted

                        by the readable content of a page when looking at its 

                        layout. The point of using Lorem Ipsumis that it has

                        a more-or-less normal distribution of letters,as opposed

                        to using ‘Content here, content here’, making it look like

                        readable English. Many desktop publishing packages 

                        </p>
                        <button className="btn" style={{backgroundImage: 'linear-gradient(to right, #19d3ae, #00d3c1, #00d2d2, #00d1e1, #0fcfec)',color:'white',borderRadius:'0',padding:'10px 30px'}}>Learn More</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default FutureService;