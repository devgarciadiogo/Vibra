import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../styles/Cadastro.css'
import { Link } from 'react-router-dom'

export default function Cadastro() {
  //Criação dos estados para os campos do formulario
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [alertMessage, setAlertMessage] = useState('') // Defina o estado alertMessage
  const [senha, setSenha] = useState('')

  // Pega o método setUser do contexto global
  const { setUser } = useContext(UserContext)

  //Permite navegar para outra rota
  const navigate = useNavigate()

  //Função chamada quando o formulário for enviado
  function handleCadastro(e) {
    e.preventDefault()

    //Verifica se todos os campos foram preenchidos corretamente
    if (nome && email && senha) {
      const novoUsuario = {
        //Cria um novo usuário
        nome,
        email,
      }
      setUser(novoUsuario) //Salva o usuário no contexto
      setAlertMessage('Cadastro realizado com sucesso') //Define a mensagem de sucesso
      navigate('/') // Redireciona para a pagina Home
    } else {
      setAlertMessage('Por favor, preencha todos os campos') //Mensagem de erro
    }
  }

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      {/* Exibe a mensagem de alerta */}
      {alertMessage && <div className="alert">{alertMessage}</div>}{' '}
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

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
        <button type="submit">Cadastrar</button>
        <p>
          Ja tem conta ? <Link to="/login">Faça Login</Link>
        </p>
      </form>
    </div>
  )
}
