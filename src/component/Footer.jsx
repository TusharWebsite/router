import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '1rem' }}>
    <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
      <p>
        Contact us: 
        <a href="mailto:info@yourwebsite.com" style={{ textDecoration: 'underline', color: 'white' }}>
          info@yourwebsite.com
        </a>
      </p>
    </div>
  </footer>
  )
}

export default Footer;