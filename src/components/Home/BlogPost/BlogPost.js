import React from 'react';
import './BlogPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BlogPost = ({ blog }) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card text-left shadow p-2 my-card h-100" style={{ border: '0' }}>
                <div className="card-body">
                    <div className="card-hover-container">
                        <div className="my-card-hover align-self-center">
                            <div>
                                <div className="text-white mt-3 mb-4">
                                    <h6 className="text-white">{blog.author}</h6>
                                    <p className="text-white">{blog.date}</p>
                                </div>
                                <h5 className="text-white">{blog.title}</h5>
                            </div>
                            <div className="icon ">
                            <FontAwesomeIcon className="card-right mt-5" style={{fontSize:'3em',marginRight:'30px',cursor:'pointer',color:'#FFFFFF'}} icon={blog.icon} />
                            </div>
                        </div>
                    </div>
                    <div className="blog-main-content">
                        <div className="d-flex align-items-center ">
                            <img className="img-fluid me-4" src={blog.authorImg} alt="" />
                            <div>
                                <h6>{blog.author}</h6>
                                <p className="text-secondary">{blog.date}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text mt-4 text-secondary blog-des">{blog.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;