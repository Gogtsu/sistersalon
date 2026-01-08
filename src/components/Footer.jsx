import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#5D544D',
            color: '#fff',
            padding: '3rem 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#E3D5CA' }}>Sister Salon</h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: '#E3D5CA' }}>Instagram</a>
                    <a href="#" style={{ color: '#E3D5CA' }}>Facebook</a>
                    <a href="#" style={{ color: '#E3D5CA' }}>TikTok</a>
                </div>

                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    &copy; {new Date().getFullYear()} Sister Salon. Toate drepturile rezervate.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
