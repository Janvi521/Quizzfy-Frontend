import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Footer() {
  return <>

    <footer className="footer bg-black text-light pt-5 pb-3 mt-5     ">
      
      <div className="container"  >
        <div className="row gy-4">
          {/* Brand & Description */}
          <div className="col-md-3">
            <h4 className="footer-brand">
              <span className="navbar-brand fw-bold text-gradient dark">Quizz</span>
              <span className="text-white">fy</span>
            </h4>
            <p className="small text-light">
              The ultimate quiz platform for students and teachers. Learn, compete, and earn rewards
            </p>
            <div className="d-flex gap-3 mt-3 social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="fw-bold text-secondary">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* For Teachers */}
          <div className="col-md-3">
            <h6 className="fw-bold text-secondary">For Teachers</h6>
            <ul className="list-unstyled small">
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold text-secondary">Contact Us</h6>
            <ul className="list-unstyled small">
              <li>
                <FaEnvelope className="me-2 text-purple" /> janvip123@gmail.com
              </li>
              <li>
                <FaPhoneAlt className="me-2 text-purple" /> (414) 687 - 5892
              </li>
              <li>
                <FaMapMarkerAlt className="me-2 text-purple" />
                794 Mcallister St<br />San Francisco, 94102
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Bottom Text */}
        <hr className="border-secondary mt-4" />
        <div className="text-end small">
          All Rights Reserved |{' '}
          <a href="#" className="text-purple text-decoration-none">
            Terms and Conditions
          </a>{' '}
          |{' '}
          <a href="#" className="text-purple text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  </>
}

export default Footer;
