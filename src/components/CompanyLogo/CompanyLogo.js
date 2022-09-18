import React from 'react';
import logo from './Group 40.svg';
import './CompanyLogo.css';

function CompanyLogo({ 
    style,
    forNavigation,
}) {
    return <img className={ forNavigation ? 'navigation-logo' : '' } src={ logo } alt='Company Logo'/>;
}

export default CompanyLogo;