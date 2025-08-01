'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">NIDHI SK</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="dropdown">
          <span>Services</span>
          <ul className="dropdown-menu">
            <li>
              <Link href="/services/seo">SEO</Link>
            </li>
            <li>
              <Link href="/services/consulting">Consulting</Link>
            </li>
            <li className="dropdown-sub">
              <span>Web Development</span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/services/web-development/mern">MERN</Link>
                </li>
                <li>
                  <Link href="/services/web-development/mean">MEAN</Link>
                </li>
                <li>
                  <Link href="/services/web-development/dotnet">.NET</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
