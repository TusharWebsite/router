import React from 'react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          backgroundImage: "url('/path/to/your/hero-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'Red', marginBottom: '1rem' }}>
          Welcome to Your Website
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'Red', marginBottom: '1.5rem' }}>
          We provide the best services to make your life easier.
        </p>
        <a
          href="#services"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            fontSize: '1.125rem',
            textDecoration: 'none',
          }}
        >
          Explore Services
        </a>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: 'Black', padding: '2rem' }}>
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Feature One</h3>
            <p style={{ color: '#4b5563' }}>Description of feature one and its benefits.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Feature Two</h3>
            <p style={{ color: '#4b5563' }}>Description of feature two and its benefits.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Feature Three</h3>
            <p style={{ color: '#4b5563' }}>Description of feature three and its benefits.</p>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
