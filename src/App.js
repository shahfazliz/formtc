import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutUsSection from './components/AboutUsSection';
import AltButton from './components/AltButton';
import CompanyLogo from './components/CompanyLogo';
import CustomerGallerySection from './components/CustomerGallerySection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import MainButton from './components/MainButton';
import MyOrderButton from './components/MyOrderButton';
import Navigation from './components/Navigation';
import OrderNowSection from './components/OrderNowSection';
import Quote from './components/Quote';
import React from 'react';
import Text from './components/Text';

import './Reset.css';
import './App.css';

const styles = {
  normal: {
    padding: '10px',
    width: '490px',
  },
  black: {
    backgroundColor: 'black',
    padding: '10px',
    width: '490px',
  }
};

function App() {
  return (
    <div className='App'>
      <CompanyLogo forNavigation={ true } />
      <Navigation>
        <div>
          <div>
            <a href='https://www.facebook.com/'><FontAwesomeIcon icon={brands('facebook-f')} /></a>
            <a href='https://www.twitter.com/'><FontAwesomeIcon icon={brands('twitter')} /></a>
            <a href='https://www.instagram.com/'><FontAwesomeIcon icon={brands('instagram')} /></a>
          </div>
          
          <div>
            <a style={{ marginLeft: '4vw', marginRight: '30px' }} href='#order-now'>shop</a>
            <a href='#order-now'>plan my kitchen</a>
          </div>
        </div>
        
        <div>
          <div>
            <a href='#about-us'>about us</a>
            <a style={{ marginLeft: '30px', marginRight: '1vw' }} href='#gallery'>gallery</a>
          </div>
          <MyOrderButton />
        </div>
      </Navigation>

      
      <main>
        <OrderNowSection />
        <AboutUsSection />
        <FAQSection />
        <CustomerGallerySection />
        <FooterSection />
      </main>

      {/* 
        // Basic Design and Style Guide
         
        <MainButton style={{ display: 'block', margin: '10px'}}>main button style</MainButton>

        <AltButton style={{ display: 'block', margin: '10px' }} transparent={ false }>alt button</AltButton>

        <div style={ styles.black }>
          <AltButton style={{ margin: '10px' }} transparent={ true }>alt button</AltButton>
        </div>

        <H1 style={{ ...styles.normal, width: '400px' }}>Heading one on two lines</H1>
        <H2 style={{ ...styles.normal, width: '350px' }}>Heading two on two lines</H2>
        <H3 style={{ ...styles.normal, width: '300px' }}>Heading three on two lines</H3>
        <H4 style={{ ...styles.normal, width: '200px' }}>Heading four on two lines</H4>
        <H5 style={{ ...styles.normal, width: '150px' }}>Heading five on two lines</H5>

        <Text style={ styles.normal }>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna.</p>
          <p>Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
        </Text>

        <Quote style={ styles.normal }>
          “Blockquote my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.”
        </Quote>
        
      */}
    </div>
  );
}

export default App;
