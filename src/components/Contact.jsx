import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-nude)', color: 'var(--color-text)' }}>
            <div className="container">
                <div className="glass-card" style={{
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
                            <p>Strada Primăverii nr. 15, București</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Program</h3>
                            <p>Luni - Vineri: 09:00 - 20:00</p>
                            <p>Sâmbătă: 10:00 - 16:00</p>
                            <p>Duminică: Închis</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact</h3>
                            <p>Tel: 0722 123 456</p>
                            <p>Email: hello@sistersalon.ro</p>
                        </div>
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
