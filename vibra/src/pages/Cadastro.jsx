import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../styles/Cadastro.css'

export default function Cadastro() {
  //Criação dos estados para os campos do formulario
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // Pega o método setUser do contexto global
  const { setUser } = useContext(UserContext)

  //Permite navegar para outra rota
  const navigate = useNavigate()

  //Função chamada quando o formulário for enviado
  function handleCadastro(e) {
    e.preventDefault()

    //Simula a criação de usuário
    const novoUsuario = {
      nome,
      email,
    }

    setUser(novoUsuario) //Salva o usuário no contexto
    navigate('/') // Redireciona para a pagina Home
  }

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
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
      </form>
    </div>
  )
}
