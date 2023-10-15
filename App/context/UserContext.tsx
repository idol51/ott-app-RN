import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface IUserContext {
    userName: string,
    setUserName: any,
    isSignedIn: boolean,
    setIsSignedIn: any
}

const UserContext = createContext<IUserContext>({
    userName: '',
    setUserName: () => '',
    isSignedIn: false,
    setIsSignedIn: () => false
})

export function UserProvider({ children }: { children: ReactNode }) {
    const [ userName, setUserName ] = useState<string>('');
    const [ isSignedIn, setIsSignedIn ] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ userName, setUserName, isSignedIn, setIsSignedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);
