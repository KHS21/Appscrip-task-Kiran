import React from "react";
import "./header.css";
import { BiGridAlt } from "react-icons/bi";
import { PiFlowerLight } from "react-icons/pi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagRemoveOutline, IoPersonOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

function Header() {
  return (
    <header>
      {/* top bar section  */}
      <div className="top-bar-container">
        <div className="top-bar-item">
          <BiGridAlt className="top-bar-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="top-bar-item mobile-top-bar-item">
          <BiGridAlt className="top-bar-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="top-bar-item mobile-top-bar-item">
          <BiGridAlt className="top-bar-icon" />
          <p>Lorem ipsum dolor</p>
        </div>
      </div>

      {/* main header section */}
      <div className="header-section">
        <div className="header-container">
          <div className="header-icons">
          <LuMenu className="mobile-menu-icon"/>
          <PiFlowerLight className="logo-icon" />
      </div>
          <p className="logo-text">LOGO</p>
          <ul className="header-icons">
            <li>
              <CiSearch />
            </li>
            <li>
              <CiHeart />
            </li>
            <li>
              <IoBagRemoveOutline/>
            </li>
            <li  className="header-person-icon">
              <IoPersonOutline />
            </li>
            <li className="header-language-selector">
              <select name="language" class="language-selector">
                <option value="Eng">Eng</option>
                <option value="Kan">Kan</option>
                <option value="Hin">Hin</option>
              </select>
            </li>
          </ul>
        </div>

        {/* nav bar section  */}
        <nav>
          <ul className="nav-menu">
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
