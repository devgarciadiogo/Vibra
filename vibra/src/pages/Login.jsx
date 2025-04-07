import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = UseNavigate()

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
