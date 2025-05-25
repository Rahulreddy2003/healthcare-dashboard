import React from 'react';
import { navLinks } from '../data/navigation';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>General</h3>
      <ul>
        {navLinks.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;