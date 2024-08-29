import React from 'react';

const Image = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e7eb' }}>
      <div style={{ maxWidth: '32rem', width: '100%', backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlM19saW9uc19iYXNpY19vdXRsaW5lX2ljb25fZ3JhZmZpdGlfc3ltYm9sX3N0cmVldF85MGE5MjVhZC0xM2I5LTRjNGMtOGIwOC03YWUxY2NiZTg4ODVfMS5qcGc.jpg"
          alt="Descriptive alt text"
          style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', marginBottom: '1rem' }}
        />
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Image Title</h2>
        <p style={{ color: '#4b5563' }}>This is a detailed description of the image, explaining its significance or providing context.</p>
      </div>
    </div>
  );
}

export default Image;
