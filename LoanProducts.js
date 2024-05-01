import React from 'react';
import './LoanProducts.css'; // Import CSS file for styling

function LoanProducts() {
  return (
    <div className="loan-products-container">
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Loan Products</a></li>
            <li><a href="#">Application Process</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <div className="main-content">
        <section className="loan-section">
          <h2>In-country Loans</h2>
          <p>
            In-country loans are designed to assist students with their educational expenses within the country.
            Whether you're looking to cover tuition fees, purchase study materials, or manage living expenses,
            our in-country loan options provide flexible solutions tailored to your needs.
          </p>
          {/* Additional content specific to in-country loans */}
        </section>

        <section className="loan-section">
          <h2>Out-country Loans</h2>
          <p>
            Out-country loans are ideal for students pursuing education abroad.
            With our out-country loan options, you can access funds to cover tuition fees,
            accommodation, travel expenses, and other related costs, ensuring a smooth and hassle-free
            experience during your international studies.
          </p>
          {/* Additional content specific to out-country loans */}
        </section>
      </div>
    </div>
  );
}

export default LoanProducts;
