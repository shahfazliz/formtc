import React from 'react';
import SubHeader from '../SubHeader';
import H2 from '../H2';
import Text from '../Text';
import backgroundImage from './Bitmap.png';
import MainButton from '../MainButton';

import './AboutUsSection.css';

function AboutUsSection({ style }) {
    return <section id='about-us' className='about-us-section'>
        <div style={{ gridColumn: '1 / 2', backgroundImage: `url(${ backgroundImage })` }}>
            &nbsp;
        </div>
        <div style={{ gridColumn: '2 / 3'}}>
            <div style={{ marginLeft: '20px', maxWidth: '580px' }}>
                <SubHeader style={{ textAlign: 'left' }}>Quality Craftmanship from build to delivery</SubHeader>
                <H2>Discover the beauty of a handmade kitchen</H2>
                <Text style={{ marginTop: '33px' }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
                </Text>
                <MainButton style={{ marginTop: '25px' }}>about us</MainButton>
            </div>
        </div>
    </section>;
}

export default AboutUsSection;