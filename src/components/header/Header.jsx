import React from 'react';
import logo from 'assets/logo.svg';
import './header.less';

export default function Header() {
  return (
    <header className="header container">
      <a href="/" className="header__logo">
        <img src={logo} alt="Demo Application" />
      </a>
      <nav className="header__nav">
        <a href="/" className="nav__item">Home</a>
        <a href="/help" className="nav__item">Help</a>
        <a href="/signin" className="nav__item">Sign Up</a>
        <a href="/signout" className="nav__item">Log In</a>
      </nav>
    </header>
  );
}
