// Contacts.js
import React from 'react';
import '../Contacts/Contact.css';

const Contacts = () => {
  return (
    <div className="container">
      <div>
        <h2>Bangalore Office</h2>
        <p>
          Olsen Spaces, Ground Floor, Site no 41/41A, 12th main road, HSR layout
          Sector 6, Bengaluru – 560102
        </p>
      </div>

      <div>
        <h2>Coimbatore Office</h2>
        <p>
          SNS Kalvi Nagar, Sathy Main Road (NH-209) Vazhiyampalayam,
          Saravanampatti Post Coimbatore – 641035, Tamil Nadu, IN.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:contactus@kalvium.com">contactus@kalvium.com</a></p>
        <p>Mobile: +91 9483 200 300</p>
      </div>

      <div>
        <h2>Social</h2>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
