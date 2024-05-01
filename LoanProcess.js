// LoanProcess.js
// import React from 'react';
import './LoanProcess.css';
// import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


import React, { useEffect, useRef } from 'react';

const LoanProcess = () => {
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation to the grid items
          const gridItems = document.querySelectorAll('.grid-item');
          gridItems.forEach((item, index) => {
            item.style.animation = `slideIn 2s forwards ${index * 0.2}s`; // Delay each item by 0.2 seconds
          });
          // Add animation to the loan header
          const loanHeader = document.querySelector('.loan-header');
          loanHeader.style.animation = 'fadeIn 5s forwards';
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change this threshold as needed
      }
    );

    const whyRefCurrent = whyRef.current;

    if (whyRefCurrent) {
      observer.observe(whyRefCurrent);
    }

    return () => {
      if (whyRefCurrent) {
        observer.unobserve(whyRefCurrent);
      }
    };
  }, []);




  return (
    <section className="loan-container" ref={whyRef}>
      <h2 className="loan-header">Simple Loan Application Process</h2>
      <div className="progress-container">
        <div className="grid-container">
          <div className="grid-item">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: '20%' }}>20%</div>
            </div>
            <h3 className="loan-head">Talk to our export</h3>
            <p className="loan-text">Connect with our dedicated loan advisor for a better understanding of the loan process</p>
          </div>
          <div className="grid-item">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: '40%' }}>40%</div>
            </div>
            <h3 className="loan-head">Check your loan eligibility</h3>

            <p className="loan-text">Free feel to check your loan eligibility and receive conditional loan letter</p>
          </div>
          <div className="grid-item">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: '60%' }}>60%</div>
            </div>
            <h3 className="loan-head">Upload document with details</h3>
            <p className="loan-text">Submit your required document for complete the necessary forms for your verification and evaluation</p>
          </div>
          <div className="grid-item">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: '80%' }}>80%</div>
            </div>
            <h3 className="loan-head">Negotiate for best intrest</h3>
            <p className="loan-text">Student's Chooice experts negotiate to the best Competitive Interest rates and the highest possible loan amount for you</p>
          </div>
          <div className="grid-item">
            <div className="progress-bar-wrapper">
              <div className="progress-bar" style={{ width: '100%' }}>100%</div>
            </div>
            <h3 className="loan-head">Get loan disburse</h3>
            <p className="loan-text">Receive your final approval and senction letter, ensuring prompt fund disbursement from the lender</p>
          </div>

        </div>
      </div>
{/* new changes------------------------------------------------------------- */}
      {/* <CircularProgress value={40} color='green'>
        <CircularProgressLabel className="progress-circle">40%</CircularProgressLabel>
      </CircularProgress> */}

    </section>
  );
};

export default LoanProcess;
