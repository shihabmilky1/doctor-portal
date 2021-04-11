import React from 'react';
import wilson from '../../../images/Ellipse 1.png';
import BlogPost from '../BlogPost/BlogPost';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    const OurBlogs = [
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019',
            icon : faArrowRight,
        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : wilson,
            date : '23 April 2019',
            icon : faArrowRight,
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : wilson,
            date : '23 April 2019',
            icon : faArrowRight
        },
    ]
    return (
        <section className="mb-5">
            <div className="container py-5">
                <div className="blog-header text-center">
                    <h5 style={{color:'#1CC7C1'}}>Our Blog</h5>
                    <h2 style={{color:'#3A4256'}}>From Our Blog News</h2>
                </div>
                    <div className="row mt-5">
                        {
                            OurBlogs.map(blog => <BlogPost blog={blog}></BlogPost>)
                        }
                    </div>
            </div>
        </section>
    );
};
export default Blog;