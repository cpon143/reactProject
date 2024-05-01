// WhyChoose.js
import React, { useEffect, useRef } from 'react';
import why from './image/why-us1.png';
import ok from './image/ok-icon.png';
import './WhyChoose.css';

const WhyChoose = () => {
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation to the text container
          const textContainer = document.querySelector('.left-part');
          textContainer.style.animation = 'slideIn 2s both';

          // Add animation to the image container
          const imgContainer = document.querySelector('.img-view');
          imgContainer.style.animation = 'slideIn 2s both';
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
    <section className="why-container" ref={whyRef}>
      <div className="why-part">
        <h2 className="hed-why">Why Choose Student's Choice?</h2>
        <div className="third-section">
          <div className="left-part">
            <h2>Are you dreaming of studying abroad?</h2>
            <h2 className="why-hed-3rd">Start your journey today!</h2>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> 100% Free Loan Assistance</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Best Loan Offers</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Competitive Interest Rate</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Quick And Hassle-Free Process</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Up to 100% Fee And Expense Covered</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Quick Loan Approval Process</p>
            <p><span><img src={ok} alt="ok-icon" className="ok-icon" /></span> Flexible Repayment Options</p>
          </div>
          <div className="img-view">
            <img src={why} alt="why-us-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
