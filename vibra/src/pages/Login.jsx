import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [alertMessage, setAlertMessage] = useState('') // Definir o estado para a mensagem de alerta
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  // Verifica se o usuário já está logado, se sim, redireciona para a página inicial

  useEffect(() => {
    if (user) {
      navigate('/') //Redireciona para home
    }
  }, [user, navigate])

  function handleLogin(e) {
    e.preventDefault()

    //Verifica se o email e senha foram preenchidos corretamente

    if (email && senha) {
      const usuarioFake = {
        nome: 'Usuario Teste',
        email: email,
      }

      setUser(usuarioFake) //Salva o usuario no contexto
      localStorage.setItem('usuario', JSON.stringify(usuarioFake)) //Salva no localStorage
      setAlertMessage('Login bem-sucedido') //Define a mensagem de sucesso
      navigate('/') // Redireciona para a home
    } else {
      setAlertMessage('Por favor, preencha todos os campos') //Mensagem de erro
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {alertMessage && <div className="alert">{alertMessage}</div>}{' '}
      {/*Exibe a mensagem de alerta */}
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
          Não tem conta ? <Link to="/Cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  )
}
