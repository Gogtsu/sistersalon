import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }} data-aos="fade-right">
                    <div style={{ position: 'relative' }}>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/about.png`}
                            alt="Cozy Salon Atmosphere"
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            backgroundColor: 'var(--color-nude)',
                            padding: '2rem',
                            borderRadius: '20px',
                            zIndex: -1,
                            width: '100%',
                            height: '100%'
                        }}></div>
                    </div>
                </div>

                <div style={{ flex: '1', minWidth: '300px' }} data-aos="fade-left">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Despre Noi</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#7a7a7a' }}>
                        „La Sister Salon, fiecare clientă este tratată ca o soră. Ne pasă, ascultăm și avem grijă de tine.”
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: '#7a7a7a' }}>
                        Am creat acest loc din dorința de a oferi mai mult decât servicii de înfrumusețare. Ne-am dorit un sanctuar unde să te poți relaxa, să poți fi tu însăți și să te bucuri de momente de liniște.
                    </p>
                    <p style={{ color: '#7a7a7a' }}>
                        Echipa noastră este unită de pasiunea pentru frumos și de dorința de a construi relații autentice. Aici, nu ești doar un client, ești parte din familia noastră.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
