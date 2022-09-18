import React from 'react';
import SubHeader from '../SubHeader';
import H3 from '../H3';
import Quote from '../Quote';
import Text from '../Text';
import MainButton from '../MainButton';
import leftArrow from './Combined Shape Left.png';
import rightArrow from './Combined Shape Right.png';

import './FAQSection.css';

function FAQSection({ style }) {
    return <section className='faq-section'>
        <div style={{ width: '250px' }}>
            <img src={ leftArrow } alt='left arrow'/>
        </div>
        <div style={{ width: '600px' }}>
            <SubHeader>What Our Customers Say</SubHeader>
            <H3 style={{ textAlign: 'center' }}>Over 35 years experience designing handmade kitchens</H3>
            <Quote style={{ textAlign: 'center', marginTop: '20px' }}>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</Quote>
            <Text style={{ marginTop: '20px' }}>
                <p style={{ textAlign: 'center' }}>Jane, Dundee</p>
            </Text>
            <MainButton style={{ marginTop: '20px' }}>Frequently Asked Questions</MainButton>
        </div>
        <div style={{ width: '250px' }}>
            <img src={ rightArrow } alt='right arrow'/>
        </div>
    </section>;
}

export default FAQSection;