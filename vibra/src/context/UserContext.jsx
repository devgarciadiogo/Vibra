import { createContext, useEffect, useState } from 'react'

//Criando o contexto
export const UserContext = createContext()

//Criando o provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuario')
    if (usuarioSalvo) {
      setUser(JSON.parse(usuarioSalvo))
    }
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
