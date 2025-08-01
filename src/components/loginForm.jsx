// src/components/LoginForm.jsx
import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-placeholder">🔒 Faça login 🔒</div>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Senha" className="input-field" />
        <button className="login-button">Entrar</button>
      </div>
    </div>
  );
};

export default LoginForm;
