// Video.js
import React from 'react';
import video from './Home.mp4';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
        <video autoPlay muted loop className="video-element">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <p className="first-t">The Best Education Platform In Marketplace</p>
          <h1 className="second-t">A Plane For Everyone <br /> with Best <span>Education Loan</span> </h1>
          <p className="third-t">We are ambitious and unique to make your dream a reality though sharing the best <br/> tricks and assistance study abroad.</p>
          <div className="button">
            <button className="btn">Request for callback</button>
            <button className="btn">Loan Eligibility</button>
          </div>
        </div>
      </div>
  );
};

export default Video;
