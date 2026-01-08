import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${import.meta.env.BASE_URL}assets/hero-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 20px'
        }}>
            <div className="hero-content glass-card" data-aos="fade-up" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '3rem',
                maxWidth: '800px',
                width: '100%'
            }}>
                <h1 style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Frumusețe ca între surori
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-body)',
                    color: '#f8f8f8',
                    fontWeight: 600
                }}>
                    Sister Salon – un spațiu cald unde frumusețea este despre tine
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#contact" className="btn btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-text)' }}>
                        Programează-te
                    </a>
                    <a href="#about" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
                        Descoperă salonul
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
