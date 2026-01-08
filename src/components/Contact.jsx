import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-nude)', color: 'var(--color-text)' }}>
            <div className="container">
                <div className="glass-card" data-aos="fade-up" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: '4rem 2rem'
                }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Te așteptăm cu drag!</h2>

                    <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Adresă</h3>
                            <p>Sos. Oltenitei nr.131A, et.1, Bucharest, Romania, 041319</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Program</h3>
                            <p>Luni - Vineri: 09:00 - 20:00</p>
                            <p>Sâmbătă: 10:00 - 16:00</p>
                            <p>Duminică: Închis</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact</h3>
                            <p>Tel / WhatsApp: 0732 233 034</p>
                            <p>Email: hello@sistersalon.ro</p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        <iframe
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?q=Sos.%20Oltenitei%20nr.131A%2C%20et.1%2C%20Bucharest%2C%20Romania%2C%20041319&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>

                    <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>
                        Programează-te Acum
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
