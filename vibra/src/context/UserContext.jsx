import { createContext, useState } from 'react'

//Criando o contexto
export const UserContext = createContext()

//Criando o provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
