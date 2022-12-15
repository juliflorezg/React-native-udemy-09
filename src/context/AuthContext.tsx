import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// 1. definir como se ve mi información
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
  iconLibrary?: 'ionicons' | 'fontawesome5';
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
  setFavoriteIcon: (
    name: string,
    iconLibrary: 'ionicons' | 'fontawesome5',
  ) => void;
  logout: () => void;
  setUsername: (name: string) => void;
}

// 4. crear el contexto
export const AuthContext = createContext({} as AuthContextProps);
// export const AuthContext = createContext<AuthContextProps>({authState:});

// 5. Componente proveedor del estado
export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const setFavoriteIcon = (
    name: string,
    iconLibrary: 'ionicons' | 'fontawesome5',
  ) => {
    dispatch({type: 'setFavIcon', payload: {name, iconLibrary}});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const setUsername = (name: string) => {
    dispatch({type: 'setUsername', payload: {name}});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        setFavoriteIcon,
        logout,
        setUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
