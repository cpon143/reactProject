// PartnerLogos.js
import React from 'react';
import './PartnerLogos.css';
import bankImage1 from './image/bank1.jpg';
import bankImage2 from './image/bank2.jpg';
import bankImage3 from './image/bank3.jpg';
import bankImage4 from './image/bank4.jpg';
import bankImage5 from './image/bank5.jpg';
import bankImage6 from './image/bank6.jpg';

const PartnerLogos = () => {
  return (
    <section className="secondary-section">
        <h2>Our Trusted Loan Partners</h2>
        <div className="partner-container">
          <div className="partner-logos">
            <img src={bankImage1} alt="SBI" />
            <img src={bankImage2} alt="Bank2" />
            <img src={bankImage3} alt="Bank3" />
            <img src={bankImage4} alt="Bank4" />
            <img src={bankImage5} alt="Bank5" />
            <img src={bankImage6} alt="Bank6" />
          </div>
        </div>
      </section>
  );
};

export default PartnerLogos;
