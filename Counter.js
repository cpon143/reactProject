// Counter.js
import './Counter.css';
// import right from './image/right-icon.png';

import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loanCount, setLoanCount] = useState(0);
  const [sanctionCount, setSanctionCount] = useState(0);
  const [disburseCount, setDisburseCount] = useState(0);
  const [insuranceCount, setInsuranceCount] = useState(0);
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this threshold as needed
      }
    );

    const whyRefCurrent = whyRef.current; // Capture the ref value in a variable

    if (whyRefCurrent) {
      observer.observe(whyRefCurrent);
    }

    return () => {
      if (whyRefCurrent) {
        observer.unobserve(whyRefCurrent);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (isVisible) {

      // Add animation to the grid items
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach((item, index) => {
        item.style.animation = `slideIn 2s forwards ${index * 0.2}s`; // Delay each item by 0.2 seconds
      });
      // Add animation to the loan header
      const loanHeader = document.querySelector('.loan-header');
      loanHeader.style.animation = 'fadeIn 1.5s forwards';

      intervalId = setInterval(() => {
        setLoanCount((prevCount) =>
          prevCount >= 10500 ? 10500 : prevCount + Math.floor(Math.random() * 10)
        );
        setSanctionCount((prevCount) =>
          prevCount >= 500000 ? 500000 : prevCount + Math.floor(Math.random() * 1000)
        );
        setDisburseCount((prevCount) =>
          prevCount >= 150000 ? 150000 : prevCount + Math.floor(Math.random() * 1000)
        );
        setInsuranceCount((prevCount) =>
          prevCount >= 14000000 ? 14000000 : prevCount + Math.floor(Math.random() * 100000)
        );
      }, 1); 
      
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isVisible]);

  const formatNumber = (number) => {
    if (number >= 10000000) {
      return (number / 10000000).toFixed(1) + 'Cr+';
    } else if (number >= 100000) {
      return (number / 1000).toFixed(0) + 'K+';
    } else {
      return number;
    }
  };




  return (
    <section className="counter-sec" ref={whyRef}>
        <div className="card-grid">
          <div className="card-view">
            <div className="icon-container">
              {/* <img src={right} alt="icon" className="icon" /> */}
            </div>
            <h3>Loan Application</h3>
            <h2><b>{formatNumber(loanCount)}</b></h2>
          </div>
          <div className="card-view">
            <div className="icon-container">
              {/* <img src={right} alt="icon" className="icon" /> */}
            </div>
            <h3>Sanction</h3>
            <h2><b>{formatNumber(sanctionCount)}</b></h2>
          </div>
          <div className="card-view">
            <div className="icon-container">
              {/* <img src={right} alt="icon" className="icon" /> */}
            </div>
            <h3>Disburse</h3>
            <h2><b>{formatNumber(disburseCount)}</b></h2>
          </div>
          <div className="card-view">
            <div className="icon-container">
              {/* <img src={right} alt="icon" className="icon" /> */}
            </div>
            <h3>Insurance</h3>
            <h2><b>{formatNumber(insuranceCount)}</b></h2>
          </div>
        </div>
      </section>
  );
};

export default Counter;
