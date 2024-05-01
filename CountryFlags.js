// CountryFlags.js
import React from 'react';
import './CountryFlags.css';
import us from './country-flag/united-states.png';
import uk from './country-flag/united-kingdom.png';
import canada from './country-flag/canada.png';
import australia from './country-flag/australia.png';
import ireland from './country-flag/ireland.png';
import nz from './country-flag/new.png';
import france from './country-flag/france.png';
import germany from './country-flag/germany.png';
import arrow from './icon/right-icon.png';

const CountryFlags = () => {
  return (
    <section className="country-container">
        <h2 className="country-header">Choose Your Dream Country</h2>
        <div className="country-grid">
          <div className="flag-item">
            <img src={us} alt="us-flag" className="flag-icon" />
            <p>United States</p>
          </div>
          <div className="flag-item">
            <img src={uk} alt="uk-flag" className="flag-icon" />
            <p>United Kingdom</p>
          </div>
          <div className="flag-item">
            <img src={canada} alt="canada-flag" className="flag-icon" />
            <p>Canada</p>
          </div>
          <div className="flag-item">
            <img src={australia} alt="australia-flag" className="flag-icon" />
            <p>Australia</p>
          </div>
          <div className="flag-item">
            <img src={ireland} alt="ireland-flag" className="flag-icon" />
            <p>Ireland</p>
          </div>
          <div className="flag-item">
            <img src={nz} alt="nz-flag" className="flag-icon" />
            <p>New Zealand</p>
          </div>
          <div className="flag-item">
            <img src={france} alt="france-flag" className="flag-icon" />
            <p>France</p>
          </div>
          <div className="flag-item">
            <img src={germany} alt="germany-flag" className="flag-icon" />
            <p>Germany</p>
          </div>
        </div>


        {/* -------------------Tools and serives------------------- */}

        <section className="tools-container">
          <h2 className="country-header">Tolls & Services</h2>
          <div className="tools-services">
            <div className="tool-items">
              <p className="tools-name">Check Eligibility</p>
              <p className="Learn-more"><img src={arrow} alt="right-icon" />Learn More</p>
            </div>
            <div className="tool-items">
              <p className="tools-name">EMI Calculator</p>
              <p className="Learn-more"><img src={arrow} alt="right-icon" />Learn More</p>
            </div>
            <div className="tool-items">
              <p className="tools-name">Repayment Calculator</p>
              <p className="Learn-more"><img src={arrow} alt="right-icon" />Learn More</p>
            </div>
          </div>
        </section>


      </section>
  );
};

export default CountryFlags;
