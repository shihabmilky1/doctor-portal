import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoCard = ({ info }) => {
    return (
        <div className="col-lg-4">
            <div className="card px-4 h-100 text-white" style={{ border: '0', borderRadius: '0', background: info.background }}>
                <div className="card-body d-flex align-items-center justify-content-lg-center">
                    <div>
                        <FontAwesomeIcon style={{fontSize:'3em',marginRight:'30px'}} icon={info.icon} />
                    </div>
                    <div>
                        <h4>{info.title}</h4>
                        <small >{info.description}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;