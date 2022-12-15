import React, {createContext} from 'react';

// 1. definir como se ve mi información
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// 2. estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// 3. definir el modelo del context (para decirle a React como luce y que expone el context)
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// 4. crear el contexto
export const AuthContext = createContext({} as AuthContextProps);
// export const AuthContext = createContext<AuthContextProps>({authState:});

// 5. Componente proveedor del estado
export const AuthProvider = ({children}: {children: JSX.Element}) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
