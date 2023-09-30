import { createContext, ReactNode, useContext, useState } from 'react';

type LoginContextType = {
  username: string;
  logout: () => void;
  login: (username: string) => void;
};

const LoginContext = createContext<LoginContextType | null>(null);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('');
  const logout = () => {
    setUsername('');
  };
  const login = (username: string) => {
    setUsername(username);
  };
  return (
    <LoginContext.Provider
      value={{
        username,
        logout,
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within an LoginProvider');
  }
  return useContext(LoginContext) as LoginContextType;
};
