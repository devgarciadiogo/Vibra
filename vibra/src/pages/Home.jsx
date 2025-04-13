import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import '../styles/Home.css'

function Home() {
  const { user } = useContext(UserContext)

  return (
    <div className="home-container">
      {user ? (
        <h1>Bem-vindo(a), {user.nome}!</h1>
      ) : (
        <h1>Bem-vindo ao Vibra 🎵</h1>
      )}
    </div>
  )
}

export default Home
