import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" style={{
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <div className="logo">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Sister Salon Logo" style={{ height: '60px' }} />
            </div>

            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li onClick={() => setIsOpen(false)}><a href="#hero">Acasă</a></li>
                <li onClick={() => setIsOpen(false)}><a href="#about">Despre Noi</a></li>
                <li onClick={() => setIsOpen(false)}><a href="#services">Servicii</a></li>
                <li onClick={() => setIsOpen(false)}><a href="#gallery">Galerie</a></li>
                <li onClick={() => setIsOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
