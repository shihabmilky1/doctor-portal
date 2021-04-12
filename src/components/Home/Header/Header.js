import React from 'react';
import BusinessInfo from '../BusinesInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Share/Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;