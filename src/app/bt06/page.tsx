import React from 'react';
import "./page.scss"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src="https://cdn.vietnambiz.vn/171464876016439296/2020/7/16/image014-450x253-15948916770071198445387.png" alt="Logoipsum" className="header__logo-img" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-link">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="/updates" className="header__nav-link">Updates</a>
            </li>
            <li className="header__nav-item">
              <a href="/services" className="header__nav-link">Services</a>
            </li>
            <li className="header__nav-item">
              <a href="/features" className="header__nav-link">Features</a>
            </li>
            <li className="header__nav-item">
              <a href="/about" className="header__nav-link">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <a href="/profile" className="header__user-link">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" alt="User Avatar" className="header__user-avatar" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;