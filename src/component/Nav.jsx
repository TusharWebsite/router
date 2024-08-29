import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <Link to={"/image"}>
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlM19saW9uc19iYXNpY19vdXRsaW5lX2ljb25fZ3JhZmZpdGlfc3ltYm9sX3N0cmVldF85MGE5MjVhZC0xM2I5LTRjNGMtOGIwOC03YWUxY2NiZTg4ODVfMS5qcGc.jpg"
          alt="hello"
          width={50}
          height={50}
        />
      </Link>
      <Link to="/" className="home" style={{marginLeft:"500px"}}>Home</Link>
      <Link to="/login">
        <button className='bg-red'>Login</button>
      </Link>
      <Link to="/Sign">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Nav;
