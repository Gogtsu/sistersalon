import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Ana M.",
            text: "M-am simțit exact ca acasă. Fetele sunt minunate și extrem de atente la detalii. Recomand cu toată încrederea!",
            stars: 5
        },
        {
            name: "Elena P.",
            text: "În sfârșit un salon unde nu te simți pe fugă. Atmosfera este atât de caldă și primitoare. Abia aștept să revin!",
            stars: 5
        },
        {
            name: "Maria S.",
            text: "Cea mai relaxantă experiență de beauty din oraș. Mulțumesc pentru răbdare și profesionalism!",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-beige)' }}>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Ce spun clientele noastre</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((review, index) => (
                        <div key={index} className="glass-card" style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '2rem',
                            borderRadius: '20px',
                            position: 'relative'
                        }}>
                            <div style={{ color: 'var(--color-accent)', fontSize: '2rem', lineHeight: 1, marginBottom: '1rem' }}>❝</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#555' }}>{review.text}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>{review.name}</span>
                                <span style={{ color: '#FFD700' }}>{'★'.repeat(review.stars)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
