import React from 'react';

const Login = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', maxWidth: '24rem', width: '100%' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }} htmlFor="Username">Username</label>
            <input
              type="email"
              id="email"
              style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', boxShadow: '0 0 0 2px transparent' }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: '#4b5563', marginBottom: '0.5rem' }} htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', boxShadow: '0 0 0 2px transparent' }}
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem', cursor: 'pointer', textAlign: 'center', border: 'none', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
