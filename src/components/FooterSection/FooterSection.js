import React from 'react';
import CompanyLogo from '../CompanyLogo';
import H4 from '../H4';
import SubHeader from '../SubHeader';

import facebookIcon from './Combined Shape Facebook.png';
import twitterIcon from './Combined Shape Twitter.png';
import instagramIcon from './Combined Shape Instagram.png';

import './FooterSection.css';

const styles = {
    centerHeader: {
        color: '#FFFFFF',
        marginBottom: '30px',
    },
    subHeader: {
        color: '#FFFFFF',
        textAlign: 'left',
        opacity: '0.8',
    },
};

function FooterSection({ style }) {
    return <section className='footer-section' style={ style }>
        <div className='logo'>
            <hr />
            <CompanyLogo />
            <hr />
        </div>
        <div className='center'>
            <div>
                <H4 style={ styles.centerHeader }>About</H4>
                <SubHeader style={ styles.subHeader }>shop</SubHeader>
                <SubHeader style={ styles.subHeader }>plan my kitchen</SubHeader>
                <SubHeader style={ styles.subHeader }>about us</SubHeader>
                <SubHeader style={ styles.subHeader }>gallery</SubHeader>
            </div>
            <div>
                <H4 style={ styles.centerHeader }>Service</H4>
                <SubHeader style={ styles.subHeader }>FAQ</SubHeader>
                <SubHeader style={ styles.subHeader }>contact</SubHeader>
                <SubHeader style={ styles.subHeader }>how to buy</SubHeader>
                <SubHeader style={ styles.subHeader }>downloads</SubHeader>
            </div>
            <div>
                <H4 style={ styles.centerHeader }>Info</H4>
                <SubHeader style={ styles.subHeader }>delivery</SubHeader>
                <SubHeader style={ styles.subHeader }>terms</SubHeader>
                <SubHeader style={ styles.subHeader }>privacy</SubHeader>
            </div>
            <div>
                <H4 style={ styles.centerHeader }>Follow</H4>
                <a href='https://www.facebook.com/'><img src={ facebookIcon } alt='facebook icon' /></a>
                <a href='https://www.twitter.com/'><img src={ twitterIcon } alt='twitter icon' /></a>
                <a href='https://www.instagram.com/'><img src={ instagramIcon } alt='instagram icon' /></a>
            </div>
        </div>
        <div className='bottom'>
            <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
            <hr />
        </div>
    </section>;
}

export default FooterSection;