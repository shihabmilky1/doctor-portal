import React from 'react';
import Chair  from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main >
            <div className="container">
                <div className="row align-items-center" style={{height:'80vh'}}>
                    <div className="col-md-4 offset-md-1">
                        <h1 style={{color:'#3a4256'}}>Your New Smile <br/>Starts Here</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae officia fugiat inventore qui odio.</p>
                        <button className="btn text-white my-btn">GET APPOINTMENT</button>
                    </div>
                    <div className="col-md-6">
                        <img src={Chair} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;