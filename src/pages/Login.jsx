// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          alert("Login autorizado");
          navigate("/dashboard");
        } else {
          alert("Credenciais inválidas");
        }
      })
      .catch(err => {
        alert("Erro ao conectar: " + err.message);
      });
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
