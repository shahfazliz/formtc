import React from 'react';
import H3 from '../H3';
import './CustomerGallerySection.css';
import MainButton from '../MainButton';

function CustomerGallerySection({ style }) {
    return <section className='customer-gallery-section' style={ style }>
        <div>
            <H3>Customer Gallery</H3>
            <div className='images-in-row' style={{ marginTop: '40px' }}>
                <img src='/image/gallery/Bitmap 1.png' />
                <img src='/image/gallery/Bitmap 2.png' />
                <img src='/image/gallery/Bitmap 3.png' />
                <img src='/image/gallery/Bitmap 4.png' />
            </div>
            <MainButton style={{ marginTop: '40px' }}>View More</MainButton>
        </div>
    </section>;
}

export default CustomerGallerySection;