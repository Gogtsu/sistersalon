import React from 'react';

const Benefits = () => {
    const benefits = [
        { text: "Atmosferă relaxată", icon: "☕" },
        { text: "Relații pe termen lung", icon: "🤝" },
        { text: "Atenție personalizată", icon: "💖" },
        { text: "Fără grabă, fără stres", icon: "🌿" }
    ];

    return (
        <section id="benefits" className="section-padding" style={{
            backgroundColor: 'var(--color-nude)',
            color: 'var(--color-text)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container text-center">
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>De ce Sister Salon?</h2>
                <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
                    Pentru că meriți un loc unde să te simți cu adevărat binevenită.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} style={{
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            padding: '1.5rem 2rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }}>
                            <span>{benefit.icon}</span>
                            <span>{benefit.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
