import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    //Simuala um login bem sucedido
    const usuarioFake = {
      nome: 'Usuario Teste',
      email: email,
    }

    setUser(usuarioFake) //Salva o usuario no contexto
    navigate('/') // Redireciona para a home
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
        <p style={{ marginTop: '10px' }}>
          Não tem conta ? <Link to="Cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  )
}
