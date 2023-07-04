import React from 'react';
import './App.css'; // Assuming you have a separate CSS file for styling

const Card = () => {
  return (
    <div className="body">
      <h1>Bootstrap Price Table</h1>
      <div className="container">
        <div className="card">
          <h4>FREE</h4>
          <h2>$0<span id="v1">/month</span></h2>
          <hr />
          <ul type="none">
            <li><i className="fa-solid fa-check"></i>Single User</li>
            <li><i className="fa-solid fa-check"></i>5GB Storage</li>
            <li><i className="fa-solid fa-check"></i>Unlimited Public Projects</li>
            <li><i className="fa-solid fa-check"></i>Community Access</li>
            <li className='text-muted'><i className="fa-solid fa-times"></i>Unlimited Private Projects</li>
            <li className='text-muted'><i className="fa-solid fa-times"></i>Dedicated Phone Support</li>
            <li className='text-muted'><i className="fa-solid fa-times"></i>Free Subdomain</li>
            <li className='text-muted'><i className="fa-solid fa-times"></i>Monthly Status Reports</li>
            <div>
              <a href="https://www.pricecard.in/free">Button</a>
            </div>
          </ul>
        </div>

        <div className="card">
          <h4>PLUS</h4>
          <h2>$9<span id="v1">/month</span></h2>
          <hr />
          <ul type="none">
            <li><i className="fa-solid fa-check"></i><strong> 5 Users</strong></li>
            <li><i className="fa-solid fa-check"></i>50GB Storage</li>
            <li><i className="fa-solid fa-check"></i>Unlimited Public Projects</li>
            <li><i className="fa-solid fa-check"></i>Community Access</li>
            <li><i className="fa-solid fa-check"></i>Unlimited Private Projects</li>
            <li><i className="fa-solid fa-check"></i>Dedicated Phone Support</li>
            <li><i className="fa-solid fa-check"></i>Free Subdomain</li>
            <li className='text-muted'><i className="fa-solid fa-times"></i>Monthly Status Reports</li>
            <div>
              <a href="https://www.pricecard.in/plus">Button</a>
            </div>
          </ul>
        </div>

        <div className="card">
          <h4>PRO</h4>
          <h2>$49<span id="v1">/month</span></h2>
          <hr />
          <ul type="none">
            <li><i className="fa-solid fa-check"></i><strong> Unlimited Users</strong></li>
            <li><i className="fa-solid fa-check"></i>150GB Storage</li>
            <li><i className="fa-solid fa-check"></i>Unlimited Public Projects</li>
            <li><i className="fa-solid fa-check"></i>Community Access</li>
            <li><i className="fa-solid fa-check"></i>Unlimited Private Projects</li>
            <li><i className="fa-solid fa-check"></i>Dedicated Phone Support</li>
            <li><i className="fa-solid fa-check"></i><strong>Unlimited</strong> Free Subdomains</li>
            <li><i className="fa-solid fa-check"></i>Monthly Status Reports</li>
            <div>
              <a href="https://www.pricecard.in/pro">Button</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
