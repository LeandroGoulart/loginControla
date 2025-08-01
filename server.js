// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (email === 'admin@email.com' && senha === '123') {
    return res
      .status(200)
      .json({ mensagem: 'Login autorizado', token: 'abc123' });
  }

  return res.status(401).json({ mensagem: 'Credenciais inválidas' });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});


