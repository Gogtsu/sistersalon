import React from 'react';

const Gallery = () => {
    const images = [
        `${import.meta.env.BASE_URL}assets/gallery1.jpg`,
        `${import.meta.env.BASE_URL}assets/gallery2.jpg`,
        `${import.meta.env.BASE_URL}assets/gallery3.jpg`
    ];

    return (
        <section id="gallery" className="section-padding">
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Galerie</h2>
                <p className="text-center mb-4" style={{ color: '#7a7a7a' }}>Momente surprinse în salonul nostru</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {images.map((img, index) => (
                        <div key={index} style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            height: '300px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
