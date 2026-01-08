import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Coafor & Hairstyling",
            description: "Tunsori personalizate și styling care îți pune în valoare trăsăturile naturale.",
            image: `${import.meta.env.BASE_URL}assets/par.jpg`
        },
        {
            title: "Vopsit Păr",
            description: "Culori vibrante și tehnici moderne (Balayage, Airtouch) pentru un look proaspăt.",
            image: `${import.meta.env.BASE_URL}assets/vopsit.jpg`
        },
        {
            title: "Manichiură & Pedichiură",
            description: "Îngrijire completă pentru mâini și picioare, într-un mediu perfect igienic.",
            image: `${import.meta.env.BASE_URL}assets/unghii.jpg`
        },
        {
            title: "Tratamente de Îngrijire",
            description: "Ritualuri de relaxare și hidratare pentru păr sănătos și strălucitor.",
            image: `${import.meta.env.BASE_URL}assets/trat.jpg`
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-beige)' }}>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Serviciile Noastre</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass-card" data-aos="fade-up" data-aos-delay={index * 100} style={{
                            textAlign: 'center',
                            backgroundColor: 'var(--color-white)',
                            padding: '0',
                            borderRadius: '20px',
                            transition: 'transform 0.3s ease',
                            cursor: 'default',
                            overflow: 'hidden'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                                <p style={{ color: '#7a7a7a' }}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
