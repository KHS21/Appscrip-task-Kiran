import React from "react";
import "./footer.css";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-section-1">
        <div className="newsletter-container">
          <p className="newsletter-title">BE THE FIRST TO KNOW</p>
          <p className="newsletter-subtitle">
            Sign up for updates from Mettā Muse.
          </p>
          <p class="mobile-footer-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div class="newsletter-form">
            <input
              type="text"
              class="newsletter-input"
              placeholder="Enter your email..."
            />
            <button type="button" class="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-title">CONTACT US</div>
            <p className="contact-phone">+44 221 133 5360</p>
            <p className="contact-email">customercare@mettamuse.com</p>
          </div>
          <div className="currency-info">
            <div className="currency-title">CURRENCY</div>
            <div className="currency-details">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgITrU2GZAKgLDLVPVgnnkTiCV2gmDDYx6Wg&usqp=CAU"
                className="currency-flag"
                alt=""
              />
              <p className="currency-text">USD</p>
            </div>
            <p className="currency-description">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-section-2">
        <div className="company-links">
          <div className="company-links-title">mettā muse</div>
          <FaAngleDown className="footer-down-icon" />
          <ul class="company-links-list">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="quick-links">
          <div className="quick-links-title">QUICK LINKS</div>
          <FaAngleDown className="footer-down-icon" />
          <ul class="quick-links-list">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div class="social-links">
          <div class="social-links-title">FOLLOW US</div>
          {/* <FaAngleDown className="footer-down-icon" /> */}
          <FaInstagramSquare className="instagram-icon" />
          <FaLinkedin className="linkedin-icon" />

          <div className="accepted-payment">mettā muse Accepts</div>
          <div className="accepted-payment-method">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTSmY2k18ehzxOMauJHDX6iWdMn_t5zH4dSNG2fyK0F6kL3hyj-SnV3Ks1ulezfNogH4&usqp=CAU"
              alt=""
            />
            <img
              src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDyiuoDlhJHyAjDV9k1v80o5sw7x9Aor23Q&usqp=CAU"
              alt=""
            />
            <img
              src="https://logowik.com/content/uploads/images/331_apple_pay.jpg"
              alt=""
            />
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/88/74/amex-online-payment-methods-icon-logo-e-commerce-vector-49378874.jpg"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_7Yek2QZzOqYGPMAPrDwOo6aAOzx_O_Sww&usqp=CAU"
              alt=""
            />
          </div>
        </div>

      </div>

      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
