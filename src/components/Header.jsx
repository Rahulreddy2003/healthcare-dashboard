import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <input type="text" className="search-bar" placeholder="Search..." disabled />
      <div className="icons">
        <span className="notification">🔔</span>
        <span className="profile">👤 John Doe</span>
        <button className="add-btn">＋</button>
      </div>
    </header>
  );
}

export default Header;